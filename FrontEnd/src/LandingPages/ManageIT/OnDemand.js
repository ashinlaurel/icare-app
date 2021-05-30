import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import Navbar from "../../partials/NavBar";
import cloudimage from "../../images/stock/On-demand.jpg";

const OnDemand = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="w-full -mt-10 object-cover lg:object-center h-h-155  md:h-h-155 lg:w-full"
            src={
              cloudimage
              // "https://images.pexels.com/photos/7491610/pexels-photo-7491610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
            alt=""
          />
        </div>
      </div>

      {/* Heading */}
      <div className="  bg-hero-bg -mt-56 flex flex-col items-left justify-center">
        <div class=" justify-center items-center max-w-sm md:max-w-xl z-10 pb-4 bg-black bg-opacity-50 ml-10">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0  flex flex-col items-center justify-center ">
            <div class="sm:text-center lg:text-left pt-4 ">
              <h1 class="text-2xl tracking-tight  text-white md:text-4xl">
                <span class="block xl:inline">On Demand Service</span>
              </h1>
              <h1 class="text-1xl tracking-tight  text-white  md:text-lg">
                <span class="block xl:inline">
                  We offer several on-demand services on Enterprise products or
                  Client computing devices
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
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-medium">
          Server & Storage Installation
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business lg:text-justify">
          We help customers to upgrade existing server or storage, deploy a new
          server or storage system or moving partially or completely to cloud,
          INFOCARE can be your trusted partner in executing your project on time
          and within budget. We take complete ownership of design, deploy and
          support, ensuring a worry-free experience or we can work in an
          advisory capacity, providing strategic guidance and expert advice to
          your internal IT team
        </div>

        {/* ---------------- --------------------------- */}
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-medium">
          Operating System Installation
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business lg:text-justify">
          We help customers Installing an operating system including Windows
          Server OS, CentOS, RHEL, Ubuntu through our skilled engineers who has
          the expertise in these operating systems. The deliverables shall be
          mutually agreed upon.
        </div>

        {/* ---------------- --------------------------- */}
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-medium">
          Network Design and Installation
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business lg:text-justify">
          We help customers in designing and implementing a highly efficient,
          cost-effective, future ready network backbone which will streamline
          your organisations operations. We have sufficient expertise in
          designing, deploying, testing and commissioning from single-site to
          multiple location environments
        </div>

        {/* ---------------- --------------------------- */}
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-medium">
          Virtualization Services
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business lg:text-justify">
          INFOCARE has the expertise and experience in design, installation,
          configuration and deploy hypervisor based solutions across brands such
          as Microsoft Hyper-V and VMware vSphere. We identify virtualisation
          software which suits to your IT infrastructure, Database and
          application
        </div>

        {/* ---------------- --------------------------- */}
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-medium">
          Desktop & Laptop Services
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business lg:text-justify">
          We repair all major brands including HP, Lenovo and Acer. We also does
          upgrade and replacement services for all Laptops and Desktops
        </div>

        {/* ---------------- --------------------------- */}
      </div>
      {/* ------------------------------------------------------------------------ */}
    </div>
  );
};

export default OnDemand;
