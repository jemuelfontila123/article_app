import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ArticleNavbar from "../shared/ArticleNavbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import articlesApi from "../../services/articlesApi";
const Homepage = (props) => {
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const [pages, setPages] = useState(0); 
  const [currentPage, setCurrentPage] = useState(1);
  
  const nextPage = async page => { 
    if(page > 0 && page <= pages){
     try{
      const data = await articlesApi.pagedArticles(page);
      setArticles(data.articles);
      setCurrentPage(page)
     }catch(error){
       console.log(error)
     }
    }
  }
  const fetchArticles = async () => {
    try {
      const data = await articlesApi.getArticles();
      console.log(data);
      setArticles(data.articles);
      console.log(data.pages);
      setPages(data.pages + 1);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (props.articles && props.articles.length) {
      setArticles(props.articles);
    }
    fetchArticles();
    if (location.state && location.state.data) setUser(location.state.data);

    if (window.localStorage.getItem("token")) {
      setUser(JSON.parse(window.localStorage.getItem("user")));
    }
  }, []);
  const content = articles.map((article) => (
    <div key={article.id} class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="jumbotron col-6">
          <h1 class="display-6">
            <Link to={`/articles/${article.id}`}>
            {article.title}
            </Link>
          </h1>
          <p class="lead">{article.highlight}</p>
          <figcaption class="blockquote-footer">
            <i class="bi bi-person-fill mx-2"></i>{article.user.username}
          </figcaption>
          <hr class="my-4" />
        </div>
      </div>
    </div>
  ));

  const pagesButton = Array(pages)
    .fill(1)
    .map((el, index) => (
      <li className={`page-item ${index+1 == currentPage ? 'active' : ''}`} key={index}>
        <a class="page-link" onClick={() => nextPage(index+1)}>
          {index + 1}
        </a>
      </li>
    ));
  return (
    <div>
      <ArticleNavbar user={user} setArticles={setArticles}/>
      <div class="container text-center mb-4">
        <div class="row">
          <div class="col"></div>
          <div class="col-6">
            <figure class="mt-4">
              <blockquote class="blockquote">
                <h1> Developer Articles </h1>
                <small class="text-muted">
                  {" "}
                  Written by various developers and software engineers who have
                  meaningful works and thoughts that can be helpful to others.
                </small>
              </blockquote>
              <figcaption class="blockquote-footer">
                Developers around the world
              </figcaption>
            </figure>
          </div>
          <div class="col"></div>
        </div>
      </div>
      {content}
      <div class="container">
        <div class="row">
          <div class="col-3"></div>
          <nav aria-label="Page navigation example" class="col-6">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link"  aria-label="Previous" onClick={() => nextPage(currentPage-1)}>
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              {pagesButton}
              <li class="page-item">
                <a class="page-link" aria-label="Next" onClick={() => nextPage(currentPage+1)}>
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
};
Homepage.propTypes = {
  articles: PropTypes.array,
};
export default Homepage;
