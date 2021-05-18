import React, { useState } from "react";
import "./style.css";
import {
  Input,
  HelperText,
  Label,
  Select,
  Textarea,
  Button,
  Dropdown,
  DropdownItem,
  Badge,
} from "@windmill/react-ui";
import herobg from "../images/herobg.jpg";

import titleImage from "../images/titleimage.jpg";

const NewHero = () => {
  return (
    <div class="  overflow-hidden  ">
      <div
        class=" "
        // style={{
        //   backgroundImage:
        //     "url(" +
        //     "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" +
        //     ")",
        // }}
      >
        <img
          class=" w-full -mt-10  object-cover object-center h-h-155 sm:h-h-150 md:h-h-165 lg:w-full "
          src={
            titleImage
            // "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }
          // style={{ height: "42rem" }}
          alt=""
        />
      </div>
      <div className="  bg-hero-bg flex flex-row justify-center   ">
        <div class=" justify-center z-10 pb-8 bg-gray-100 mx-4 md:mx-48 -my-24 mb-8 rounded-sm w-1/2 ">
          <main class="mt-3 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-4 md:mt-2 lg:mt-0 lg:px-5 ">
            <div class="sm:text-center lg:text-left pt-12 md:pt-5 md:pl-8">
              {/* <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-4xl">
                <span class="block xl:inline font-business font-normal">
                 IT Consulting & Services 
                </span>
              </h1> */}

              <h2>
                <span class="block text-indigo-900 font-normal text-3xl tracking-tight sm:text-3xl md:text-3xl ">
                  IT Consulting & Services
                </span>
              </h2>
              {/* <h2>
                <span class="block text-indigo-800 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-4xl "></span>
              </h2> */}
              <p class="block font-business mt-2 text-base text-gray-900 sm:mt-2 sm:text-md sm:mx-auto md:mt-2 md:text-md lg:mx-0">
                We help you transform your IT infrastructure to create or enable
                additional value to your existing enterprise value chain by
                providing guidance and custom solutions that fit your needs.
              </p>
              {/* <div class="mt-5 mx-10 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
                <div class="rounded-md shadow">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-12 py-3 border transition-all
                     border-transparent text-base font-medium rounded-md text-gray-800 bg-gray-200 hover:bg-gray-300 md:py-1  md:px-2"
                  >
                    Learn More
                  </a>
                </div>
                {/* <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    About Us
                  </a>
                </div> 
              </div> */}
            </div>
          </main>
        </div>
      </div>
      {/* <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://unsplash.com/photos/3fPXt37X6UQ/download?force=true&w=1920"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default NewHero;
