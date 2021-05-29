import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/stock/Facility Management.jpg";
import Navbar from "../../partials/NavBar";

const FacilityManagement = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="w-full -mt-10 object-cover lg:object-center h-h-155  md:h-h-155 lg:w-full"
            src={cloudimage}
            alt=""
          />
        </div>
      </div>

      {/* Heading */}
      <div className="  bg-hero-bg -mt-56 flex flex-col items-left justify-center lg:pt-12">
        <div class=" justify-center items-center max-w-sm md:max-w-xl z-10 pb-4 bg-black bg-opacity-10 ml-10">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0  flex flex-col items-center justify-center ">
            <div class="sm:text-center lg:text-left pt-4 ">
              <h1 class="text-2xl tracking-tight  text-white md:text-4xl">
                <span class="block xl:inline">Facility Management</span>
              </h1>
              <h1 class="text-1xl tracking-tight  text-white md:text-lg">
                <span class="block xl:inline">
                  We deliver value through consulting, outsourced management
                  services, project management, and interim management
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
          We help our clients focus their resources and effort entirely on their
          core business and we take ownership and handle their IT infrastructure
          in total with our IT infrastructure facility management services. We
          offer customised solutions to manage the IT assets across board right
          from design to procure to deploy and support. Our expertise across
          multiple platforms and verticals assures you of higher availability,
          reliability and performance.
        </div>

        {/* ----------------bullets block --------------------------- */}
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-medium">
          Service Options
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          End to End IT Infrastructure Support
          <br />
          Outsourcing and Resource Support
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}
    </div>
  );
};

export default FacilityManagement;
