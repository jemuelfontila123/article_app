import React from "react";
import { Link } from "react-router-dom";
import articlesApi from "../../services/articlesApi";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
const ArticleNavbar = (props) => {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const searchArticles = async data => {
   
  try{
    const articles = await articlesApi.searchArticles(data.search_value) 
    console.log(articles)  
    props.setArticles(articles.articles)
  }catch(error){
    console.log(error)
  }

  }
  return (
    <nav class="navbar navbar-expand-lg bg-light sticky-top">
      <div class="container-fluid ">
        <span class="navbar-brand mb-0 h1 ms-4" href="#">
          Dev Articles
        </span>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav me-auto">
            <Link to="/" exact className="nav-link active me-2">
              {" "}
              Home{" "}
            </Link>
            <form role="search" class="me-2 w-100" onSubmit={handleSubmit(searchArticles)}>
              <input
                class="form-control "
                type="search"
                placeholder="Search Articles"
                aria-label="Search"
                {...register("search_value")} 
              />
            </form>
          </div>
          {!props.user && (
            <div class="me-2 d-flex">
              <Link to="/users/sign_in" class="btn btn-link" type="button">
                {" "}
                Sign In
              </Link>
              <Link
                to="/users/sign_up"
                style={{ textDecoration: "none" }}
                class="btn btn-primary"
                type="button"
              >
                {" "}
                Create Account{" "}
              </Link>
            </div>
          )}
          {props.user && (
            <div class="me-2 d-flex">
              <Link to="/users/post" class="btn btn-link" type="button">
                {" "}
                Create Article
              </Link>
              <Link
                to="/users/profile"
                style={{ textDecoration: "none" }}
                class="btn btn-primary"
                type="button"
              >
                {" "}
                Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default ArticleNavbar;
