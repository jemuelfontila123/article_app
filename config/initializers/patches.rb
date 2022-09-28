ActionDispatch::Reloader.class_eval do

    def self.to_prepare &block
      ActiveSupport::Reloader.to_prepare &block
    end
  
  end