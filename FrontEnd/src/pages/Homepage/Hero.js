import React from "react";
const Hero = () => {
  return (
    <div
      class="font-sans h-screen w-full bg-cover text-center flex flex-col items-center justify-center "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1470&q=80)",
      }}
    >
      <h3 class="text-gray-800 mx-auto max-w-sm mt-4 text-3xl  bg-gray-200 p-10 rounded-lg bg-opacity-75">
        Website Under Construction
      </h3>
    </div>
  );
};

export default Hero;
