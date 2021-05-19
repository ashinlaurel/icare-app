import React from "react";
import Footer from "../../partials/Footer";
import ProductCard from "../../partials/ProductCard";
import cloudimage from "../../images/cloud-upload-icon-line-connection-circuit-board.jpg";
import imgptone from "../../images/endusercomp/set1/HP Desktop AIO.webp";
import imgpt2one from "../../images/endusercomp/set2/HP Workstation.webp";
import imgpt2two from "../../images/endusercomp/set2/HP Laptop 360.webp";
import imgpt2three from "../../images/endusercomp/set2/HP Laptop.webp";

import imgpt3one from "../../images/endusercomp/set3/Lenovo Think Centre - 1.webp";
import imgpt3onesub from "../../images/endusercomp/set3/Lenovo Think Centre - 2.webp";
import imgpt3two from "../../images/endusercomp/set3/Lenovo Laptop.webp";
import imgpt3three from "../../images/endusercomp/set3/Lenovo Thinkstation - 1.webp";
import imgpt3threesub from "../../images/endusercomp/set3/Lenovo Thinkstation - 2.webp";

const Endusercomp = () => {
  return (
    <div className="">
      <div class="">
        <div class=" max-h-xl ">
          <img
            class="h-40 w-full object-cover  object-center sm:h-72 md:h-56 lg:w-full lg:h-h-150"
            src={
              "https://images.unsplash.com/photo-1605449591750-7bf5cc4f013f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
            }
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
                <span class="block xl:inline">End User Computing</span>
              </h1>
              <h1 class="text-2xl tracking-tight font-business  text-white sm:text-5xl md:text-sm">
                <span class="block xl:inline">
                  We deploy, manage and secure the devices, applications and
                  data
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
          We provide End-user computing solutions in a cost-effective way and
          will be created based on end user needs, with an agile, efficient and
          secure IT infrastructure. Infocare partners with leading global
          technology innovators HP, Lenovo to help bring these technology
          solutions to your doorstep
        </div>
      </div>

      {/* ---------------Part 1 ---------------- */}

      <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-2xl w-1/2 mt-2 leading-7 font-business text-center ">
          HP Desktop & All-in-Ones
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

      {/* <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-2xl w-1/2 mt-2 leading-7 font-business ">
          Reichle & De-Massari (R&M)
        </div>
      </div> */}
      {/* <div className=" flex-col flex items-center justify-center">
        <div className="text-indigo-900 text-xl text-center  w-1/2 font-business ">
          FIBER OPTICS
        </div>
      </div> */}

      {/*------------------- Images Area ---------------------------  */}
      <div className="flex items-center justify-center w-full lg:ml-10">
        <div className="flex-row flex flex-wrap items-center justify-center w-1/2">
          {/* --------------Images 1 ---------------------- */}
          <div className="w-1/3 my-10 flex-col flex items-center justify-center">
            <div className=" ">
              <div className="text-indigo-900 text-base mx-8 my-2 font-business ">
                HP Workstation
              </div>
            </div>
            <img src={imgpt2one}></img>
          </div>
          <div className="w-1/3 my-10 flex-col flex items-center justify-center">
            <div className=" ">
              <div className="text-indigo-900 text-base mx-8 my-2 font-business ">
                HP Laptop
              </div>
            </div>
            <img src={imgpt2two}></img>
          </div>
          <div className="w-1/3 my-10 flex-col flex items-center justify-center  ">
            <div className=" ">
              <div className="text-indigo-900 text-base mx-8 my-2 font-business ">
                HP Laptop
              </div>
            </div>
            <img src={imgpt2three}></img>
          </div>
        </div>
      </div>

      {/* ---------------part - 3 ------------- */}
      <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-2xl w-1/2 mt-2 leading-7 font-business text-center ">
          LENOVO
        </div>
      </div>

      {/*------------------- Images Area ---------------------------  */}
      <div className="flex items-center justify-center w-full lg:ml-10">
        <div className="flex-row flex flex-wrap items-center justify-center w-1/2">
          {/* --------------Images 1 ---------------------- */}
          <div className="w-1/3 my-10 flex-col flex items-center justify-center">
            <div className=" ">
              <div className="text-indigo-900 text-base mx-8 my-2 font-business ">
                Desktop
              </div>
            </div>
            <img src={imgpt3one}></img>
            <img className="my-2" src={imgpt3onesub}></img>
          </div>
          <div className="w-1/3 my-10 flex-col flex items-center justify-center">
            <div className=" ">
              <div className="text-indigo-900 text-base pl-4 my-2 font-business  ">
                Laptop
              </div>
            </div>
            <img src={imgpt3two}></img>
          </div>
          <div className="w-1/3 my-10 flex-col flex items-center justify-center">
            <div className=" ">
              <div className="text-indigo-900 text-base mx-8 my-2 font-business ">
                Workstation
              </div>
            </div>
            <img src={imgpt3three}></img>
            <img className="my-2" src={imgpt3threesub}></img>
          </div>
        </div>
      </div>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Endusercomp;
