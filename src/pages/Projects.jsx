import React from "react";
import { Helmet } from "react-helmet-async";
import AnimatedText from "../components/AnimatedText";
import project0 from "../assets/images/project0.png";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import { GithubIcon } from "../components/Icons";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Aryan Shah | Projects</title>
        <meta name="description" content="any description" />
      </Helmet>

      <main className="flex flex-col items-center justify-center w-full">
        <div className="w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 pt-0">
          <AnimatedText text="Where Ideas meet execution" className="mb-10" />

          <div className="grid grid-cols-12 gap-24 gap-y-32">

            <div className="col-span-12">
              <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-10 relative rounded-br-2xl">

                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />

                <a href="https://hostel-management-frontend-plum.vercel.app" target="_blank" className="w-1/2 cursor-pointer overflow-hidden">
                  <img src={project0} alt="Hostel Management and Complaint Registration" className="w-full h-auto" />
                </a>

                <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                  <span className="text-purple-600 font-medium text-xl">Featured Project</span>
                  <a href="https://hostel-management-frontend-plum.vercel.app" target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light">Hostel Management and Complaint Registration System</h2>
                  </a>
                  <p className="my-2 font-medium text-dark dark:text-light/75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet, venorum voluptatem in nam velit dolor, inventore quasi ratione iusto, tempore optio eveniet nostrum quisquam!</p>

                  <div className="mt-2 flex items-center gap-4">
                    <a href="https://github.com/Fast5/Hostel-Management-Frontend" target="_blank" className="w-10 dark:text-light">
                      <GithubIcon />{" "}
                    </a>
                    <a href="https://hostel-management-frontend-plum.vercel.app" target="_blank" className="bg-dark text-light dark:bg-light dark:text-dark px-4 py-2 p-2 text-lg font-semibold rounded-lg">
                      View live
                    </a>
                  </div>
                </div>
              </article>
            </div>
            
            <div className="col-span-6">
              <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative">

                <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />

                <a href="https://airbnb-clone-frontend-mocha.vercel.app" target="_blank" className="w-full cursor-pointer overflow-hidden rounded-3xl">
                  <img src={project1} alt="Hostel Management and Complaint Registration" className="w-full h-auto rounded-3xl" />
                </a>

                <div className="w-full flex flex-col items-start justify-between mt-4 text-dark dark:text-light">
                  <span className="text-purple-600 font-medium text-xl">Personal Project</span>
                  <a href="https://airbnb-clone-frontend-mocha.vercel.app" target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold">Airbnb Clone</h2>
                  </a>

                  <div className="w-full mt-2 flex items-center justify-between">
                    <a href="https://github.com/AryanShah874/Airbnb-clone_Frontend" target="_blank" className="w-8">
                      <GithubIcon />{" "}
                    </a>
                    <a href="https://airbnb-clone-frontend-mocha.vercel.app" target="_blank" className="text-md underline font-semibold">
                      Live
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-span-6">
              <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative">
                
                <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
                
                <a target="_blank" className="w-full cursor-pointer overflow-hidden rounded-3xl">
                  <img src={project3} alt="DALL-E Clone" className="w-full h-auto rounded-3xl" />
                </a>

                <div className="w-full flex flex-col items-start justify-between mt-4">
                  <span className="text-purple-600 font-medium text-xl">Personal Project</span>
                  <a target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">Threads Clone</h2>
                  </a>

                  <div className="w-full mt-2 flex items-center justify-between text-dark dark:text-light">
                    <a href="https://github.com/AryanShah874/Threads-Frontend" target="_blank" className="w-8">
                      <GithubIcon />{" "}
                    </a>
                    {/* <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="text-md underline font-semibold">
                      Live
                    </a> */}
                  </div>
                </div>
              </article>
            </div>

            <div className="col-span-6">
              <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative">
                
                <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
                
                <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="w-full cursor-pointer overflow-hidden rounded-2xl">
                  <img src={project2} alt="DALL-E Clone" className="w-full h-auto rounded-2xl" />
                </a>

                <div className="w-full flex flex-col items-start justify-between mt-4">
                  <span className="text-purple-600 font-medium text-xl">Personal Project</span>
                  <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">DALL-E Clone</h2>
                  </a>

                  <div className="w-full mt-2 flex items-center justify-between text-dark dark:text-light">
                    <a href="https://github.com/AryanShah874/Dall-E-Clone_Frontend" target="_blank" className="w-8">
                      <GithubIcon />{" "}
                    </a>
                    <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="text-md underline font-semibold">
                      Live
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-span-6">
              <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative">
                
                <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
                
                <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="w-full cursor-pointer overflow-hidden rounded-2xl">
                  <img src={project2} alt="DALL-E Clone" className="w-full h-auto rounded-2xl" />
                </a>

                <div className="w-full flex flex-col items-start justify-between mt-4">
                  <span className="text-purple-600 font-medium text-xl">Personal Project</span>
                  <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">Apple Landing Screen</h2>
                  </a>

                  <div className="w-full mt-2 flex items-center justify-between text-dark dark:text-light">
                    <a href="https://github.com/AryanShah874/Dall-E-Clone_Frontend" target="_blank" className="w-8">
                      <GithubIcon />{" "}
                    </a>
                    <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="text-md underline font-semibold">
                      Live
                    </a>
                  </div>
                </div>
              </article>
            </div>

            {/* <div className="col-span-6">Project3</div>
            <div className="col-span-6">Project4</div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
