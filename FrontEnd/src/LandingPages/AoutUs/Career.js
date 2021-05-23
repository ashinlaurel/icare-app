import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/stock/Career.jpg";

const Career = () => {
  return (
    <div className="">
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="w-full -mt-10 object-cover lg:object-center h-h-155  md:h-h-155 lg:w-full"
            src={
              cloudimage
              // "https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
            alt=""
          />
        </div>
      </div>

      {/* Heading */}
      <div className="  bg-hero-bg -mt-56 flex flex-col items-left justify-center">
        <div class=" justify-center items-center max-w-sm md:max-w-sm z-10 pb-4 bg-black bg-opacity-75 ml-10 ">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0  flex flex-col items-center justify-center ">
            <div class="sm:text-center lg:text-left pt-4 ">
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-4xl">
                <span class="block xl:inline">Careers</span>
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
        <div className="text-indigo-900 text-3xl w-5/6 md:w-1/2 my-1 font-business ">
          Why work with INFOCARE
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          Full of Opportunities, Challenges and rewards. A team of skilled and
          committed colleagues. And we are committed to Excellence.
        </div>

        {/* ----------------bullets block --------------------------- */}
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          Current Openings
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          Nil
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}
    </div>
  );
};

export default Career;
