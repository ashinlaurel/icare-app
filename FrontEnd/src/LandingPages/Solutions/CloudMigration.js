import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/stock/Cloud Migration.jpg";
import Navbar from "../../partials/NavBar";

const CloudMigration = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div class="relative bg-white bg-opacity-0 overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="w-full -mt-10 object-cover lg:object-center h-h-155  md:h-h-155 lg:w-full"
            src={cloudimage}
            alt=""
          />
        </div>
      </div>
      {/* <div style={{ backgro: `url(${cloudimage})` }}>
        Hello check text
      </div> */}
      {/* Heading */}
      <div className="  bg-hero-bg -mt-56 flex flex-col items-left justify-center">
        <div class=" justify-center items-center max-w-sm md:max-w-xl z-10 pb-4 bg-black bg-opacity-0 ml-10">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0  flex flex-col items-center justify-center ">
            <div class="sm:text-center lg:text-left pt-4 ">
              <h1 class="text-2xl tracking-tight  text-white md:text-4xl">
                <span class="block xl:inline">Cloud Migration Service</span>
              </h1>
              <h1 class="text-2xl tracking-tight  text-white md:text-lg">
                <span class="block xl:inline">
                  We create value by transforming your business with cloud
                  migration services
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
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business lg:text-justify">
          Cloud migration service offers industry standard capabilities and
          tools to ease the migration of your infrastructure, application and
          data to cloud, following industry best practices.
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business lg:text-justify">
          Whether it be On-premise to Cloud or Cloud to Cloud Migration, our
          expertise with standard frameworks and tools we do the study of your
          current workload, define the target architecture, configure the target
          infrastructure perform the migration with you.
        </div>

        {/* ----------------bullets block --------------------------- */}
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          Discover
        </div>

        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          <ul className=" list-disc">
            <li className="my-1">
              Thorough cloud readiness assessment on your current infrastructure
            </li>
            <li className="my-1">
              Detailed Gap Analysis and prepare action plans to mitigate gaps
            </li>
          </ul>
        </div>
        {/* ----------------bullets block --------------------------- */}
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          Design
        </div>

        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          <ul className=" list-disc">
            <li className="my-1">
              Prepare the business case for cloud migration and migration
              strategy.
            </li>
            <li className="my-1">
              Design the target architecture and create HLD and LLD documents
            </li>
            <li className="my-1">
              Provide detailed project plan with cost estimation and schedule
            </li>
          </ul>
        </div>
        {/* ----------------bullets block --------------------------- */}
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          Migrate
        </div>

        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          <ul className=" list-disc">
            <li className="my-1">
              Thorough cloud readiness assessment on your current infrastructure
            </li>
            <li className="my-1">
              Detailed Gap Analysis and prepare action plans to mitigate gaps
            </li>
          </ul>
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}
    </div>
  );
};

export default CloudMigration;
