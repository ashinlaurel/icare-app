import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition.js";
import imgone from "../images/partners/HP.webp";
import imgtwo from "../images/partners/HPE.webp";
import imgthree from "../images/partners/Lenovo-logo.webp";
import imgfour from "../images/partners/Canon.webp";
import imgfive from "../images/partners/Epson.webp";
import imgsix from "../images/partners/R&M.webp";

function PartnersHome() {
  return (
    <section className="relative font-business">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div
        className="absolute inset-0 bg-white pointer-events-none mb-16"
        aria-hidden="true"
      ></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className=" md:text-4xl mb-4 font-bold">
              Technology Partnership
            </h1>
            <p className="text-base font-business text-justify text-gray-600">
              We are partnered with leading global technology providers across
              domains, securing knowledge exchange and having continuous
              improvement programs with access & training to most recent proven
              products, solutions, practices in the industry.
            </p>
          </div>

          {/* Images */}
          <div className="flex items-center justify-center w-full lg:ml-8 ">
            <div className="flex-row flex flex-wrap items-center justify-center w-3/4">
              {/* --------------Images 1 ---------------------- */}
              <div className="w-1/4 lg:w-32 lg:h-32 my-5 mx-2 lg:mx-16 ">
                <img src={imgone}></img>
              </div>
              <div className="w-1/4 lg:w-32 lg:h-32 my-5 mx-2 lg:mx-16 ">
                <img src={imgtwo}></img>
              </div>
              <div className="w-1/4 lg:w-32 lg:h-32 my-5 mx-2 lg:mx-16 ">
                <img src={imgthree}></img>
              </div>
              <div className="w-1/4 lg:w-32 lg:h-32 my-5 mx-2 lg:mx-16 ">
                <img src={imgfour}></img>
              </div>
              <div className="w-1/4 lg:w-32 lg:h-32 my-5 mx-2 lg:mx-16 ">
                <img src={imgfive}></img>
              </div>
              <div className="w-1/4 lg:w-32 lg:h-32 my-5 mx-2 lg:mx-16 ">
                <img src={imgsix}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersHome;
