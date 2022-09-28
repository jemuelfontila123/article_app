import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ArticleNavbar from "../shared/ArticleNavbar"
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';

const Homepage = (props) => {
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState({})
  const {data}  = props;
  useEffect(() => {
    if (props.articles && props.articles.length) {
      setArticles(props.articles);
    } 
    if (location && location.state.data)
      setUser(location.state.data)
  }, []);
  const location = useLocation();
  const content = articles.map((article) => (
    <div key={article.id} class="container">
      <div class="row">
        <div class="col-3"> </div>
        <div class="col-6">
          <h3> {article.title} </h3>
          <small class="text-muted">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            blandit tellus urna, ac aliquam sapien aliquam in. Integer posuere
            dui sem, ac porta urna faucibus eu.{" "}
          </small>
        </div>
        <div class="col"> </div>
      </div>
    </div>
  ));
  console.log(location.state)
  console.log(props.articles)
  return (
    <div>
      <ArticleNavbar />
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
