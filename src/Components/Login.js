import Image from "../Resources/login.jpg";

const Login = () => {
  return (
    <section class="h-screen">
      <div class=" h-full">
        <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6 ">
          <div class="h-full -skew-y-5 z-0 bg-login-blue"/>
          <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 bg-login-blue pl-20 h-full ">
            <h1 class="text-3xl max-w-xs pt-10 pb-0 text-white-500">
              Find the best candidates for your organisation
            </h1>
            <img src={Image} class="w-full pt-0" alt="two people at a table" />
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 pr-20">
            <form>
              <div class="flex flex-row items-center justify-center lg:justify-start text-gray-800">
                <p class="text-lg mb-0 mr-4">Login</p>
              </div>

              <div class="my-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div>

              <div class="mb-6">
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>

              <div class="text-center lg:text-left">
                <button
                  type="button"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
