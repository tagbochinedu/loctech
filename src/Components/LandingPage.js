const LandingPage = () => {
  return (
    <section>
      <nav class="relative w-full flex flex-wrap items-center justify-between py-3 px-12 bg-login-blue text-gray-200 navbar navbar-expand-lg navbar-light">
        <div class="container-fluid w-full items-center justify-between px-6">
          <ul class="navbar-nav flex pl-0 list-style-none mr-auto">
            <li class="nav-item p-2">
              <a class="nav-link text-white" href="facebook.com">
                Jobs
              </a>
            </li>
            <li class="nav-item p-2">
              <a class="nav-link text-white" href="facebook.com">
                Company Review
              </a>
            </li>
            <li class="nav-item p-2">
              <a
                class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                href="facebook.com"
              >
                Find Salaries
              </a>
            </li>
            <li class="nav-item p-2">
              <a
                class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0 "
                href="facebook.com"
              >
                Post Jobs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 class="text-4xl my-20 mx-12">Find Your Dream Job</h1>
        </div>
      </nav>
      <div class="px-12 py-20">
        <div class="flex w-1/3 justify-between">
          <p>Showing 68 results</p>
          <p>
            <span class="text-slate-400">Sort by:</span> Latest
          </p>
        </div>
        <div class="flex justify-between">
          <div class="w-3/7">
            <div class="bg-login-blue text-white border-2 p-5 rounded-xl shadow-2xl">
              <div class="flex justify-between ">
                <h1 class="text-xl pb-5">Front end developer</h1>
                <h1 class="text-xl pb-5">$2k-$5k</h1>
              </div>
              <h3>Ikeja, Lagos</h3>
              <p>
                We seek an experienced Javascript web application develper whos
                is proficient with React.js and has excellent communication
                skills
              </p>
              <div class="text-right">
                <button class="text-red-400 bg-white border-1 rounded-xl text-md my-5 p-1">
                  See more
                </button>
              </div>
            </div>
          </div>
          <div class="h-full w-3/7 p-5 border-2 rounded-xl shadow-2xl">
            <div class="border-b-2 py-6">
              <h1 class="text-xl pb-5">Front end developer</h1>
              <button class="bg-login-blue border-2 rounded-md p-1 text-white">
                Apply Via Find Job
              </button>
            </div>
            <div class="py-6 text-sm text-slate-500">
              <p class="pb-2">
                In this role, you will be responsible fr developing and
                implementing user interface components using React.js concepts
                an dwrkflow such as Redux, Flux and Wwebpack. You will also be
                respnsible for profiling an dimproving front end performance and
                documenting our front-end codebase
              </p>
              <ul class="list-disc pl-6">
                <li>Minimum Qualification: Degree</li>
                <li>Experience Level: Senior Level</li>
                <li>Experience Length: 5years</li>
              </ul>
              <h3>Job Descripion/Requirements</h3>
              <ul class="list-disc">
                <li>
                  5+ years experience of front end related(HTML5 +JS + CSS3)
                  development work experience, familiar with mobile application
                  development
                </li>
                <li>
                  Proficient in Javascript/Typescript, mastering technologies
                  such as HTML, CSS, DOM, AJAX, etc, can quickly complete the
                  established interactive design functions; Atleast 4 years
                  experience is required
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer class="flex bg-login-blue text-white px-12 justify-between">
        <div class="w-1/5">
          <h1>Find Jobs</h1>
        </div>
        <div class="w-1/5 text-lg">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Calender</li>
            <li>Term and Conditions</li>
          </ul>
        </div>
        <div class="w-1/5 text-lg">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Calender</li>
            <li>Term and Conditions</li>
          </ul>
        </div>
        <div class="w-1/5 text-center text-lg">
          <h1>Social Media</h1>
        </div>
      </footer>
    </section>
  );
};

export default LandingPage;
