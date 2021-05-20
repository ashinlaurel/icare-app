import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/cloud-upload-icon-line-connection-circuit-board.jpg";
import Navbar from "../../partials/NavBar";

const ITInfra = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="h-40 w-full object-cover object-left sm:h-72 md:h-56 lg:w-full lg:h-h-151"
            src={
              "https://images.pexels.com/photos/5203849/pexels-photo-5203849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
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
                <span class="block xl:inline">
                  IT Infrastructure Consolidation
                </span>
              </h1>
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-lg">
                <span class="block xl:inline">
                  Simplifying Infrastructure Consolidation
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
        {/* ----------------bullets block --------------------------- */}
        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          There are several reasons why IT Infrastructure consolidation and
          realignment of business processes are critical for your organization.
          Few reasons are as :
        </div>

        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ml-16 ">
          <ul className=" list-disc">
            <li className="my-1">Customer Service Improvement</li>
            <li className="my-1">Increase Business</li>
            <li className="my-1">Faster Time to Market</li>
            <li className="my-1">Net Market Entry</li>
          </ul>
        </div>
        {/* ----------------bullets block --------------------------- */}
        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business "></div>
        {/* ------------------------------------------------------------------------ */}
        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          There are several reasons why IT Infrastructure consolidation and
          realignment of business processes are critical for your organization.
          Few reasons are as :
        </div>

        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ml-16 ">
          <ul className=" list-disc">
            <li className="my-1">
              Improve your Business relationship with your customers
            </li>
            <li className="my-1">Enterprise wide Collaboration</li>
            <li className="my-1">Create center of excellence</li>
            <li className="my-1">
              Leverage technology innovation or solutions among all business
              units
            </li>
          </ul>
        </div>

        {/* ------------------------------------------------------------------------ */}

        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          Our 5 Step Approach for your IT Infrastructure Consolidation
        </div>

        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ml-16 ">
          <ul className=" list-disc">
            <li className="my-1">
              Business Plan - Identify New Org structures and processes required
              to support consolidated infrastructure.
            </li>
            <li className="my-1">
              Discovery - Analyzing, gathering the detailed picture your
              organization IT Infrastructure assets including Compute, Storage,
              network, multi-tier applications & middleware. This would include
              the performance analysis of your current infrastructure
              components.
            </li>
            <li className="my-1">
              Identify & Map - Identify the Dependencies for applications and
              map them for a clear smooth transition schedule.
            </li>
            <li className="my-1">
              Capacity Planning - It is crucial to have very good capacity
              planning for IT infrastructure consolidation project to be
              successful and provide the expected outcome. The better the
              capacity planning the smoother the post consolidation
              functionality of the target infrastructure and the hosted
            </li>
            <li className="my-1">
              Implementation - Depending on your organization service portfolio
              and application landscape, the target solution may have number of
              physical and virtual servers. We choose the right transition model
              that fits for your business model to reduce the business impact.
            </li>
            <li className="my-1">
              Maintain & Optimize - We do extend our service in managing the
              infrastructure for optimization and continuous improvement. This
              extended service is part of our Managed IT service offering.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ITInfra;
