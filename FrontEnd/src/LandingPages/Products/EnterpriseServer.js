import React from "react";
import Footer from "../../partials/Footer";
import ProductCard from "../../partials/ProductCard";
import cloudimage from "../../images/cloud-upload-icon-line-connection-circuit-board.jpg";
import imgone from "../../images/enterpriseserver/HPE Rack - 1.webp";
import imgtwo from "../../images/enterpriseserver/HPE Rack - 2.webp";
import imgthree from "../../images/enterpriseserver/HPE Rack - 3.webp";
import imgfour from "../../images/enterpriseserver/HPE Rack - 4.webp";
import imgfive from "../../images/enterpriseserver/HPE Rack - 5.webp";
import imgsix from "../../images/enterpriseserver/HPE Rack - 6.webp";
import twrone from "../../images/enterpriseserver/HPE Tower -2.webp";
import twrtwo from "../../images/enterpriseserver/HPE Tower -3.webp";
import twrthree from "../../images/enterpriseserver/HPE Tower -4.webp";
import hypone from "../../images/enterpriseserver/HPE Hyper-1.webp";
import hyptwo from "../../images/enterpriseserver/HPE Hyper-2.webp";
import hypthree from "../../images/enterpriseserver/HPE Hyper-3.webp";

const EnterpriseServer = () => {
  return (
    <div className="">
      <div class="">
        <div class=" max-h-xl ">
          <img
            class="h-40 w-full object-cover object-left sm:h-72 md:h-56 lg:w-full lg:h-h-80"
            src={cloudimage}
            alt=""
          />
        </div>
      </div>

      {/* Heading */}
      <div className="  bg-hero-bg -mt-48 flex flex-col items-left justify-center ">
        <div class=" justify-center items-center max-w-sm md:max-w-xl pb-4 bg-black bg-opacity-50 ml-40">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0  flex flex-col items-center justify-center ">
            <div class="sm:text-center lg:text-left pt-4 ">
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-3xl font-business">
                <span class="block xl:inline">Enterprise Servers</span>
              </h1>
              <h1 class="text-2xl tracking-tight font-business  text-white sm:text-5xl md:text-sm">
                <span class="block xl:inline">
                  Cutting-edge IT Solutions to address the futuristic business
                  with modern technology and hardware using customisable system
                  architecture and components
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
      <div className=" flex-col flex items-center justify-center mb-5 mt-32 ">
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          In today's digital world, businesses are deploying sophisticated IT
          systems to automate and modernise their operations, Infocare partners
          with leading global technology innovators HPE, Lenovo to help bring
          these technology solutions to your doorstep. We provide end to end
          solution on Enterprise Servers
        </div>
      </div>

      {/* ---------------Part 1 ---------------- */}

      <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-2xl w-1/2 mt-2 leading-7 font-business ">
          Enterprise range of HPE Servers
        </div>
      </div>
      <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-xl  w-1/2 font-business ">
          Rack Servers
        </div>
      </div>

      {/*------------------- Images Area ---------------------------  */}
      <div className="flex items-center justify-center w-full">
        <div className="flex-row flex flex-wrap items-center justify-center w-1/2">
          {/* --------------Images 1 ---------------------- */}
          <div className="w-1/3 my-10">
            <img src={imgone}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={imgtwo}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={imgthree}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={imgfour}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={imgfive}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={imgsix}></img>
          </div>
        </div>
      </div>
      {/* ---------------Part 2 ---------------- */}

      <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-xl  w-1/2 font-business ">
          Tower Servers
        </div>
      </div>

      {/*------------------- Images Area ---------------------------  */}
      <div className="flex items-center justify-center w-full">
        <div className="flex-row flex flex-wrap items-center justify-center w-1/2">
          {/* --------------Images 1 ---------------------- */}
          <div className="w-1/3 my-10">
            <img src={twrone}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={twrtwo}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={twrthree}></img>
          </div>
        </div>
      </div>
      {/* ---------------Part 3 ---------------- */}

      <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-xl  w-1/2 font-business ">
          Hyper Converged
        </div>
      </div>

      {/*------------------- Images Area ---------------------------  */}
      <div className="flex items-center justify-center w-full">
        <div className="flex-row flex flex-wrap items-center justify-center w-1/2">
          {/* --------------Images 1 ---------------------- */}
          <div className="w-1/3 my-10">
            <img src={hypone}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={hyptwo}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={hypthree}></img>
          </div>
        </div>
      </div>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default EnterpriseServer;
