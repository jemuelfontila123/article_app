class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }  

  def authenticate_user!
    if request.headers['Authorization'].present?
      authenticate_or_request_with_http_token do |token|
        begin
          jwt_payload = JWT.decode(token, Rails.application.secrets.secret_key_base).first

          @current_user_id = jwt_payload['id']
          current_user(@current_user_id)
        rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
          head :unauthorized
        end
      end
    end
  end
  
  def current_user(current_user_id)
    @current_user||= User.find(current_user_id)
  end 

  def signed_in?
    @current_user.present?
  end

end
