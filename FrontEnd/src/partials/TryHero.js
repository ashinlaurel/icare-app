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

const TryHero = () => {
  return (
    <section class="bg-gray-100  font-business ">
      <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center mt-16">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-3xl  font-bold text-gray-800 leading-tight  lg:text-5xl">
              IT Consulting & Services
            </h1>

            <div class="mt-8 space-y-5">
              <p class="flex items-center text-lg -mx-2 text-gray-700 ">
                <span class="mx-2 ">
                  We help you transform your IT infrastructure to create or
                  enable additional value to your existing enterprise value
                  chain by providing guidance and custom solutions that fit your
                  needs.
                </span>
              </p>
            </div>

            <div class="mt-4 ">
              <p class="flex items-center text-lg -mx-2 text-gray-700 ">
                <span class="mx-2 ">
                  Just drop in your email address and we will reach out to you.
                </span>
              </p>
            </div>
          </div>

          <div class="w-full mt-4 bg-transparent border rounded-md lg:max-w-sm  focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300  focus-within:ring-opacity-40">
            <form class="flex flex-col lg:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="button"
                class="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-400"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="glasses photo"
          />
        </div>
      </div>
    </section>
  );
};

export default TryHero;
