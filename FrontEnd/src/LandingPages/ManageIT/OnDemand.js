import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/cloud-upload-icon-line-connection-circuit-board.jpg";

const OnDemand = () => {
  return (
    <div className="">
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="h-40 w-full object-cover object-left sm:h-72 md:h-56 lg:w-full lg:h-h-151"
            src={cloudimage}
            alt=""
          />
        </div>
      </div>

      {/* Heading */}
      <div className="  bg-hero-bg -mt-56 flex flex-col items-left justify-center">
        <div class=" justify-center items-center max-w-sm md:max-w-xl z-10 pb-4 bg-black bg-opacity-50 ml-10">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0  flex flex-col items-center justify-center ">
            <div class="sm:text-center lg:text-left pt-4 ">
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-4xl">
                <span class="block xl:inline">On Demand Service</span>
              </h1>
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-lg">
                <span class="block xl:inline">
                We offer several on-demand services on Enterprise products or Client computing devices
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
      <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
      Server & Storage Installation
          </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
        We help customers to upgrade existing server or storage, deploy a new server or storage system or moving partially or completely to cloud, INFOCARE can be your trusted partner in executing your project on time and within budget. We take complete ownership of design, deploy and support, ensuring a worry-free experience or we can work in an advisory capacity, providing strategic guidance and expert advice to your internal IT team
        </div>
       
        {/* ---------------- --------------------------- */}
        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
        Operating System Installation
          </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
        We help customers Installing an operating system including Windows Server OS, CentOS, RHEL, Ubuntu through our skilled engineers who has the expertise in these operating systems. The deliverables shall be mutually agreed upon.
        </div>
       
        {/* ---------------- --------------------------- */}
        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
        Network Design and Installation
          </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
        We help customers in designing and implementing a highly efficient, cost-effective, future ready network backbone which will streamline your organisations operations. We have sufficient expertise in designing, deploying, testing and commissioning from single-site to multiple location environments
        </div>
       
        {/* ---------------- --------------------------- */}
        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
        Virtualization Services
          </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
        INFOCARE has the expertise and experience in design, installation, configuration and deploy hypervisor based solutions across brands such as Microsoft Hyper-V and VMware vSphere. We identify virtualisation software which suits to your IT infrastructure, Database and application
        </div>
       
        {/* ---------------- --------------------------- */}
        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
        Desktop & Laptop Services
          </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
        We repair all major brands including HP, Lenovo and Acer. We also does upgrade and replacement services for all Laptops and Desktops
        </div>
       
        {/* ---------------- --------------------------- */}
       
        
        
      </div>
      {/* ------------------------------------------------------------------------ */}

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default OnDemand;
