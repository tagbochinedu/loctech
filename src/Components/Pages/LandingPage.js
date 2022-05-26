import { useState } from "react";

const LandingPage = () => {
  const [nav, setNav] = useState(true);
  const next = ">";
  const menuChangeHandler = () => {
    setNav(!nav);
  };

  return (
    <section>
      <nav class="w-full items-center py-6 lg:px-12 px-2 bg-login-blue text-white">
        <div className="flex justify-between">
          <div className="-skew-y-17 font-bold text-xl">
            <a href="home">Find Jobs</a>
          </div>
          <div class="items-center lg:px-6 px-2 relative">
            <span
              className="lg:hidden absolute right-2 transition-all duration-500 ease-linear"
              onClick={menuChangeHandler}
            >
              <ion-icon
                size="large"
                name={nav ? "menu-outline" : "close-outline"}
              ></ion-icon>
            </span>
            <ul
              class={`${"navbar-nav lg:flex pl-0 list-style-none mr-auto transition-all duration-500 ease-linear "} ${
                nav ? "hidden" : "block "
              }`}
            >
              <li class="nav-item p-2">
                <a class="nav-link text-white" href="home">
                  Jobs
                </a>
              </li>
              <li class="nav-item p-2">
                <a class="nav-link text-white" href="home">
                  Company Review
                </a>
              </li>
              <li class="nav-item p-2">
                <a class="nav-link text-white" href="home">
                  Find Salaries
                </a>
              </li>
              <li class="nav-item p-2">
                <a
                  class="nav-link text-white p-2 rounded font-bold border-1 bg-white text-login-blue "
                  href="home"
                >
                  Post Jobs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 class="text-4xl my-20 md:mx-12">Find Your Dream Job</h1>
        </div>
      </nav>
      <div class="lg:px-16 py-20 md:px-0 relative">
        <div className="lg:w-4/5 w-full flex -top-5 absolute px-8 lg:mx-16 focus:border-none text-slate-500 ">
          <form className=" z-10 justify center w-full ">
            <input className="w-full  h-10 border-2 rounded-lg " />
          </form>
        </div>

        <div class="flex md:w-5/12 sm:w-full justify-between">
          <p>Showing 68 results</p>
          <p>
            <span class="text-slate-400">Sort by:</span> Latest
          </p>
        </div>
        <div class="md:flex sm:block lg:justify-between md:justify-around">
          <div class="md:w-5/12 sm:w-full">
            <div class=" bg-login-blue text-white border-2 p-5 lg:mb-10 md:mb-0 lg:rounded-xl shadow-2xl">
              <div class="flex justify-between ">
                <h1 class="text-xl pb-5 font-bold">Front end developer</h1>
                <h1 class="text-xl pb-5 font-bold">$2k-$5k</h1>
              </div>
              <h3>Ikeja, Lagos</h3>
              <p>
                We seek an experienced Javascript web application deveolper who
                is proficient with React.js and has excellent communication
                skills
              </p>
              <div class="text-right">
                <button class="text-red-400 bg-white border-1 lg:rounded-xl text-md my-5 p-1">
                  See more
                </button>
              </div>
            </div>
            <div class="bg-white text-slate-500 border-2 p-5 lg:mb-10 md:mb-0 lg:rounded-xl shadow-2xl">
              <div class="flex justify-between text-login-blue">
                <h1 class="text-xl  pb-5 font-bold">Front end developer</h1>
                <h1 class="text-xl pb-5 font-bold">$3k-$7k</h1>
              </div>
              <h3>Yaba, Lagos</h3>
              <p>
                The ideal candidate should be able to work with designers,
                back-end developers and with front end web technologies
              </p>
              <div class="text-right">
                <button class="bg-red-400 text-white border-1 lg:rounded-xl text-md my-5 p-1">
                  See more
                </button>
              </div>
            </div>
            <div class="bg-white text-slate-500 border-2 p-5 lg:mb-10 md:mb-0 lg:rounded-xl shadow-2xl">
              <div class="flex justify-between text-login-blue">
                <h1 class="text-xl  pb-5 font-bold">Front end developer</h1>
                <h1 class="text-xl pb-5 font-bold">$4k-$8k</h1>
              </div>
              <h3>Victoria Island, Lagos</h3>
              <p>
                The ideal candidate should be shouldbe comfortable with
                following technology stacks: HTML, CSS, Javascript an Vue.js
                and/or React.js and everything in between
              </p>
              <div class="text-right">
                <button class="bg-red-400 text-white border-1 lg:rounded-xl text-md my-5 p-1">
                  See more
                </button>
              </div>
            </div>
            <div class="bg-white text-slate-500 border-2 p-5 lg:mb-10 md:mb-0 lg:rounded-xl shadow-2xl">
              <div class="flex text-login-blue justify-between font-bold">
                <h1 class="text-xl pb-5">Front end developer</h1>
                <h1 class="text-xl pb-5 ">$5k-$10k</h1>
              </div>
              <h3>Lekki, Lagos</h3>
              <p>
                In this role, you will be responsible for developing an
                implementing user interface components using React.js concepts
                and workflows such as Redux, Flux and Webpack.
              </p>
              <div class="text-right">
                <button class="bg-red-400 text-white border-1 lg:rounded-xl text-md my-5 p-1">
                  See more
                </button>
              </div>
            </div>
          </div>
          <div class="h-full md:w-5/12 md:block sm:hidden p-5 border-2 lg:rounded-xl shadow-2xl">
            <div class="border-b-2 py-6">
              <h1 class="text-xl pb-5 font-bold text-login-blue">
                Front end developer
              </h1>
              <button class="bg-login-blue border-2 rounded-md p-1 text-white">
                Apply Via Find Job
              </button>
            </div>
            <div class="py-6 text-lg text-slate-500">
              <p class="pb-2">
                In this role, you will be responsible for developing and
                implementing user interface components using React.js concepts
                and workflow such as Redux, Flux and Wwebpack. You will also be
                respnsible for profiling and improving front end performance and
                documenting our front-end codebase
              </p>
              <ul class="list-disc pl-6">
                <li class="py-1">Minimum Qualification: Degree</li>
                <li class="py-1">Experience Level: Senior Level</li>
                <li class="py-1">Experience Length: 5years</li>
              </ul>
              <h3 class="font-bold">Job Descripion/Requirements</h3>
              <ul class="list-disc pl-6">
                <li class="py-3">
                  5+ years experience of front end related(HTML5 +JS + CSS3)
                  development work experience, familiar with mobile application
                  development
                </li>
                <li class="py-1">
                  Proficient in Javascript/Typescript, mastering technologies
                  such as HTML, CSS, DOM, AJAX, etc, can quickly complete the
                  established interactive design functions; Atleast 4 years
                  experience is required
                </li>
                <li class="py-1">
                  Through understanding of React.js and its core principles
                </li>
                <li class="py-1">
                  Experience with popular React.js workflows (such as Flux or
                  Redux)
                </li>
                <li class="py-1">Familiarity with RESTful API's</li>
                <li class="py-1">Knowledge of isomorphic react is a plus</li>
                <li class="py-1">
                  Familiaritywith modern front-end build pipelines and tools
                </li>
                <li class="py-1">
                  Experience with common front-end development tools such as
                  Babel, Webpack, NPM, etc
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <button className="px-2 py-1 text-white font-bold bg-login-blue border-2">
            1
          </button>
          <button className="px-2 py-1 mx-1 text-slate-500 font-bold border-2">
            2
          </button>
          <button className="px-2 py-1 mx-1 text-slate-500 font-bold border-2">
            3
          </button>
          <button className="px-2 py-1 mx-1 text-slate-500 font-bold border-2">
            4
          </button>
          <button className="px-2 py-1 mx-1 text-slate-500 font-bold border-2">
            5
          </button>
          <button className="px-2 py-1 mx-1 text-slate-500 font-bold border-2">
            {next}
          </button>
        </div>
      </div>
      <footer class="flex bg-login-blue text-white px-12 py-8 justify-between">
        <div className="w-1/5 text-bold">
          <a href="home">Find Jobs</a>
        </div>
        <div class="w-1/5 text-md lg:block xs:hidden">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Calender</li>
            <li>Term and Conditions</li>
          </ul>
        </div>
        <div class="w-1/5 text-md">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Calender</li>
            <li>Term and Conditions</li>
          </ul>
        </div>
        <div class="w-1/5 text-center text-md">
          <h1>Social Media</h1>
        </div>
      </footer>
    </section>
  );
};

export default LandingPage;
