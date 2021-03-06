import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/cloud-upload-icon-line-connection-circuit-board.jpg";
import PartnersHome from "../../partials/PartnersHome";

const Company = () => {
  return (
    <div className="">
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="w-full -mt-10 object-cover lg:object-center h-h-155  md:h-h-155 lg:w-full"
            src={
              "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
            alt=""
          />
        </div>
      </div>

      {/* Heading */}
      <div className="  bg-hero-bg -mt-56 flex flex-col items-left justify-center">
        <div class=" justify-center items-center max-w-sm md:max-w-xl z-10 pb-4 bg-black bg-opacity-0 ml-10">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0  flex flex-col items-center justify-center ">
            <div class="sm:text-center lg:text-left pt-4 ">
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-4xl">
                <span class="block xl:inline">INFOCARE SYSTEMS</span>
              </h1>
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-lg">
                <span class="block xl:inline"></span>
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
      <div className=" flex-col flex items-center justify-center mb-5 mt-48">
        <div className="text-indigo-900 text-3xl w-5/6 md:w-1/2 my-4 leading-7 font-business">
          About INFOCARE SYSTEMS
        </div>

        <div className=" text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business lg:text-justify">
          Established in 1997 and headquartered at Trivandrum. INFOCARE SYSTEMS
          is an IT infrastructure solution provider, partnered with leading
          global technology providers like HP, HPE, Lenovo, Wipro, Epson, Canon
          and many others, with access to most recent proven practices in the
          industry to enable us in the best ways to provide our customers with
          most suitable solutions to support their core business functions.
        </div>
        <div className=" text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business lg:text-justify">
          <span className="font-medium">INFOCARE SYSTEMS</span> enterprise IT
          infrastructure solutions across industry verticals in India, our
          capability as a total solution provider comes from capabilities
          portfolio including, design deploy and support passive networking
          infrastructure, wired and wireless active network infrastructure,
          surveillance, security & access solutions, end computing solutions
          including laptops, desktops, thin clients, cloud computing
          infrastructure solutions, hybrid solutions, network security, data
          security, end-point security solutions, connectivity solutions and
          support services including AMC, managed IT services tailored to suit
          client environments, including IT Infrastructure outsourcing,
          operations support and installation & commissioning services. Our
          capabilities portfolio is backed by a committed and professional team
          of certified resources.
        </div>

        {/* ----------------bullets block --------------------------- */}
        <PartnersHome />
      </div>
      {/* ------------------------------------------------------------------------ */}
    </div>
  );
};

export default Company;
