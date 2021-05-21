import React from "react";

function FeaturesBlocks() {
  return (
    <section className="relative font-business bg-white">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-white pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className=" md:py-10">
          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center  md:pb-20">
            <h2 className="text-xl md:text-4xl font-bold ">Our Services</h2>
            <p className="text-md text-gray-600">
              {/* Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat. *
            </p>
          </div> */}

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-4xl ">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-100 rounded h-h-86 ">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-gray-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-gray-600"
                      d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 37.714h5.715L36.57 26.286h8"
                    />
                    <path
                      className="stroke-current text-gray-600"
                      strokeLinecap="square"
                      d="M41.143 34.286l3.428 3.428-3.428 3.429"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M41.143 29.714l3.428-3.428-3.428-3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-normal  leading-snug tracking-tight mb-2">
                Cloud Solutions
              </h4>
              <p className="text-gray-600 text-justify mx-2">
                We help in your transformation journey by doing the readiness
                assessment and provide the right solution that's aligned with
                your enterprise business strategy.
              </p>
              <div class=" align-bottom">
                <a
                  href="/website/service/cloudsolutions"
                  class="w-full flex items-center justify-center px-3 py-1  text-base font-medium  text-gray-800 hover:text-black hover:bg-gray-100  rounded-md  my-4"
                >
                  + Learn More
                </a>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-100 rounded -gray-300  h-h-86">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-gray-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="1.143"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                    />
                    <path
                      className="stroke-current text-gray-600"
                      d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-normal  leading-snug tracking-tight mb-2">
                Managed IT Services
              </h4>
              <p className="text-gray-600 text-justify mx-2">
                You can now focus more on your business performance. Find out
                how Infocare's managed IT services can help you.
              </p>
              {/* <div class="">
                <a
                  href="/website/service/cloudsolutions"
                  class="w-full flex items-center justify-center px-3 py-1  text-base font-medium  text-gray-800 hover:text-black hover:bg-gray-100 rounded-md  my-4"
                >
                  + Learn More
                </a>
              </div> */}
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-100 rounded -gray-300  h-h-86">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-gray-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="stroke-current text-gray-600"
                      d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-normal  leading-snug tracking-tight mb-2">
                Security Solutions
              </h4>
              <p className="text-gray-600 text-justify mx-2">
                Secure your infrastructure by choosing from the wide range of
                solutions that fits your need, may it be on-premise or cloud
                infrastructure.
              </p>
              {/* <div class="">
                <a
                  href="/website/service/cloudsolutions"
                  class="w-full flex items-center justify-center px-3 py-1  text-base font-medium  text-gray-800 hover:text-black hover:bg-gray-100 rounded-md  my-4"
                >
                  + Learn More
                </a>
              </div> */}
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-100 rounded -gray-300  h-h-86">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-gray-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M12.571 4.571V0H0v25.143h12.571V20.57"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M16 12.571h8"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M19.429 8L24 12.571l-4.571 4.572"
                    />
                    <circle
                      className="stroke-current text-gray-600"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-normal  leading-snug tracking-tight mb-2">
                Enterprise Products
              </h4>
              <p className="text-gray-600 text-justify mx-2">
                We deliver you the right Enterprise hardware for your
                infrastructure from most trusted brands at best price. Click to
                browse through the catalog to get more info on the products.
              </p>
              {/* <div class="">
                <a
                  href="/website/service/cloudsolutions"
                  class="w-full flex items-center justify-center px-3 py-1  text-base font-medium  text-gray-800 hover:text-black hover:bg-gray-100 rounded-md  my-4"
                >
                  + Learn More
                </a>
              </div> */}
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-100 rounded -gray-300  h-h-86">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-gray-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M20.571 20.571h13.714v17.143H20.571z"
                    />
                    <path
                      className="stroke-current text-gray-600"
                      d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-normal  leading-snug tracking-tight mb-2">
                Infrastructure Solutions
              </h4>
              <p className="text-gray-600 text-justify mx-2">
                May it be a LAN, WAN, WLAN for simple to complex infrastructure,
                we provide you reliable & secure solutions for your enterprise's
                seamless functionality.
              </p>
              {/* <div class="">
                <a
                  href="/website/service/cloudsolutions"
                  class="w-full flex items-center justify-center px-3 py-1  text-base font-medium  text-gray-800 hover:text-black hover:bg-gray-100 rounded-md  my-4"
                >
                  + Learn More
                </a>
              </div> */}
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-100 rounded -gray-300  h-h-86">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-gray-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                    />
                    <path
                      className="stroke-current text-gray-600"
                      d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-normal  leading-snug tracking-tight mb-2">
                End User Computing
              </h4>
              <p className="text-gray-600 text-justify mx-2">
                Choose the right device for your planned and unplanned
                requirement with committed quality support.
              </p>
              {/* <div class="">
                <a
                  href="/website/service/cloudsolutions"
                  class="w-full flex items-center justify-center px-3 py-1  text-base font-medium  text-gray-800 hover:text-black hover:bg-gray-100 rounded-md  my-4"
                >
                  + Learn More
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
