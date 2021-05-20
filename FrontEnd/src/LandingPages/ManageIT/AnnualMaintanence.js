import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import Navbar from "../../partials/NavBar";
// import cloudimage from "../../images/cloud-upload-icon-line-connection-circuit-board.jpg";

const AnnualMaintanence = () => {
  return (
    <div className="">
      <Navbar />
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="h-40 w-full object-cover object-center sm:h-72 md:h-56 lg:w-full lg:h-h-151"
            src={
              "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
            alt=""
          />
        </div>
      </div>

      {/* Heading */}
      <div className="  bg-hero-bg -mt-56 flex flex-col items-left justify-center">
        <div class=" justify-center items-center max-w-sm md:max-w-xl z-10 pb-4 bg-black bg-opacity-75 ml-10">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0  flex flex-col items-center justify-center ">
            <div class="sm:text-center lg:text-left pt-4 ">
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-4xl">
                <span class="block xl:inline">Annual Maintenance Service</span>
              </h1>
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-lg">
                <span class="block xl:inline">
                  Focus on your core business while we manage your IT
                  infrastructure. We give you one stop coverage for all your
                  support services and solution.
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
        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          Annual Maintenance Services
        </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          We provide IT Infrastructure AMC services to customers with
          comprehensive and non- comprehensive support plans in managing the IT
          infrastructure through an SLA accountable contract, customizable to
          suit client requirements. Our trained & certified resources maintain
          the IT infrastructure and meet the highest of standards, through
          expertise and strong commitment to customer satisfaction. ​
        </div>

        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ml-16 ">
          <ul className=" list-disc">
            <li className="my-1">Desktops</li>
            <li className="my-1">Laptops</li>
            <li className="my-1">Servers & Storage</li>
            <li className="my-1">Printers</li>
            <li className="my-1">Networking Components</li>
          </ul>
        </div>

        {/* ----------------bullets block --------------------------- */}
        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          Comprehensive Annual Maintenance Contract
        </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          In a comprehensive AMC, all services includes the cost of spare parts
          replacement. Note: Excludes physical damages, damages occurred from
          handling issues and force majeures as defined in the contract
          agreement ​
        </div>
        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          Non - Comprehensive Annual Maintenance Contract
        </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          In a Non- Comprehensive AMC, Cost of spare parts replacement is on
          customer account ​
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default AnnualMaintanence;
