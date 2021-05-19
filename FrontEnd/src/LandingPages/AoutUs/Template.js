import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/cloud-upload-icon-line-connection-circuit-board.jpg";

const CloudMigration = () => {
  return (
    <div className="">
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="h-40 w-full object-cover object-left sm:h-72 md:h-56 lg:w-full lg:h-h-151"
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
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-4xl">
                <span class="block xl:inline">Cloud Migration Service</span>
              </h1>
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-lg">
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
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          {/* <<<>>>>>>>>>>> */}
        </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
        {/* <<<>>>>>>>>>>> */}
        </div>

        {/* ----------------bullets block --------------------------- */}
        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          
        </div>

        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ml-16 ">
          <ul className=" list-disc">
            <li className="my-1">
              
            </li>
            <li className="my-1">
              
            </li>
          </ul>
        </div>
        
        
      </div>
      {/* ------------------------------------------------------------------------ */}

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default CloudMigration;
