import React, { useState } from "react";
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
import logo from "../images/infocarefull.png";
function Navbar() {
  const [click, setclick] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const [products, setproducts] = useState(false);
  const [services, setservices] = useState(false);
  const [support, setsupport] = useState(false);
  const [aboutus, setaboutus] = useState(false);
  const [cloudSolutions, setcloudSolutions] = useState(false);
  const [infrastructureSolutions, setInfrastructureSolutions] = useState(false);
  const [securitySolutions, setSecuritySolutions] = useState(false);
  const [manageIT, setManageIT] = useState(false);
  const [enterpriseHW, setEnterpriseHW] = useState(false);
  const [endUserComputing, setendUserComputing] = useState(false);

  return (
    <div className="fixed z-50 w-full bg-white">
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
                <div class=" text-sm  text-gray-500 hover:text-gray-900 ">
                  <a href="/website">Home</a>
                </div>

                {/* Solutions */}

                <div>
                  <button
                    className="z-10 relative align-middle rounded-md focus:outline-none  text-sm text-gray-500 hover:text-gray-900"
                    onClick={() => setSolutions(!solutions)}
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
                    {/* <DropdownItem tag="a" href="#" className="justify-between">
                    <span className="">Cloud Solutions</span>
                 
                  </DropdownItem> */}
                    <DropdownItem
                      onClick={() => setcloudSolutions(!cloudSolutions)}
                      className="justify-between"
                    >
                      <div>
                        <button
                          className="z-10 relative align-middle rounded-md focus:outline-none  font-medium "
                          onClick={() => setcloudSolutions(!cloudSolutions)}
                          aria-label="Notifications"
                          aria-haspopup="true"
                        >
                          Cloud Solutions
                        </button>
                        <Dropdown
                          align="center"
                          isOpen={cloudSolutions}
                          onClose={() => setcloudSolutions(false)}
                          className="z-50 right-full"
                        >
                          <DropdownItem
                            tag="a"
                            href="website/product/servers"
                            className="justify-between"
                          >
                            <span>Cloud Readiness Assesment</span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>Build Secure Infrastrucure </span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>Migrarte Applications To Cloud </span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>Cloud Assesment & Optimisation </span>
                          </DropdownItem>
                        </Dropdown>
                      </div>
                    </DropdownItem>

                    {/* <DropdownItem >
                    <span></span>
                  </DropdownItem> */}
                    <DropdownItem
                      onClick={() =>
                        setInfrastructureSolutions(!infrastructureSolutions)
                      }
                      className="justify-between"
                    >
                      <div>
                        <button
                          className="z-10 relative align-middle rounded-md focus:outline-none  font-medium "
                          onClick={() =>
                            setInfrastructureSolutions(!infrastructureSolutions)
                          }
                          aria-label="Notifications"
                          aria-haspopup="true"
                        >
                          Infrastructure Solutions
                        </button>
                        <Dropdown
                          align="center"
                          isOpen={infrastructureSolutions}
                          onClose={() => setInfrastructureSolutions(false)}
                          className="z-50 right-full"
                        >
                          <DropdownItem
                            tag="a"
                            href="website/product/servers"
                            className="justify-between"
                          >
                            <span>Virtualisation</span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>High Availability Database Solutions </span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>Structured Networking</span>
                          </DropdownItem>
                        </Dropdown>
                      </div>
                    </DropdownItem>

                    <DropdownItem
                      onClick={() => setSecuritySolutions(!securitySolutions)}
                      className="justify-between"
                    >
                      <div>
                        <button
                          className="z-10 relative align-middle rounded-md focus:outline-none  font-medium "
                          onClick={() =>
                            setSecuritySolutions(!securitySolutions)
                          }
                          aria-label="Notifications"
                          aria-haspopup="true"
                        >
                          Security Solutions
                        </button>
                        <Dropdown
                          align="center"
                          isOpen={securitySolutions}
                          onClose={() => setSecuritySolutions(false)}
                          className="z-50 right-full"
                        >
                          <DropdownItem
                            tag="a"
                            href="website/product/servers"
                            className="justify-between"
                          >
                            <span>Identity Access & Management Solutions</span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>
                              Infrastructre and Cybersecurity Solutions{" "}
                            </span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>CCTV Surveilance</span>
                          </DropdownItem>
                        </Dropdown>
                      </div>
                    </DropdownItem>
                  </Dropdown>
                </div>
                {/* Solutions */}

                {/* services */}

                <div>
                  <button
                    className="z-10 relative align-middle rounded-md focus:outline-none text-sm text-gray-500 hover:text-gray-900"
                    onClick={() => setservices(!services)}
                    aria-label="Notifications"
                    aria-haspopup="true"
                  >
                    Services
                  </button>

                  <Dropdown
                    align="center"
                    isOpen={services}
                    onClose={() => setservices(false)}
                    className="z-50"
                  >
                    <DropdownItem
                      onClick={() => setManageIT(!manageIT)}
                      className="justify-between"
                    >
                      <div>
                        <button
                          className="z-10 relative align-middle rounded-md focus:outline-none  font-medium "
                          onClick={() => setManageIT(!manageIT)}
                          aria-label="Notifications"
                          aria-haspopup="true"
                        >
                          Managed IT Services
                        </button>
                        <Dropdown
                          align="center"
                          isOpen={manageIT}
                          onClose={() => setManageIT(false)}
                          className="z-50 right-full"
                        >
                          <DropdownItem
                            tag="a"
                            href="website/product/servers"
                            className="justify-between"
                          >
                            <span>On Premise Infrastructure Management</span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>Cloud Infrastructure Management </span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>Facility Management</span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>Annual Maintenace Services </span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>On Demand Services </span>
                          </DropdownItem>
                        </Dropdown>
                      </div>
                    </DropdownItem>
                  </Dropdown>
                </div>
                {/* Services */}

                {/* products */}

                <div>
                  <button
                    className="z-10 relative align-middle rounded-md focus:outline-none  text-sm text-gray-500 hover:text-gray-900"
                    onClick={() => setproducts(!products)}
                    aria-label="Notifications"
                    aria-haspopup="true"
                  >
                    Products
                  </button>
                  <Dropdown
                    align="center"
                    isOpen={products}
                    onClose={() => setproducts(false)}
                    className="z-50"
                  >
                    <DropdownItem
                      onClick={() => setEnterpriseHW(!enterpriseHW)}
                      className="justify-between"
                    >
                      <div>
                        <button
                          className="z-10 relative align-middle rounded-md focus:outline-none  font-medium "
                          onClick={() => setEnterpriseHW(!enterpriseHW)}
                          aria-label="Notifications"
                          aria-haspopup="true"
                        >
                          Enterprise HW
                        </button>
                        <Dropdown
                          align="center"
                          isOpen={enterpriseHW}
                          onClose={() => setEnterpriseHW(false)}
                          className="z-50 right-full"
                        >
                          <DropdownItem
                            tag="a"
                            href="website/product/servers"
                            className="justify-between"
                          >
                            <span>Servers</span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>Storage </span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>Networking </span>
                          </DropdownItem>
                        </Dropdown>
                      </div>
                    </DropdownItem>

                    <DropdownItem
                      onClick={() => setendUserComputing(!endUserComputing)}
                      className="justify-between"
                    >
                      <div>
                        <button
                          className="z-10 relative align-middle rounded-md focus:outline-none  font-medium "
                          onClick={() => setendUserComputing(!endUserComputing)}
                          aria-label="Notifications"
                          aria-haspopup="true"
                        >
                          End User Computing
                        </button>
                        <Dropdown
                          align="center"
                          isOpen={endUserComputing}
                          onClose={() => setendUserComputing(false)}
                          className="z-50 right-full"
                        >
                          <DropdownItem
                            tag="a"
                            href="website/product/servers"
                            className="justify-between"
                          >
                            <span>Desktop</span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>Laptop </span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>Print Devices </span>
                          </DropdownItem>
                          <DropdownItem
                            tag="a"
                            href="#"
                            className="justify-between"
                          >
                            <span>Accessories </span>
                          </DropdownItem>
                        </Dropdown>
                      </div>
                    </DropdownItem>
                  </Dropdown>
                </div>
                {/* Products */}

                {/* support */}

                {/* <div>
                  <button
                    className="z-10 relative align-middle rounded-md focus:outline-none  font-medium text-gray-500 hover:text-gray-900"
                    onClick={() => setsupport(!support)}
                    aria-label="Notifications"
                    aria-haspopup="true"
                  >
                    Support
                  </button>
                  <Dropdown
                    align="center"
                    isOpen={support}
                    onClose={() => setsupport(false)}
                    className="z-50"
                  >
                    <DropdownItem tag="a" href="#" className="justify-between">
                      <span>Customer Login</span>
                    </DropdownItem>
                    <DropdownItem tag="a" href="#" className="justify-between">
                      <span>Employee Login</span>
                    </DropdownItem>
                  </Dropdown>
                </div> */}
                {/* Products */}
                {/* aboutus */}

                <div>
                  <button
                    className=" z-10 relative align-middle rounded-md focus:outline-none  text-sm text-gray-500 hover:text-gray-900"
                    onClick={() => setaboutus(!aboutus)}
                    aria-label="Notifications"
                    aria-haspopup="true"
                  >
                    About Us
                  </button>
                  <Dropdown
                    align="center"
                    isOpen={aboutus}
                    onClose={() => setaboutus(false)}
                    className="z-50"
                  >
                    <DropdownItem tag="a" href="#" className="justify-between">
                      <span>Company</span>
                    </DropdownItem>
                    <DropdownItem tag="a" href="#" className="justify-between">
                      <span>Careers</span>
                    </DropdownItem>
                    <DropdownItem tag="a" href="#" className="justify-between">
                      <span>Partners</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>Contact Us</span>
                    </DropdownItem>
                  </Dropdown>
                </div>
                {/* Products */}

                <div class="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                  Login
                </div>
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
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
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
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Home
              </a>

              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Products
              </a>

              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Services
              </a>
              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Support
              </a>
              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                About
              </a>
            </div>
            <a
              href="#"
              class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
