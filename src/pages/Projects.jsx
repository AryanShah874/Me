import React from "react";
import { Helmet } from "react-helmet";
import AnimatedText from "../components/AnimatedText";
import project0 from "../assets/images/project0.png";
import { GithubIcon } from "../components/Icons";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Aryan Shah | Projects</title>
        <meta name="description" content="any description" />
      </Helmet>

      <main className="flex flex-col items-center justify-center w-full">
        <div className="w-full h-full inline-block z-0 bg-light p-32 pt-0">
          <AnimatedText text="Where Ideas meet execution" className="mb-10" />

          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-projectBG shadow-2xl p-10">
                <a href="https://hostel-management-frontend-plum.vercel.app" target="_blank" className="w-1/2 cursor-pointer overflow-hidden">
                  <img src={project0} alt="Hostel Management and Complaint Registration" className="w-full h-auto" />
                </a>

                <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                  <span className="text-purple-600 font-medium text-xl">Course Project</span>
                  <a href="https://hostel-management-frontend-plum.vercel.app" target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-2xl font-bold">Hostel Management and Complaint Registration System</h2>
                  </a>
                  <p className="my-2 font-medium text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet, venorum voluptatem in nam velit dolor, inventore quasi ratione iusto, tempore optio eveniet nostrum quisquam!</p>

                  <div className="mt-2 flex items-center gap-4">
                    <a href="https://github.com/Fast5/Hostel-Management-Frontend" target="_blank" className="w-10">
                      <GithubIcon />{" "}
                    </a>
                    <a href="https://hostel-management-frontend-plum.vercel.app" target="_blank" className="bg-dark text-light px-4 py-2 p-2 text-lg font-semibold rounded-lg">
                      View live
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-span-6">
              <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-projectBG shadow-2xl p-10">
                <a href="https://hostel-management-frontend-plum.vercel.app" target="_blank" className="w-1/2 cursor-pointer overflow-hidden">
                  <img src={project0} alt="Hostel Management and Complaint Registration" className="w-full h-auto" />
                </a>

                <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                  <span className="text-purple-600 font-medium text-xl">Course Project</span>
                  <a href="https://hostel-management-frontend-plum.vercel.app" target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-2xl font-bold">Hostel Management and Complaint Registration System</h2>
                  </a>
                  <p className="my-2 font-medium text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet, venorum voluptatem in nam velit dolor, inventore quasi ratione iusto, tempore optio eveniet nostrum quisquam!</p>

                  <div className="mt-2 flex items-center gap-4">
                    <a href="https://github.com/Fast5/Hostel-Management-Frontend" target="_blank" className="w-10">
                      <GithubIcon />{" "}
                    </a>
                    <a href="https://hostel-management-frontend-plum.vercel.app" target="_blank" className="bg-dark text-light px-4 py-2 p-2 text-lg font-semibold rounded-lg">
                      View live
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-span-6">Project2</div>
            <div className="col-span-6">Project3</div>
            <div className="col-span-6">Project4</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
