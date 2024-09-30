import React from "react";
import { Helmet } from "react-helmet-async";
import AnimatedText from "../components/AnimatedText";
import project0 from "../assets/images/project0.png";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import { GithubIcon } from "../components/Icons";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Aryan Shah | Projects</title>
        <meta name="description" content="any description" />
        <link rel="preload" as='image' href={project0} />
        <link rel="preload" as='image' href={project1} />
        <link rel="preload" as='image' href={project2} />
        <link rel="preload" as='image' href={project3} />
        <link rel="preload" as='image 'href={project4} />
      </Helmet>

      <main className="flex flex-col items-center justify-center w-full">
        <div className="w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 pt-0">
          <AnimatedText text="Where Ideas meet execution" className="mb-10 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">

            <div className="col-span-12">

              <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-10 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">

                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

                <a href="https://hostel-management-frontend-plum.vercel.app" target="_blank" className="w-1/2 cursor-pointer overflow-hidden lg:w-full">
                  <motion.img transition={{duration: 0.3}} src={project0} alt="Hostel Management and Complaint Registration" className="w-full h-auto" />
                </a>

                <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                  <span className="text-purple-600 font-medium text-xl xs:text-base">Featured Project</span>
                  <a href="https://hostel-management-frontend-plum.vercel.app" target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light sm:text-sm">Hostel Management and Complaint Registration System</h2>
                  </a>
                  <p className="my-2 font-medium text-dark dark:text-light/75 sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet, venorum voluptatem in nam velit dolor, inventore quasi ratione iusto, tempore optio eveniet nostrum quisquam!</p>

                  <div className="mt-2 flex items-center gap-4">
                    <a href="https://github.com/Fast5/Hostel-Management-Frontend" target="_blank" className="w-10 dark:text-light">
                      <GithubIcon />{" "}
                    </a>
                    <a href="https://hostel-management-frontend-plum.vercel.app" target="_blank" className="bg-dark text-light dark:bg-light dark:text-dark px-4 py-2 p-2 text-lg font-semibold rounded-lg sm:px-4 sm:text-base">
                      View live
                    </a>
                  </div>
                </div>
              </article>
            </div>
            
            <div className="col-span-6 sm:col-span-12">
              <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4">

                <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[102%] xs:h-[102%] xs:rounded-[1.5rem]" />

                <a href="https://airbnb-clone-frontend-mocha.vercel.app" target="_blank" className="w-full cursor-pointer overflow-hidden rounded-3xl">
                  <img src={project1} alt="Hostel Management and Complaint Registration" className="w-full h-auto rounded-3xl" />
                </a>

                <div className="w-full flex flex-col items-start justify-between mt-4 text-dark dark:text-light">
                  <span className="text-purple-600 font-medium text-xl lg:text-lg md:text-base">Personal Project</span>
                  <a href="https://airbnb-clone-frontend-mocha.vercel.app" target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">Airbnb Clone</h2>
                  </a>

                  <div className="w-full mt-2 flex items-center justify-between">
                    <a href="https://github.com/AryanShah874/Airbnb-clone_Frontend" target="_blank" className="w-8 md:w-6">
                      <GithubIcon />{" "}
                    </a>
                    <a href="https://airbnb-clone-frontend-mocha.vercel.app" target="_blank" className="text-md underline font-semibold md:text-base">
                      Live
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-span-6 sm:col-span-12">
              <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4">
                
                <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[102%] xs:h-[102%] xs:rounded-[1.5rem]" />
                
                <a target="_blank" className="w-full cursor-pointer overflow-hidden rounded-3xl">
                  <img src={project3} alt="DALL-E Clone" className="w-full h-auto rounded-3xl" />
                </a>

                <div className="w-full flex flex-col items-start justify-between mt-4 text-dark dark:text-light">
                  <span className="text-purple-600 font-medium text-xl lg:text-lg md:text-base">Personal Project</span>
                  <a target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">Threads Clone</h2>
                  </a>

                  <div className="w-full mt-2 flex items-center justify-between text-dark dark:text-light">
                    <a href="https://github.com/AryanShah874/Threads-Frontend" target="_blank" className="w-8 md:w-6">
                      <GithubIcon />{" "}
                    </a>
                    {/* <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="text-md underline font-semibold">
                      Live
                    </a> */}
                  </div>
                </div>
              </article>
            </div>

            <div className="col-span-6 sm:col-span-12">
              <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4">
                
                <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[102%] xs:h-[102%] xs:rounded-[1.5rem]" />
                
                <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="w-full cursor-pointer overflow-hidden rounded-3xl">
                  <img src={project2} alt="DALL-E Clone" className="w-full h-auto rounded-3xl" />
                </a>

                <div className="w-full flex flex-col items-start justify-between mt-4 text-dark dark:text-light">
                  <span className="text-purple-600 font-medium text-xl lg:text-lg md:text-base">Personal Project</span>
                  <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">DALL-E Clone</h2>
                  </a>

                  <div className="w-full mt-2 flex items-center justify-between text-dark dark:text-light">
                    <a href="https://github.com/AryanShah874/Dall-E-Clone_Frontend" target="_blank" className="w-8 md:w-6">
                      <GithubIcon />{" "}
                    </a>
                    <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="text-md underline font-semibold md:text-base">
                      Live
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-span-6 sm:col-span-12">
              <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-8">
                
                <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[102%] xs:h-[102%] xs:rounded-[1.5rem]" />
                
                <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="w-full cursor-pointer overflow-hidden rounded-3xl">
                  <img src={project4} alt="Apple Landing Screen" className="w-full h-auto rounded-3xl" />
                </a>

                <div className="w-full flex flex-col items-start justify-between mt-4 text-dark dark:text-light">
                  <span className="text-purple-600 font-medium text-xl lg:text-lg md:text-base">Personal Project</span>
                  <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">Apple Home</h2>
                  </a>

                  <div className="w-full mt-2 flex items-center justify-between text-dark dark:text-light">
                    <a href="https://github.com/AryanShah874" target="_blank" className="w-8 md:w-6">
                      <GithubIcon />{" "}
                    </a>
                    {/* <a href="https://resilient-croissant-511a94.netlify.app" target="_blank" className="text-md underline font-semibold">
                      Live
                    </a> */}
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
