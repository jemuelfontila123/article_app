class ArticlesController < ApplicationController
    before_action :set_article, only: [:show, :edit, :update, :destroy] 

    before_action :authenticate_user! 
    
    before_action :set_articles, only: [:index]
    def index
      data  = { articles: @articles, count: Article.count}
      render json: data, include: ['user']
    end
  
    def new 
      @article = Article.new 
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
      if params[:page] 
        @articles = Article.page(params[:page]) 
      else 
        @articles = Article.page(1) 
      end 
    end
  
  end
  