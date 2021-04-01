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

const NewHero = () => {
  return (
    <div class="relative bg-white overflow-hidden  ">
      <div class="h-72 ">
        <img
          class="h-56 w-full -mt-10 object-cover object-center sm:h-72 md:h-96 lg:w-full "
          src={
            "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }
          style={{ height: "45rem" }}
          alt=""
        />
      </div>
      <div className="  bg-hero-bg flex flex-row   ">
        <div class=" justify-center z-10 pb-8 bg-white  mx-48 -my-64 mb-8 shadow-lg rounded-sm ">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0 lg:px-8 ">
            <div class="sm:text-center lg:text-left pt-12 md:pt-16 md:pl-8">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                <span class="block xl:inline font-business font-normal">
                  INFOCARE SYSTEMS
                </span>
              </h1>

              <h2>
                <span class="block text-blue-800 font-business text-4xl    tracking-tight  sm:text-5xl md:text-4xl ">
                  IT Consulting & Services
                </span>
              </h2>
              <h2>
                <span class="block text-indigo-800 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-4xl "></span>
              </h2>
              <p class="font-business mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
                <div class="rounded-md shadow">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 md:py-2 md:text-lg md:px-2"
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
                </div> */}
              </div>
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
