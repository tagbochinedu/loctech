import React, { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../Firebase";
import Image from "../../Resources/login.jpg";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(user);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="h-screen">
      <div className=" h-full">
        <div className="lg:flex lg:justify-between justify-center items-center flex-wrap h-full g-6  ">
          <div className="lg:w-5/12 sm:w-6/12 flex justify-center items-center   ">
            <form onSubmit={submitHandler}>
              <div className="text-center mb-6 text-gray-800">
                <p className="text-lg mb-0 mr-4">Sign Up</p>
              </div>
              <div className="my-2">
                <input
                  type="text"
                  ref={emailRef}
                  className="form-control block w-full px-1 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out duration-700 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none focus:shadow-sm focus:shadow-login-blue"
                  placeholder="Email address"
                />
              </div>
              <div className="my-2">
                <input
                  type="password"
                  ref={passwordRef}
                  className="form-control block w-full px-1 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out duration-700 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none focus:shadow-sm focus:shadow-login-blue"
                  placeholder="Password"
                />
              </div>
              <div className="my-2">
                <input
                  type="password"
                  ref={passwordConfirmRef}
                  className="form-control block w-full px-1 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out duration-700 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none focus:shadow-sm focus:shadow-login-blue"
                  placeholder="Password Confirmation"
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
                <h1 className="g:text-3xl text-2xl lg:max-w-xs pt-2 pb-2 text-white font-bold">
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
