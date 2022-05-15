import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import css from './css.css'

import Image from "../../Resources/login.jpg";

const SignIn = (props) => {
  //Hook
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDARs0gHPZ6ei0wmSMBZTOFXzrC7_chR4U",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      if (res) {
        navigate("home");
      } else {
        res.json().then((data) => {
          let errorMessage = "Authentication failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          alert(errorMessage);
        });
      }
    });
  };

  return (
    <section className="h-screen">
      <div className=" h-full">
        <div className="lg:flex sm:block justify-between items-center flex-wrap h-full g-6  ">
          <div className="lg:relative lg:w-5/12 xs:w-full lg:h-full">
            <div className="-skew-x-12 bg-login-blue hidden lg:block absolute z-10 w-2/4 -right-16 h-full"></div>
            <div className="-skew-x-17 bg-red-300 hidden lg:block absolute z-0 w-1/4 -right-24 h-full"></div>
            <div className="z-20 lg:absolute lg:w-full mb-12 md:mb-0 bg-login-blue lg:pl-20 sm:p-5 lg:h-full ">
              <h1 className="g:text-3xl text-2xl w-full lg:max-w-xs pt-2 pb-2 text-white font-bold">
                Find the best candidates for your organisation
              </h1>
              <img
                src={Image}
                className="w-full pt-0 lg:block hidden"
                alt="two people at a table"
              />
            </div>
          </div>

          <div className="lg:w-5/12 sm:w-full  mb-12 py-2 px-6 ">
            <form onSubmit={submitHandler}>
              <div className="flex flex-row items-center justify-center lg:justify-start text-gray-800">
                <p className="text-lg mb-0 mr-4">Sign In</p>
              </div>
              <div className="my-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  ref={emailInputRef}
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  ref={passwordInputRef}
                />
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Sign In
                </button>
                <p className="block text-slate-500 mt-8">
                  Don't have an account? Sign up{" "}
                  <a href="/signup" className="text-red-400 font-bold">
                    Here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
