import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";
import cloudimage from "../../images/cloud-upload-icon-line-connection-circuit-board.jpg";
import Navbar from "../../partials/NavBar";

const StructuredNetworking = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="h-40 w-full object-cover object-left sm:h-72 md:h-56 lg:w-full lg:h-h-151"
            src={
              "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-4xl">
                <span class="block xl:inline">Network Solutions</span>
              </h1>
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-lg">
                <span class="block xl:inline">
                  We build efficient Network with Capabilities, Capacity and
                  Security
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
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          We have partnered with Hewlett Packard Enterprise and Reichle &
          De-Massari (R&M India) to deal with their entire range of Active and
          Passive Networking Components. Our team has enough skills to handle
          all these products during Installation and after support. We have
          successfully completed 500+ structured networking sites in Kerala
        </div>
        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          Structured Networking
        </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          Structured cabling is a type of infrastructure that supports the
          performance of an organisation’s cabling system or network. The
          importance of organised cabling systems will vary from business to
          business, but for the majority, it can ensure a highly reliable and
          cost-effective network infrastructure that will stand the test of time
        </div>

        {/* ----------------bullets block --------------------------- */}
        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          Structured cabling is a type of infrastructure that supports the
          performance of an organisation’s cabling system or network. The
          importance of organised cabling systems will vary from business to
          business, but for the majority, it can ensure a highly reliable and
          cost-effective network infrastructure that will stand the test of time
        </div>

        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ml-16 ">
          <ul className=" list-disc">
            <li className="my-1">Future Proof Investment</li>
            <li className="my-1">Simplicity</li>
            <li className="my-1">Cost Effective</li>
            <li className="my-1">Enhanced Flexibility</li>
            <li className="my-1">Reduced Risk of Downtime</li>
          </ul>
        </div>

        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          We are specialised in IT, Network Support and installing wired and
          wireless computer networks across Kerala. We are having partnerships
          with HPE and R&M, etc.{" "}
        </div>

        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          Site Survey​
        </div>

        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          Our team will have a physical visit to the premise and identifies
          suitable locations to place the structured cabling active components.
          An accurate survey helps us to develop excellent design for easier
          deployment of a network. ​
        </div>

        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          Network Design
        </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          We prepare solution document, list of active and passive components,
          detailed network diagram and implementation plan. The data from the
          site survey is the basis of design. We use all modern tools to design
          the network.
        </div>

        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          Network installation
        </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          Our experts will install the components and does the hardware and
          software configuration. We document the entire configuration details
          for future reference.
        </div>

        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          Network Site Certification
        </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          On completion of Networking installation, as part of structured
          networking process, we complete the below test and these tests are
          required to get site certifications from the respective OEM vendors
          and also to assure you the quality and reliability of the network
          installed.
          <br />
          CAT6 / CAT6A Fluke Test
          <br />
          OFC OTDR Test Report
        </div>

        <div className="text-indigo-900 text-xl w-1/2 my-1 font-business ">
          Documentation
        </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          On Completion of Network installation, we hand over technical document
          along with drawing for future maintenance and expansion
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}
    </div>
  );
};

export default StructuredNetworking;
