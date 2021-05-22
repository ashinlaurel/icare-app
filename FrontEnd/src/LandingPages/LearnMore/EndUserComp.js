import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/cloud-upload-icon-line-connection-circuit-board.jpg";
import Navbar from "../../partials/NavBar";
import { Card, CardBody } from "@windmill/react-ui";

const EndUserComp = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="w-full -mt-10 object-cover  lg:object-center h-h-155  md:h-h-165 lg:w-full "
            src={
              "https://images.unsplash.com/photo-1605449591750-7bf5cc4f013f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
            }
            alt=""
          />
        </div>
      </div>

      {/* Heading */}
      <div className="  bg-hero-bg -mt-56 flex flex-col items-left justify-center">
        <div class=" justify-center items-center max-w-sm md:max-w-xl z-10 pb-4 bg-black bg-opacity-0 ml-10">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0  flex flex-col items-center justify-center ">
            <div class="sm:text-center lg:text-left pt-4 ">
              <h1 class="text-2xl tracking-tight  text-white md:text-4xl">
                <span class="block xl:inline">End User Computing</span>
              </h1>
              <h1 class="text-base tracking-tight  text-white md:text-lg">
                <span class="block xl:inline ">
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
      <div className=" flex-col flex items-center justify-center mb-5 mt-32">
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          We provide End-user computing solutions in a cost-effective way and
          will be created based on end user needs, with an agile, efficient and
          secure IT infrastructure. Infocare partners with leading global
          technology innovators HP, Lenovo, Epson, Canon to help bring these
          technology solutions to your doorstep
        </div>

        {/* ---------------- CARD-1 --------------------------- */}
        <div className="text-indigo-900 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          Our Enterprise Solutions
        </div>
        <div className="text-gray-600 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          <Card className="flex h-48">
            <img className="object-cover w-1/2" src="/img/forest.jpeg" />
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Enterprise Server
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We help customers to expand their licensing and subscription
                requirement with all leading software
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We offer full range of Tower, Rack servers from HPE and Lenovo
                for the small Business to Business Critical Enterprise customers
              </p>
            </CardBody>
          </Card>
        </div>
        {/* ---------------- CARD-2 --------------------------- */}

        <div className="text-gray-600 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          <Card className="flex h-48">
            <img className="object-cover w-1/2" src="/img/forest.jpeg" />
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Enterprise Storage
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We offer secure and economic solutions to address storage
                requirement for NAS, File Storage and Object Storage from HPE
                full range of Enterprise Storage products
              </p>
            </CardBody>
          </Card>
        </div>
        {/* ---------------- CARD-3 --------------------------- */}

        <div className="text-gray-600 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          <Card className="flex h-48">
            <img className="object-cover w-1/2" src="/img/forest.jpeg" />
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Enterprise Networking
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We offer entry level switch to high performance networking
                devices from HPE to realise the potential of the new and
                high-performing applications
              </p>
            </CardBody>
          </Card>
        </div>
        {/* ---------------- CARD-4 --------------------------- */}

        <div className="text-gray-600 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          <Card className="flex h-48">
            <img className="object-cover w-1/2" src="/img/forest.jpeg" />
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Licensing & Subscription
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We help customers to expand their licensing and subscription
                requirement with all leading software
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EndUserComp;
