import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/cloud-upload-icon-line-connection-circuit-board.jpg";
import Navbar from "../../partials/NavBar";

const CloudReadiness = () => {
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
                <span class="block xl:inline">Cloud Readiness Assessment</span>
              </h1>
              <h1 class="text-base tracking-tight  text-white md:text-lg">
                <span class="block xl:inline ">
                  We ​evaluate and help you with your cloud roadmap
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
          Our Cloud Readiness Assessment [CRA] service helps you to choose the
          right cloud adoption framework by assessing your current
          infrastructure against your business strategy and provide you a
          detailed gap-analysis and roadmap for your cloud migration.
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business ">
          It is critical to have a through analysis on the Organizational /
          business need to move to cloud, if the business strategy is supporting
          the cloud adoption and how the current IT Infrastructure components
          and processes would support the cloud adoption journey.
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business ">
          With our cloud readiness assessment tool [CRAT], we make it easy for
          your organization to overcome various challenges in your cloud
          adoption journey. The assessment will focus on the organizational
          readiness, strategy readiness, technology readiness, architecture &
          infrastructure readiness, process readiness, data readiness etc... to
          ensure a detailed and complete study is made and you are provided
          report on :
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business ">
          1. Your organization's as-is position
          <br />
          2. Gaps that need to be addressed before moving into cloud
        </div>
      </div>
    </div>
  );
};

export default CloudReadiness;
