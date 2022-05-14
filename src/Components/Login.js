import { useRef } from "react";
import Image from "../Resources/login.jpg";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch()
    
    
  };

  return (
    <section class="h-screen">
      <div class=" h-full">
        <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6 ">
          <div class="xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 bg-login-blue pl-20 h-full ">
            <h1 class="text-3xl max-w-xs pt-10 pb-0 text-white-500">
              Find the best candidates for your organisation
            </h1>
            <img src={Image} class="w-full pt-0" alt="two people at a table" />
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-full sm-px-auto mb-12 md:mb-0 pr-20">
            <form onSubmit={submitHandler}>
              <div class="flex flex-row items-center justify-center lg:justify-start text-gray-800">
                <p class="text-lg mb-0 mr-4">Login</p>
              </div>

              <div class="my-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  ref={emailInputRef}
                />
              </div>

              <div class="mb-6">
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                  ref={passwordInputRef}
                />
              </div>

              <div class="text-center lg:text-left">
                <button
                  type="button"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
                <p class='block text-slate-500 mt-8'>Don't have an account? Sign up <a href='facebook.com' class='text-red-400 font-bold' >Here</a></p>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Login;
