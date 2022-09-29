class ArticlesController < ApplicationController
    before_action :set_article, only: [:show, :update, :destroy] 

    before_action :authenticate_user! 
    
    before_action :set_articles, only: [:index]
    PAGINATE_PER_PAGE = 2;

    def index  
      data  = { articles: @articles, pages: (@count/PAGINATE_PER_PAGE)}
      render json: data, include: ['user']
    end
    
    def show 
      render json: @article, include: ['user']
    end
    
    def create 
      @article = Article.new(article_params) 
  
      if @article.save 
        redirect_to @article 
      else 
        render :new, status: :unprocessable_entity 
      end 
    end 
  
    def update 
      if @article.update(article_params)
        redirect_to @article 
      else 
        render :edit, status: :unprocessable_entity
      end
    end
  
    def destroy 
      @article.destroy 
      redirect_to root_path, status: :see_other 
    end 

  
  
    private 
  
    def article_params 
      params.require(:article).permit(:title, :body, :status) 
    end
  
    def set_article 
      @article = Article.find(params[:id]) 
    end
   
    
    def set_articles  
      condition = JSON.parse(params[:q]) if params[:q].present?
      @q = Article.ransack(condition) 
      @articles = @q.result.page params[:page]
      @count = @articles.count
    end 

  
  end
  