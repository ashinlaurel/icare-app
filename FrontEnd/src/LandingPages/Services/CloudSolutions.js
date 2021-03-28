import React from "react";
import Footer from "../../partials/Footer";
import NewHero from "../../partials/NewHero";
import herobg from "../../images/herobg.jpg";

const CloudSolutions = () => {
  return (
    <div className="">
      <div class="relative bg-white overflow-hidden  ">
        <div class=" max-h-xl ">
          <img
            class="h-56 w-full  object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={
              "https://images.unsplash.com/photo-1564457461758-8ff96e439e83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
            }
            alt=""
          />
        </div>
      </div>

      {/* Heading */}
      <div className="  bg-hero-bg -mt-48 flex flex-col items-center justify-center">
        <div class=" justify-center items-center max-w-sm md:max-w-3xl z-10 pb-8 bg-white    ">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0 lg:px-8 flex flex-col items-center justify-center ">
            <div class="sm:text-center lg:text-left pt-10 ">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Cloud Solutions</span>
              </h1>

              <h2>
                <span class="block text-blue-700 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-4xl ">
                  IT and Consulting Services
                </span>
              </h2>
            </div>
          </main>
        </div>
      </div>

      {/*Content */}
      <div className=" flex-col flex items-center justify-center my-10">
        <div className="text-gray-600 text-lg w-1/2 my-4 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="text-gray-600 text-lg w-1/2 my-4 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default CloudSolutions;
