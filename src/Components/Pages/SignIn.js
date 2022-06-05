import React, { useRef, useState } from "react";
import Error from "../UI/Error";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../Firebase";
import Image from "../../Resources/login.jpg";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(user);
      navigate("/home");
    } catch (error) {
      console.log(error.code);
      if (
        error.code.toString() === "auth/invalid-email" &&
        emailRef.current.value.trim().length > 0
      ) {
        setErrorText("Email is invalid");
        setEmailFocus(true);
        setError(true);
      } else if (
        error.code.toString() === "auth/invalid-email" &&
        emailRef.current.value.trim().length === 0
      ) {
        setErrorText("Email field cannot be left empty");
        setEmailFocus(true);
        setError(true);
      } else if (
        error.code.toString() === "auth/wrong-password" &&
        passwordRef.current.value.trim().length > 0
      ) {
        setErrorText("Password is incorrect");
        setError(true);
        setPasswordFocus(true);
      } else if (
        error.code.toString() === "auth/internal-error" &&
        passwordRef.current.value.trim().length === 0
      ) {
        setErrorText("Password field cannot be left empty");
        setError(true);
        setPasswordFocus(true);
      }
    }
  };
  const emailFocusHandler = () => {
    setEmailFocus(false);
    setError(false);
  };
  const passwordFocusHandler = () => {
    setPasswordFocus(false);
    setError(false);
  };

  return (
    <section className="h-screen">
      <div className=" h-full">
        <div className="lg:flex lg:justify-between justify-center items-center flex-wrap h-full g-6 sm:flex ">
          <div className="lg:relative lg:w-5/12 xs:w-full lg:h-full sm:hidden lg:block">
            <div className="-skew-x-12 bg-login-blue hidden lg:block absolute z-10 w-2/4 -right-20 h-full"></div>
            <div className="-skew-x-17 bg-red-300 hidden lg:block absolute z-0 w-3/4 -right-32 h-full"></div>
            <div className="z-20 lg:absolute lg:w-full bg-login-blue lg:pl-20 sm:p-5 lg:h-full flex justify-center items-center">
              <div>
                <h1 className="g:text-3xl text-2xl w-full lg:max-w-xs pt-2 pb-2 text-white font-bold hidden">
                  Find the best candidates for your organisation
                </h1>
                <img
                  src={Image}
                  className="w-full pt-0 lg:block hidden"
                  alt="two people at a table"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-5/12 sm:w-8/12  flex justify-center items-center h-full">
            <form onSubmit={submitHandler}>
              <div className="text-center mb-6 text-gray-800">
                <p className="text-lg mb-0 mr-4 text-center">Sign In</p>
                {error && <Error text={errorText} />}
              </div>
              <div className="my-2">
                <input
                  type="text"
                  className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:border-blue-600 focus:outline-none focus:shadow-sm focus:shadow-login-blue  ${
                    emailFocus
                      ? "bg-red-100 shadow-sm shadow-red-700 duration-200"
                      : "bg-white duration-700"
                  }`}
                  placeholder="Email address"
                  ref={emailRef}
                  onFocus={emailFocusHandler}
                />
              </div>
              <div className="my-2">
                <input
                  type="password"
                  className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none focus:shadow-sm focus:shadow-login-blue  ${
                    passwordFocus
                      ? "bg-red-100 shadow-md shadow-red-300 duration-200"
                      : "bg-white duration-700"
                  }`}
                  placeholder="Password"
                  ref={passwordRef}
                  onFocus={passwordFocusHandler}
                />
              </div>
              <div className="text-left ">
                <button
                  type="submit"
                  className=" px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 transition ease-in-out duration-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Sign In
                </button>
                <p className="block text-slate-500 mt-8">
                  Don't have an account? Sign up{" "}
                  <Link
                    to="/signup"
                    className="text-red-400 font-bold cursor-pointer"
                  >
                    Here
                  </Link>
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
