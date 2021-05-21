import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/cloud-upload-icon-line-connection-circuit-board.jpg";
import Navbar from "../../partials/NavBar";

const CloudSolutions = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="w-full -mt-10 object-cover  lg:object-center h-h-155  md:h-h-165 lg:w-full "
            src={cloudimage}
            alt=""
          />
        </div>
      </div>

      {/* Heading */}
      <div className="  bg-hero-bg -mt-56 flex flex-col items-left justify-center">
        <div class=" justify-center items-center max-w-sm md:max-w-xl z-10 pb-4 bg-black bg-opacity-50 ml-10">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0  flex flex-col items-center justify-center ">
            <div class="sm:text-center lg:text-left pt-4 ">
              <h1 class="text-2xl tracking-tight  text-white md:text-4xl">
                <span class="block xl:inline">Cloud Solutions</span>
              </h1>
              <h1 class="text-base tracking-tight  text-white md:text-lg">
                <span class="block xl:inline ">
                  Assess, Build, Migrate and optimise cloud solutions
                </span>
              </h1>

              {/* <h2> */}
              {/* <span class="block text-blue-700 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-4xl ">
                  IT and Consulting Services
                </span> */}
              {/* </h2> */}
            </div>
          </main>
        </div>
      </div>

      {/*Content */}
      <div className=" flex-col flex items-center justify-center mb-5 mt-32">
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          We offer you assessment, advice, design, migrate, implement and
          support you find the right solutions for your successful cloud
          journey. With partnership with top cloud providers we help you align
          your IT infrastructure with your business objectives. You can expect a
          validated cloud strategy and long-term roadmap.
        </div>

        {/* ---------------- heading and para --------------------------- */}
        <div className="text-indigo-900 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          Cloud Readiness Assessment
        </div>
        <div className="text-gray-600 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          Our service offers analysis on your Business strategy, assessment of
          your IT infrastructure for consolidation, Identify Applications that
          can be moved to cloud, identify target cloud platform, perform
          gap-analysis and provide you a roadmap for your cloud journey.
        </div>
        {/* ---------------- heading and para --------------------------- */}
        <div className="text-indigo-900 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          Build Secure Infrastructure
        </div>
        <div className="text-gray-600 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          We help you build the cloud infrastructure by providing you the
          guidance and support you need. We also can take the responsibility of
          building the infrastructure so that you can focus on areas of your
          business.
        </div>
        {/* ---------------- heading and para --------------------------- */}
        <div className="text-indigo-900 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          Migrate applications to Cloud
        </div>
        <div className="text-gray-600 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          We work with you to migrate your applications to cloud by
          understanding your business strategy, existing infrastructure, design
          the target architecture, identify the right cloud provider, choose the
          right cloud migration pattern etc..
          <br />
          With our cloud migration services, we will move your business to the
          cloud in the most efficient and effectively.
        </div>
        {/* ---------------- heading and para --------------------------- */}
        <div className="text-indigo-900 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          Cloud Assessment & Optimisation
        </div>
        <div className="text-gray-600 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          It is critical to control the cost growth and its very important to
          assess the existing cloud deployments and do the required changes in
          order to bring the cost under control. We will do the assessment for
          your cloud deployment and provide you the advice for better
          optimisation.
        </div>
      </div>
    </div>
  );
};

export default CloudSolutions;
