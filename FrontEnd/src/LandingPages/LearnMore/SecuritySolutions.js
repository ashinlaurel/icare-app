import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/stock/Security.jpg";
import Navbar from "../../partials/NavBar";

const SecuritySolutions = () => {
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
                <span class="block xl:inline">IT security Solutions</span>
              </h1>
              <h1 class="text-base tracking-tight  text-white md:text-lg">
                <span class="block xl:inline ">
                  We build security with flexibility, scalability, agility
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
        {/* ---------------- heading and para --------------------------- */}
        <div className="text-indigo-900 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          Identity Access Management
        </div>
        <div className="text-gray-600 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          Our Identity Access Management offering can help you choose the right
          solution that fits your organization's need for regulated access
          control. We prefer best in industry products, tools to design the
          access control solution for you and help you in implementing and
          onboarding users or migrating from your existing process.
        </div>
        {/* ---------------- heading and para --------------------------- */}
        <div className="text-indigo-900 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          Privileged Access Management
        </div>
        <div className="text-gray-600 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          While authentication defines who you are authorization defines what
          you are allowed to access / perform. Least privileged access is the
          best security principle we need to take in to consideration while we
          design any organization's access control solution architecture. We
          help you choose the right solution and right access control
          architecture using best products in market.
        </div>
      </div>
    </div>
  );
};

export default SecuritySolutions;
