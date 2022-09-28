import React, {useEffect} from "react";
import ArticleNavbar from "../shared/ArticleNavbar";
import { useForm } from "react-hook-form";
import sessionsApi from "../../services/sessionsApi";
import { useHistory } from "react-router-dom";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (window.localStorage.getItem("token")) 
      history.push('/');  

  },[])
  let history = useHistory();
  const onLogIn = async (data) => {
    const { email, password } = data;
    const userDetails = {
      user: {
        email,
        password,
      },
    };
    try {
      const data = await sessionsApi.signIn(userDetails);
      console.log(data);
      window.localStorage.setItem('user', JSON.stringify(data.user)) 
      window.localStorage.setItem('token', JSON.stringify(data.token))
      history.push({ pathname: "/", state: { data } });
    } catch (error) {
      console.log(error);
      reset();
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
            <form onSubmit={handleSubmit(onLogIn)}>
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
                  Enter Valid Password
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Log In
              </button>
            </form>
          </div>
          <div class="col"> </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
