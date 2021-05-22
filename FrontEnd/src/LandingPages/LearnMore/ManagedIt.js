import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/stock/IT Consolidation.jpg";
import Navbar from "../../partials/NavBar";

const ManagedIt = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="w-full -mt-10 object-cover  lg:object-center h-h-155  md:h-h-165 lg:w-full "
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
              <h1 class="text-2xl tracking-tight  text-white md:text-4xl">
                <span class="block xl:inline">Managed IT Services</span>
              </h1>
              <h1 class="text-base tracking-tight  text-white md:text-lg">
                <span class="block xl:inline ">
                  We offer stable and reliable IT managed services to achieve
                  high availability & security
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
          To reduce risks, most of the organisations are moving towards Managed
          IT services than outsourcing certain IT services. This also enables
          them to be future ready and focus more on their business improvements
          than spending more time and money on managing their organisations IT
          infrastructure and related components. We take the 360degree
          responsibility on your organisations IT infrastructure and operations
          management including Monitoring, support and problem resolution.
        </div>

        {/* ---------------- heading and para --------------------------- */}
        <div className="text-indigo-900 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          Facility Management
        </div>
        <div className="text-gray-600 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          We help our clients focus their resources and effort entirely on their
          core business and we take ownership and handle their IT infrastructure
          in total with our IT infrastructure facility management services. We
          offer customised solutions to manage the IT assets across board right
          from design to procure to deploy and support. Our expertise across
          multiple platforms and verticals assures you of higher availability,
          reliability and performance.
        </div>
        {/* ---------------- heading and para --------------------------- */}
        <div className="text-indigo-900 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          Annual Maintenance Services
        </div>
        <div className="text-gray-600 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          We provide IT Infrastructure AMC services to customers with
          comprehensive and non- comprehensive support plans in managing the IT
          infrastructure through an SLA accountable contract, customisable to
          suit client requirements. Our trained & certified resources maintain
          the IT infrastructure and meet the highest of standards, through
          expertise and strong commitment to customer satisfaction
        </div>
        {/* ---------------- heading and para --------------------------- */}
        <div className="text-indigo-900 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          On-Demand Services
        </div>
        <div className="text-gray-600 text-xl w-5/6 md:w-1/2 my-4 font-business ">
          We provide on-demand services by which customer can receive access to
          our service offering, without an administrator or support staff having
          to fulfil the request manually. We offer on-demand services on below:
          <br />
          <ul>
            <li className="font-semibold">Server & Storage Installation</li>
            <li className="font-semibold">Operating System Installation</li>
            <li className="font-semibold">Desktop & Laptop Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManagedIt;
