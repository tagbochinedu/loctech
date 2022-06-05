import React, { useRef, useState, useEffect } from "react";
import Error from "../UI/Error";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../Firebase";
import Image from "../../Resources/login.jpg";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordConfirmFocus, setPasswordConfirmFocus] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    emailRef.current.value = '';
    passwordRef.current.value = ''
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    let password = "";
    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      password = passwordRef.current.value;
    }

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/");
    } catch (error) {
      alert(error.code);
      if (
        error.code.toString() === "auth/invalid-email" &&
        emailRef.current.value.trim().length > 0
      ) {
        setErrorText("Email is invalid");
        setEmailFocus(true);
        setError(true);
      } else if (error.code.toString() === "auth/email-already-in-use") {
        setErrorText("Email has already been used");
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
        error.code.toString() === "auth/internal-error" &&
        passwordRef.current.value.trim().length > 0 &&
        passwordConfirmRef.current.value.trim().length > 0
      ) {
        setErrorText("Passwords do not match");
        setError(true);
        setPasswordConfirmFocus(true);
      } else if (
        error.code.toString() === "auth/internal-error" &&
        passwordRef.current.value.trim().length === 0
      ) {
        setErrorText("Password field cannot be left empty");
        setError(true);
        setPasswordFocus(true);
      } else if (
        (error.code.toString() === "auth/internal-error" &&
          passwordRef.current.value.trim().length < 6) ||
        (error.code.toString() === "auth/weak-password" &&
          passwordRef.current.value.trim().length < 6)
      ) {
        setErrorText("Password must be more than five characters");
        setError(true);
        setPasswordFocus(true);
      } else if (
        error.code.toString() === "auth/internal-error" &&
        passwordRef.current.value.trim().length > 0 &&
        passwordConfirmRef.current.value.trim().length === 0
      ) {
        setErrorText("Password confirmation field cannot be left empty");
        setError(true);
        setPasswordConfirmFocus(true);
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
  const passwordConfirmFocusHandler = () => {
    setPasswordConfirmFocus(false);
    setError(false);
  };

  return (
    <section className="h-screen">
      <div className=" h-full">
        <div className="lg:flex lg:justify-between justify-center items-center flex-wrap h-full g-6 sm:flex ">
          <div className="lg:w-5/12 md:w-6/12  flex justify-center items-center h-full  ">
            <form onSubmit={submitHandler}>
              <div className="text-center mb-6 text-gray-800">
                <p className="text-lg mb-0 mr-4">Sign Up</p>
                {error && <Error text={errorText} />}
              </div>
              <div className="my-2">
                <input
                  type="text"
                  ref={emailRef}
                  className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:border-blue-600 focus:outline-none focus:shadow-sm focus:shadow-login-blue  ${
                    emailFocus
                      ? "bg-red-100 shadow-sm shadow-red-700 duration-200"
                      : "bg-white duration-700"
                  }`}
                  placeholder="Email address"
                  onFocus={emailFocusHandler}
                />
              </div>
              <div className="my-2">
                <input
                  type="password"
                  ref={passwordRef}
                  className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none focus:shadow-sm focus:shadow-login-blue  ${
                    passwordFocus
                      ? "bg-red-100 shadow-md shadow-red-300 duration-200"
                      : "bg-white duration-700"
                  }`}
                  placeholder="Password"
                  onFocus={passwordFocusHandler}
                />
              </div>
              <div className="my-2">
                <input
                  type="password"
                  ref={passwordConfirmRef}
                  className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none focus:shadow-sm focus:shadow-login-blue  ${
                    passwordConfirmFocus
                      ? "bg-red-100 shadow-md shadow-red-300 duration-200"
                      : "bg-white duration-700"
                  }`}
                  placeholder="Password Confirmation"
                  onFocus={passwordConfirmFocusHandler}
                />
              </div>
              <div className="text-left">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md transition ease-in-out duration-700 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Sign Up
                </button>
                <p className="block text-slate-500 mt-8">
                  Already have an account? Sign In{" "}
                  <Link
                    to="/"
                    className="text-red-400 font-bold cursor-pointer"
                  >
                    Here
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="lg:relative lg:w-5/12 xs:w-full lg:h-full sm:hidden lg:block">
            <div className="skew-x-12 bg-login-blue hidden lg:block absolute z-10 w-2/4 -left-20 h-full"></div>
            <div className="skew-x-17 bg-red-300 hidden lg:block absolute z-0 w-3/4 -left-32 h-full"></div>
            <div className=" z-20 lg:absolute lg:w-full mb-12 md:mb-0 bg-login-blue lg:pl-20 sm:p-5 lg:h-full  flex justify-center items-center">
              <div>
                <h1 className="g:text-3xl text-2xl lg:max-w-xs pt-2 pb-2 text-white font-bold hidden">
                  The world's leading platform for connecting professionals to
                  employers
                </h1>
                <img
                  src={Image}
                  className="w-full pt-0 lg:block hidden"
                  alt="two people at a table"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
