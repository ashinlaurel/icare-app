import React, { useEffect, useRef, useState } from "react";
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
  Transition,
} from "@windmill/react-ui";

import logo from "../images/infocarefull.png";
import { Link } from "react-router-dom";
function Navbar() {
  const [click, setclick] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const [products, setproducts] = useState(false);
  const [services, setservices] = useState(false);
  const [aboutus, setaboutus] = useState(false);

  // MOBILE
  const [mobsolutions, setmobSolutions] = useState(false);
  const [mobproducts, setmobproducts] = useState(false);
  const [mobservices, setmobservices] = useState(false);
  const [mobaboutus, setmobaboutus] = useState(false);

  function useOuterClick(callback) {
    const callbackRef = useRef(); // initialize mutable callback ref
    const innerRef = useRef(); // returned to client, who sets the "border" element

    // update callback on each render, so second useEffect has most recent callback
    useEffect(() => {
      callbackRef.current = callback;
    });
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
      function handleClick(e) {
        if (
          innerRef.current &&
          callbackRef.current &&
          !innerRef.current.contains(e.target)
        )
          callbackRef.current(e);
      }
    }, []); // no dependencies -> stable click listener

    return innerRef; // convenience for client (doesn't need to init ref himself)
  }

  const innerRef = useOuterClick((ev) => {
    setSolutions(false);
    setproducts(false);
    setservices(false);
    setaboutus(false);
  });

  return (
    <div className="fixed z-50 w-full bg-white shadow-md" ref={innerRef}>
      <div class="relative z-10 pb-3 lg:w-full ">
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        ></svg>

        <div class=" pt-6 px-4 sm:px-6 lg:px-8 w-full">
          <nav
            class="relative flex items-center justify-end sm:h-10 "
            aria-label="Global"
          >
            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <span href="#">
                  <img class="h-8 w-auto sm:h-10" src={logo} />
                  {/* <p>INFOCARE SYSTEMS</p> */}
                </span>
                <div class="-mr-2  flex items-center md:hidden">
                  <button
                    type="button"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    aria-expanded="false"
                    onClick={() => setclick(!click)}
                  >
                    <span class="sr-only">Open main menu</span>
                    {/* <!-- Heroicon name: outline/menu --> */}
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block flex-1 ">
              <div class=" flex flex-row justify-end  md:ml-10 md:pr-4 md:space-x-8 cursor-pointer ">
                <div>
                  <Link to="/website">
                    <button
                      className=" z-10 relative  rounded-md focus:outline-none  text-sm text-gray-500 hover:text-gray-900"
                      // onClick={() => setSolutions(!solutions)}
                      aria-label="Notifications"
                      aria-haspopup="true"
                    >
                      Home
                    </button>
                  </Link>
                </div>
                {/* ------------Solutions ----------- */}

                <div className="relative">
                  <button
                    className="menu rounded-md focus:outline-none  text-sm text-gray-500 hover:text-gray-900 "
                    onClick={() => setSolutions(!solutions)}
                  >
                    Solutions
                  </button>

                  <Transition
                    show={solutions}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="origin-top-right absolute right-1 w-64 py-2 mt-1 bg-white opacity-100  rounded shadow-md">
                      <Link to="/website/solution/cloudsolutions">
                        <a className="block px-4 py-2">
                          Cloud Readiness Assessment
                        </a>
                      </Link>
                      <Link to="/website/solution/cloudmigration">
                        <a className="block px-4 py-2 ">
                          Cloud Migration Service
                        </a>
                      </Link>
                      <Link to="/website/solution/habcsolution">
                        <a className="block px-4 py-2 ">HA & BC/DR Solutions</a>
                      </Link>
                      <Link to="/website/solution/itinfrastructure">
                        <a className="block px-4 py-2 ">
                          IT Infrastructure Consolidation
                        </a>
                      </Link>
                      <Link to="/website/solution/structurednetworking">
                        <a className="block px-4 py-2 ">
                          Structured Networking
                        </a>
                      </Link>
                      <Link to="/website/solution/itsecurity">
                        <a className="block px-4 py-2 ">
                          IT Security Solutions
                        </a>
                      </Link>
                    </div>
                  </Transition>
                </div>

                {/* Solutions */}

                {/* <div>
                  <button
                    className=" z-10 relative align-middle rounded-md focus:outline-none  text-sm text-gray-500 hover:text-gray-900"
                    onClick={() => setSolutions(true)}
                    aria-label="Notifications"
                    aria-haspopup="true"
                  >
                    Solutions
                  </button>
                  <Dropdown
                    align="center"
                    isOpen={solutions}
                    onClose={() => setSolutions(false)}
                    className="z-50"
                  >
                    <DropdownItem>
                      <span>Cloud Readiness Assessment</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>Cloud Migration Service</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>HA & BC/DR Solutions</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>IT Infrastructure Consolidation</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>Structured Networking</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>IT Security Solutions</span>
                    </DropdownItem>
                  </Dropdown>
                </div> */}
                {/* Solutions */}

                {/* services */}
                <div className="relative">
                  <button
                    className="menu rounded-md focus:outline-none  text-sm text-gray-500 hover:text-gray-900 "
                    onClick={() => setservices(!services)}
                  >
                    Manage IT Services
                  </button>

                  <Transition
                    show={services}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="origin-top-right absolute right-4 w-64 py-2 mt-1 bg-white opacity-100  rounded shadow-md">
                      <Link to="/website/managedit/FacilityManagement">
                        <a className="block px-4 py-2">Facility Management</a>
                      </Link>
                      <Link to="/website/managedit/AnnualMaintanence">
                        <a className="block px-4 py-2 ">
                          Annual Maintanance Service
                        </a>
                      </Link>
                      <Link to="/website/managedit/OnDemand">
                        <a className="block px-4 py-2 ">On-Demand Service</a>
                      </Link>
                    </div>
                  </Transition>
                </div>

                {/* Products */}
                <div className="relative">
                  <button
                    className="menu rounded-md focus:outline-none  text-sm text-gray-500 hover:text-gray-900 "
                    onClick={() => setproducts(!products)}
                  >
                    Products
                  </button>

                  <Transition
                    show={products}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="origin-top-right absolute right-4 w-48 py-2 mt-1 bg-white opacity-100  rounded shadow-md">
                      <Link to="/website/product/enterpriseservers">
                        <a className="block px-4 py-2">Server</a>
                      </Link>
                      <Link to="/website/product/enterprisestorage">
                        <a className="block px-4 py-2 ">Storage</a>
                      </Link>
                      <Link to="/website/product/networking">
                        <a className="block px-4 py-2 ">Networking</a>
                      </Link>
                      <Link to="/website/product/endusercomp">
                        <a className="block px-4 py-2 ">End User Compute</a>
                      </Link>
                      <Link to="/website/product/printing">
                        <a className="block px-4 py-2 ">Printing</a>
                      </Link>
                    </div>
                  </Transition>
                </div>

                {/* aboutus */}

                <div className="relative">
                  <button
                    className="menu rounded-md focus:outline-none  text-sm text-gray-500 hover:text-gray-900 "
                    onClick={() => setaboutus(!aboutus)}
                  >
                    About Us
                  </button>

                  <Transition
                    show={aboutus}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="origin-top-right absolute right-4 w-40 py-2 mt-1 bg-white opacity-100  rounded shadow-md">
                      <Link to="/website/aboutus/Company">
                        <a className="block px-4 py-2">Company</a>
                      </Link>
                      <Link to="/website/aboutus/Career">
                        <a className="block px-4 py-2 ">Careers</a>
                      </Link>
                      <Link to="/website/aboutus/Partners">
                        <a className="block px-4 py-2 ">Partners</a>
                      </Link>
                      <Link to="/website/aboutus/PrivacyPolicy">
                        <a className="block px-4 py-2 ">Privacy Policy</a>
                      </Link>
                      <Link to="/website/aboutus/ContactUs">
                        <a className="block px-4 py-2 ">Contact Us</a>
                      </Link>
                    </div>
                  </Transition>
                </div>

                {/* Products */}

                <Link to="/admin/signin">
                  <div class=" text-gray-500 hover:text-gray-700 cursor-pointer">
                    Login
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div
          class={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right ${
            !click ? `hidden` : null
          }`}
        >
          <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src={logo} alt="" />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  onClick={() => setclick(!click)}
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close main menu</span>
                  {/* <!-- Heroicon name: outline/x --> */}
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3 space-y-1 cursor-pointer">
              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Home
              </a>

              <div
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setmobSolutions(!mobsolutions)}
              >
                Products
              </div>

              <Transition
                show={mobsolutions}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                // enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                // leaveFrom="opacity-100 scale-100"
                // leaveTo="opacity-0 scale-95"
              >
                <div className=" py-2 mt-1 bg-gray-100 w-full  opacity-100 rounded-lg  ">
                  <Link to="/website/solution/cloudsolutions">
                    <a className="block px-4 py-2">
                      Cloud Readiness Assessment
                    </a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">Cloud Migration Service</a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">HA & BC/DR Solutions</a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">
                      IT Infrastructure Consolidation
                    </a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">Structured Networking</a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">IT Security Solutions</a>
                  </Link>
                </div>
              </Transition>

              <div
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setmobservices(!mobservices)}
              >
                Manage IT Services
              </div>
              <Transition
                show={mobservices}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                // enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                // leaveFrom="opacity-100 scale-100"
                // leaveTo="opacity-0 scale-95"
              >
                <div className=" py-2 mt-1 bg-gray-100 w-full  opacity-100 rounded-lg  ">
                  <Link href="/profile">
                    <a className="block px-4 py-2">Facility Management</a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">
                      Annual Maintanance Service
                    </a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">On-Demand Service</a>
                  </Link>
                </div>
              </Transition>
              <div
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setmobproducts(!mobproducts)}
              >
                Products
              </div>

              <Transition
                show={mobproducts}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                // enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                // leaveFrom="opacity-100 scale-100"
                // leaveTo="opacity-0 scale-95"
              >
                <div className=" py-2 mt-1 bg-gray-100 w-full  opacity-100 rounded-lg  ">
                  <Link href="/profile">
                    <a className="block px-4 py-2">Server</a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">Storage</a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">Networking</a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">End User Compute</a>
                  </Link>
                  <Link to="/website/product/printing">
                    <a className="block px-4 py-2 ">Printing</a>
                  </Link>
                </div>
              </Transition>
              <div
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setmobaboutus(!mobaboutus)}
              >
                About
              </div>
              <Transition
                show={mobaboutus}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                // enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                // leaveFrom="opacity-100 scale-100"
                // leaveTo="opacity-0 scale-95"
              >
                <div className=" py-2 mt-1 bg-gray-100 w-full  opacity-100 rounded-lg  ">
                  <Link href="/profile">
                    <a className="block px-4 py-2">Company</a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">Careers</a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">Partners</a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">Privacy Policy</a>
                  </Link>
                  <Link href="/api/logout">
                    <a className="block px-4 py-2 ">Contact Us</a>
                  </Link>
                </div>
              </Transition>
            </div>
            <Link to="/admin/signin">
              <div class="block w-full px-5 py-3 text-center font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 cursor-pointer">
                Login
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
