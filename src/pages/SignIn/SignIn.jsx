import React, { use } from "react";
import { AuthContext } from "../../contexts/AtuheContext/AuthContext";
import loginLottie from "../../assets/lotties/Login.json"
import Lottie from "lottie-react";
import { useLocation, useNavigate } from "react-router";
import SocialLogin from "../Shared/SocialLogin";

const SignIn = () => {
    
const {singInUser} = use(AuthContext);
const location = useLocation();
const navigate = useNavigate();
const from = location.state || '/';

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        //sign in user
        singInUser(email, password)
        .then(result => {
            console.log(result);
            navigate(from);

        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-15">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "300px" }}
            animationData={loginLottie}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <h1 className="text-5xl font-bold">Login Now!</h1>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sing In</button>
                <SocialLogin from={from}></SocialLogin>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
