import React from "react";
import ArticleNavbar from "../shared/ArticleNavbar";
import { useForm } from "react-hook-form";
import registrationsApi from "../../services/registrationsApi"
import { useHistory } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  const onSignUp = async(data) => {
    const { username, first_name, last_name, email, password } = data;
    const userDetails = {
      user: {
        username,
        first_name,
        last_name,
        email,
        password,
      }, 
    };
    try{
      const data = await registrationsApi.register(userDetails)
      console.log(data)
      reset()
      history.push({ pathname: '/', state: {data} })
    }catch(error){
      console.log(error)
    }
  };
  return (
    <>
      {" "}
      <ArticleNavbar />
      <div class="container mt-4">
        <div class="row">
          <div class="col"></div>
          <div class="col-6">
            <form onSubmit={handleSubmit(onSignUp)}>
              <div class="mb-3">
                <label class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="usernameHelp"
                  {...register("username")}
                />
                <div id="usernameHelp" class="form-text">
                  It is what the users see when you post an article. Make sure
                  it is cool
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  {...register("first_name")}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  {...register("last_name")}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  {...register("email")}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  {...register("password")}
                />
                <div id="passwordHelp" class="form-text">
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Register Account
              </button>
            </form>
          </div>
          <div class="col"> </div>
        </div>
      </div>
    </>
  );
};

export default Register;
