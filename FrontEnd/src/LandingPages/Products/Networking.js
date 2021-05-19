import React from "react";
import Footer from "../../partials/Footer";
import ProductCard from "../../partials/ProductCard";
import cloudimage from "../../images/cloud-upload-icon-line-connection-circuit-board.jpg";
import imgptone from "../../images/networking/set1/HPE NETWORK.webp";
import imgpt2one from "../../images/networking/set 2/R&M OFC 1.webp";
import imgpt2two from "../../images/networking/set 2/R&M OFC 3.webp";
import imgpt2three from "../../images/networking/set 2/R&M OFC 4.webp";
import imgpt2four from "../../images/networking/set 2/R&M OFC 5.webp";
import imgpt3one from "../../images/networking/set 3/R&M CAT6 1.webp";
import imgpt3two from "../../images/networking/set 3/R&M CAT6 2.webp";
import imgpt3three from "../../images/networking/set 3/R&M CAT6 3.webp";
import imgpt3four from "../../images/networking/set 3/R&M CAT6 4.webp";
import imgpt3five from "../../images/networking/set 3/R&M CAT6 5.webp";
import imgpt3six from "../../images/networking/set 3/R&M CAT6 6.webp";

const Networking = () => {
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
                <span class="block xl:inline">Networking</span>
              </h1>
              <h1 class="text-2xl tracking-tight font-business  text-white sm:text-5xl md:text-sm">
                <span class="block xl:inline">
                  We build efficient Network with Capabilities, Capacity and
                  Security
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
          We have partnered with Hewlett Packard Enterprise and Reichle &
          De-Massari (R&M India) to deal with their entire range of Active and
          Passive Networking Components. Our team has enough skills to handle
          all these products during Installation and after support. We have
          successfully completed 500+ structured networking sites in Kerala
        </div>
      </div>

      {/* ---------------Part 1 ---------------- */}

      <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-2xl w-1/2 mt-2 leading-7 font-business ">
          HPE NETWORK PRODUCTS
        </div>
      </div>
      {/* <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-xl  w-1/2 font-business ">
          Storage Products
        </div>
      </div> */}

      {/*------------------- Images Area ---------------------------  */}
      <div className="flex items-center justify-center w-full">
        <div className="flex-row flex flex-wrap items-center justify-center w-1/2">
          {/* --------------Images 1 ---------------------- */}
          <div className=" my-10">
            <img src={imgptone}></img>
          </div>
        </div>
      </div>
      {/* ---------------Part 2 ---------------- */}

      <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-2xl w-1/2 mt-2 leading-7 font-business ">
          Reichle & De-Massari (R&M)
        </div>
      </div>
      <div className=" flex-col flex items-center justify-center">
        <div className="text-indigo-900 text-xl text-center  w-1/2 font-business ">
          FIBER OPTICS
        </div>
      </div>

      {/*------------------- Images Area ---------------------------  */}
      <div className="flex items-center justify-center w-full">
        <div className="flex-row flex flex-wrap items-center justify-center w-1/2">
          {/* --------------Images 1 ---------------------- */}
          <div className="w-1/4 my-10">
            <img src={imgpt2one}></img>
          </div>
          <div className="w-1/4 my-10">
            <img src={imgpt2two}></img>
          </div>
          <div className="w-1/4 my-10">
            <img src={imgpt2four}></img>
          </div>
          <div className="w-1/4 my-10">
            <img src={imgpt2three}></img>
          </div>
        </div>
      </div>
      {/* ---------------Part 3 ---------------- */}

      {/* <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-2xl w-1/2 mt-2 leading-7 font-business ">
          Reichle & De-Massari (R&M)
        </div>
      </div> */}
      <div className=" flex-col flex items-center justify-center">
        <div className="text-indigo-900 text-xl text-center  w-1/2 font-business ">
          TWISTED PAIR CABLING
        </div>
      </div>

      {/*------------------- Images Area ---------------------------  */}
      <div className="flex items-center justify-center w-full">
        <div className="flex-row flex flex-wrap items-center justify-center w-1/2">
          {/* --------------Images 1 ---------------------- */}
          <div className="w-1/3 my-10">
            <img src={imgpt3one}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={imgpt3two}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={imgpt3three}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={imgpt3four}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={imgpt3five}></img>
          </div>
          <div className="w-1/3 my-10">
            <img src={imgpt3six}></img>
          </div>
        </div>
      </div>
      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Networking;
