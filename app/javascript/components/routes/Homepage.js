import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ArticleNavbar from "../shared/ArticleNavbar";
import { useLocation } from "react-router-dom";
import articlesApi from "../../services/articlesApi";
const Homepage = (props) => {
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState(null);
  const location = useLocation();

  const fetchArticles = async () => {
    try {
      const data = await articlesApi.getArticles();
      console.log(data);
      setArticles(data.articles);
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
          <h1 class="display-5">{article.title}</h1>
          <p class="lead">
            {article.highlight}
          </p>
          <figcaption class ="blockquote-footer"> 
          <i class="bi bi-person-fill mx-2"></i>Jemuel Fontila 
          </figcaption>
          <hr class="my-4" />
        </div>
      </div>
    </div>
  ));
  console.log(user)
  console.log(props.articles);
  return (
    <div>
      <ArticleNavbar user={user} />
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
    </div>
  );
};
Homepage.propTypes = {
  articles: PropTypes.array,
};
export default Homepage;
