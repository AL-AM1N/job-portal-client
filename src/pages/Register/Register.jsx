import Lottie from "lottie-react";
import React, { use } from "react";
import registerLottie from "../../assets/lotties/waiting register.json"
import { AuthContext } from "../../contexts/AtuheContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";

function Register() {


  const {createUser} = use(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        createUser(email, password)
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        })
    }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-15">
        <div className="text-center lg:text-left">
          <Lottie style={{width:'300px'}} animationData={registerLottie} loop={true}></Lottie>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                <h1 className="text-5xl font-bold">Register Now!</h1>
              <label className="label">Email</label>
              <input type="email" className="input" name="email" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" name="password" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
              <SocialLogin></SocialLogin>
            </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
