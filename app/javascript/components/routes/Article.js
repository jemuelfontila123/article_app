import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ArticleNavbar from "../shared/ArticleNavbar"; 
import articlesApi from "../../services/articlesApi";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null) 
  
  const fetchArticle = async () => {
   try{

    const data = await articlesApi.getArticle(id) 
    console.log(data)  
    setArticle(data);
   }catch(error){
    console.log('error');
   }

  }
  useEffect(() => {
   fetchArticle();
  },[])
  console.log(id);
  console.log(article); 
  if(article!=null){
  return (
    <>
      <ArticleNavbar />
      <div className="container">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6 text-center">
            <figure class="mt-4">
              <blockquote class="blockquote">
                <h1 className="display-5">{article.title}</h1>
                <small class="text-muted">
                  {article.highlight}

                </small>
              </blockquote>
              <figcaption class="blockquote-footer">
                {`${article.user.first_name}  ${article.user.last_name}`}
              </figcaption>
            </figure>
          </div>
          <div class="col"> </div>
        </div>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6">
            {" "}
            <p>{article.body}</p>{" "}
          </div>
          <div class="col"> </div>
        </div>
      </div>
    </>
  );}
  return null;
};

export default Article;
