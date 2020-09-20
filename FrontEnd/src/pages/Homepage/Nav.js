import React from "react";
import thelogo from "../../assets/img/icarelogo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div class="font-sans bg-white text-center flex justify-between  overflow-hidden w-screen shadow-lg px-20 py-4">
      <div className="flex items-center justify-start">
        <img src={thelogo} className="w-8 h-8 ml-4 " />
        <a
          className="ml-2 text-lg font-bold text-gray-800 dark:text-gray-200"
          href="#"
        >
          iCare
        </a>
      </div>
      <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
        <li>
          <a
            href="#"
            class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#"
            class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
          >
            Services
          </a>
        </li>
        <li class="pr-2">
          <a
            href="#"
            class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
          >
            About
          </a>
        </li>
        <li class="pl-2 border-l">
          <Link
            to="/signin"
            class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
          >
            Log In
          </Link>
        </li>
        <Link
          to="/admin/signin"
          class="bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3"
        >
          Log In
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
