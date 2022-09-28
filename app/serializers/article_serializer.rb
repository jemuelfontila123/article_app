class ArticleSerializer 
    include FastJsonapi::ObjectSerializer
    attributes :id, :title, :highlight, :body 
end