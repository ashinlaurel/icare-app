import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/globeconnect.jpg";
import Navbar from "../../partials/NavBar";

const HabcSolution = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="w-full -mt-10 object-cover lg:object-center h-h-155  md:h-h-155 lg:w-full"
            src={cloudimage}
            alt=""
          />
        </div>
      </div>

      {/* Heading */}
      <div className="  bg-hero-bg -mt-56 flex flex-col items-left justify-center">
        <div class=" justify-center items-center max-w-sm md:max-w-xl z-10 pb-4 bg-black bg-opacity-0 ml-10">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0  flex flex-col items-center justify-center ">
            <div class="sm:text-center lg:text-left pt-4 ">
              <h1 class="text-2xl tracking-tight  text-white  md:text-4xl">
                <span class="block xl:inline">HA & BC/DR Solutions</span>
              </h1>
              <h1 class="text-1xl tracking-tight  text-white  md:text-lg">
                <span class="block xl:inline">
                  We design high availability solutions to provide availability,
                  reliability, service continuity, scalability, upgradeability
                  and excellent performance
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
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business lg:text-justify">
          Service availability is crucial for your business where minimal
          downtime can result negative results directly or indirectly. 100%
          availability of IT service is unreachable in ideal cases,
          organizations thrive to have the maximum availability of their IT
          services, thus their IT infrastructure to meet their service
          commitment to their customers. When it comes to the high Availability
          its necessary to look in to the infrastructure hardware and software
          components. We help organizations with various high-availability
          solutions to reduce the unavailability of their critical services. The
          problem is often related to the low portability of the available
          commercial solutions, due to the strong dependency between the high
          availability tool provided and the operating system, or to the need of
          a specific software. While high availability services are essential
          for 24x7 mission critical applications, the cost issue has to be
          carefully evaluated.
        </div>

        {/* ---------------- heading and para --------------------------- */}
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          HA Infrastructure
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business lg:text-justify">
          One of the many and common reasons for service unavailability is due
          to the failure of the underlying infrastructure components. We provide
          tailored and custom made high available virtualization solutions that
          help you deliver your business critical services by an increased
          infrastructure availability. Our solution would include operating
          system clusters, computing, network & storage layer part of the high
          available solution.
        </div>
        {/* ---------------- heading and para --------------------------- */}
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business">
          HA Database Cluster Solutions
        </div>
        <div className="text-gray-600 text-lg w-5/6 md:w-1/2 my-4 leading-7 font-business lg:text-justify">
          Keeping the database highly available is very critical for your
          mission critical frontend applications and the service they deliver.
          We have proven solutions that will help you achieve the former
          requirement. We are experts in DB cluster solutions and have helped
          many clients to achieve an excellent availability percentage with our
          solutions. we can provide reliable solutions for Oracle, MSSQL,
          PostgreSQL running on Windows or Linux.
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}
    </div>
  );
};

export default HabcSolution;
