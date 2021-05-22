import React from "react";
import Footer from "../../partials/Footer";
import ProductCard from "../../partials/ProductCard";
import cloudimage from "../../images/stock/Printing.jpg";
import imgptone from "../../images/networking/set1/HPE NETWORK.webp";

import imgpt1one from "../../images/printing/set1/Epson L3115 -1.webp";
import imgpt1two from "../../images/printing/set1/Epson M1180 - 1.webp";
import imgpt1three from "../../images/printing/set1/Epson M200 - 1.webp";
import imgpt1four from "../../images/printing/set1/Epson M15140.webp";

import imgpt1onedesc from "../../images/printing/set1/Epson L3115 -2.webp";
import imgpt1twodesc from "../../images/printing/set1/Epson M1180 - 2.webp";
import imgpt1threedesc from "../../images/printing/set1/Epson M200 - 2.webp";

import imgpt2one from "../../images/printing/set2/Epson Scanner - 1.webp";
import imgpt2two from "../../images/printing/set2/Epson Scanner - 2.webp";
import imgpt2three from "../../images/printing/set2/Epson Scanner - 3.webp";

import imgpt2onedesc from "../../images/printing/set2/Epson Scanner - 1d.webp";
import imgpt2twodesc from "../../images/printing/set2/Epson Scanner - 2d.webp";
import imgpt2threedesc from "../../images/printing/set2/Epson Scanner - 3d.webp";

import imgpt3one from "../../images/printing/set3/Canon Pixma G2060 - 1.webp";
import imgpt3two from "../../images/printing/set3/Canon Pixma G7060 - 1.webp";
import imgpt3three from "../../images/printing/set3/Canon Laser LBP 2900B - 1.webp";
import imgpt3four from "../../images/printing/set3/Canon Laser LBP MF232W - 1.webp";
import imgpt3five from "../../images/printing/set3/Canon Lide 300 - 1.webp";
import imgpt3six from "../../images/printing/set3/Canon Lide 400 - 1.webp";
import imgpt3seven from "../../images/printing/set3/Canon DR-G2090 - 1.webp";

import imgpt3onedesc from "../../images/printing/set3/Canon Pixma G2060 - 2.webp";
import imgpt3twodesc from "../../images/printing/set3/Canon Pixma G7060 - 2.webp";
import imgpt3threedesc from "../../images/printing/set3/Canon Laser LBP 2900B - 2.webp";
import imgpt3fourdesc from "../../images/printing/set3/Canon Laser LBP MF232W - 2.webp";
import imgpt3fivedesc from "../../images/printing/set3/Canon Lide 300 - 2.webp";
import imgpt3sixdesc from "../../images/printing/set3/Canon Lide 400 - 2.webp";
import imgpt3sevendesc from "../../images/printing/set3/Canon DR-G2090 - 2.webp";

const Printing = () => {
  return (
    <div className="">
      <div class="">
        <div class=" max-h-xl ">
          <img
            class="h-40 w-full object-cover  object-center sm:h-72 md:h-56 lg:w-full lg:h-h-150"
            src={
              cloudimage
              // "https://images.unsplash.com/photo-1520869562399-e772f042f422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80"
            }
            alt=""
          />
        </div>
      </div>

      {/* Heading */}
      <div className="  bg-hero-bg -mt-48 flex flex-col items-left justify-center ">
        <div class=" justify-center items-center max-w-sm md:max-w-xl pb-4 bg-black bg-opacity-0 ml-40">
          <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5 lg:mt-0  flex flex-col items-center justify-center ">
            <div class="sm:text-center lg:text-left pt-4 ">
              <h1 class="text-2xl tracking-tight  text-white sm:text-5xl md:text-3xl font-business">
                <span class="block xl:inline">Printing Solutions</span>
              </h1>
              <h1 class="text-2xl tracking-tight font-business  text-white sm:text-5xl md:text-sm">
                <span class="block xl:inline">
                  We provide full range of printers & scanners for Home,
                  Business & Industries from world Technology leaders Epson and
                  Canon
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
      <div className=" flex-col flex items-center justify-center mb-5 mt-32 ">
        <div className="text-gray-600 text-lg w-1/2 my-4 leading-7 font-business ">
          We deal with Printers, Projectors & Scanners of all categories:
        </div>
      </div>

      {/* ---------------Part 1 ---------------- */}

      <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-2xl w-1/2 mt-2 leading-7 font-business ">
          Epson Inktank Printers
        </div>
      </div>
      {/* <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-xl  w-1/2 font-business ">
          Storage Products
        </div>
      </div> */}

      {/*------------------- Images Area ---------------------------  */}
      <div className="flex items-center justify-center w-full">
        <div className="flex-row flex flex-wrap items-center justify-center w-1/2">
          {/* --------------Images 1 ---------------------- */}
          <div className="w-1/4 my-10">
            <a
              target="_blank"
              href="https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/EcoTank-L3115-Multifunction-InkTank-Printer-/p/C11CG87515"
            >
              <img className="mx-auto" src={imgpt1one}></img>
              <img className="mx-auto" src={imgpt1onedesc}></img>
            </a>
          </div>
          <div className="w-1/4 my-10">
            <a
              target="_blank"
              href="https://www.epson.co.in/Ink-Tank/Ink-Tank-System-Printers/EcoTank-Monochrome-M1180-Wi-Fi-InkTank-Printer/p/C11CG94504"
            >
              <img className="mx-auto" src={imgpt1two}></img>
              <img className="mx-auto" src={imgpt1twodesc}></img>
            </a>{" "}
          </div>
          <div className="w-1/4 my-10">
            <a
              target="_blank"
              href="https://www.epson.co.in/Ink-Tank/Ink-Tank-System-Printers/EcoTank-M200-Multifunction-B%26W-Printer/p/C11CC83412"
            >
              <img className="mx-auto" src={imgpt1three}></img>
              <img className="mx-auto" src={imgpt1threedesc}></img>
            </a>{" "}
          </div>
          <div className="w-1/4 my-10">
            <a
              target="_blank"
              href="https://www.epson.co.in/EcoTank-Printers/Epson-EcoTank-M15140-A3-Wi-Fi-Duplex-All-in-One-Ink-Tank-Printer/p/C11CJ41502"
            >
              <img className="mx-auto" src={imgpt1four}></img>
            </a>
          </div>
        </div>
      </div>
      {/* ---------------Part 2 ---------------- */}

      <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-2xl w-1/2 mt-2 leading-7 font-business ">
          Epson Scanners
        </div>
      </div>
      {/* <div className=" flex-col flex items-center justify-center">
        <div className="text-indigo-900 text-xl text-center  w-1/2 font-business ">
          FIBER OPTICS
        </div>
      </div> */}

      {/*------------------- Images Area ---------------------------  */}
      <div className="flex items-center justify-center w-full">
        <div className="flex-row flex flex-wrap items-center justify-center w-1/2">
          {/* --------------Images 1 ---------------------- */}
          <div className="w-1/3 my-10">
            <a
              target="_blank"
              href="https://www.epson.co.in/Scanners/A4-Document-Scanners/Epson-WorkForce-DS-1630/p/B11B239504"
            >
              <img className="mx-auto" src={imgpt2one}></img>
              <img className="mx-auto" src={imgpt2onedesc}></img>
            </a>{" "}
          </div>
          <div className="w-1/3  my-10">
            <a
              target="_blank"
              href="https://www.epson.co.in/Scanners/A4-Document-Scanners/Epson-WorkForce-DS-530-A4-Duplex-Sheet-fed-Document-Scanner/p/B11B226503"
            >
              <img className="mx-auto" src={imgpt2two}></img>
              <img className="mx-auto" src={imgpt2twodesc}></img>
            </a>{" "}
          </div>
          <div className="w-1/3 my-10">
            <a
              target="_blank"
              href="https://www.epson.co.in/Scanners/A4-Document-Scanners/Epson-WorkForce-DS-7500-Flatbed-Document-Scanner-with-Duplex-ADF/p/B11B205502"
            >
              <img className="mx-auto" src={imgpt2three}></img>
              <img className="mx-auto" src={imgpt2threedesc}></img>
            </a>{" "}
          </div>
        </div>
      </div>

      {/* ---------------Part 3 ---------------- */}

      {/* <div className=" flex-col flex items-center justify-center mb-5 ">
        <div className="text-indigo-900 text-2xl w-1/2 mt-2 leading-7 font-business ">
          Reichle & De-Massari (R&M)
        </div>
      </div> */}
      <div className=" flex-col flex items-center justify-center">
        <div className="text-indigo-900 text-xl text-left w-1/2 font-business ">
          Canon Printers and Scanners
        </div>
      </div>

      {/*------------------- Images Area ---------------------------  */}
      <div className="flex items-center justify-center w-full">
        <div className="flex-row flex flex-wrap items-center justify-center w-1/2">
          {/* --------------Images 1 ---------------------- */}
          <div className="w-1/4 my-10 ">
            <a
              target="_blank"
              href="https://in.canon/en/consumer/pixma-g2060/product?category=printing&subCategory=inkjet-printers"
            >
              <img className="mx-auto" src={imgpt3one}></img>
              <img className="mx-auto" src={imgpt3onedesc}></img>
            </a>
          </div>
          <div className="w-1/4 my-10">
            <a
              target="_blank"
              href="https://in.canon/en/consumer/pixma-g7070/product?category=printing&subCategory=inkjet-printers"
            >
              <img className="mx-auto" src={imgpt3two}></img>
              <img className="mx-auto" src={imgpt3twodesc}></img>
            </a>{" "}
          </div>
          <div className="w-1/4 my-10">
            <a
              target="_blank"
              href="https://in.canon/en/consumer/laser-shot-lbp2900b/product?category=printing&subCategory=laser-printers"
            >
              <img className="mx-auto" src={imgpt3three}></img>
              <img className="mx-auto" src={imgpt3threedesc}></img>
            </a>{" "}
          </div>
          <div className="w-1/4 my-10">
            <a
              target="_blank"
              href="https://in.canon/en/consumer/imageclass-mf232w/product?category=printing&subCategory=laser-printers"
            >
              <img className="mx-auto" src={imgpt3four}></img>
              <img className="mx-auto" src={imgpt3fourdesc}></img>
            </a>{" "}
          </div>
          <div className="w-1/4 my-10">
            <a
              target="_blank"
              href="https://in.canon/en/consumer/lide-300/product?category=scanning&subCategory=flatbed-scanners"
            >
              <img className="mx-auto" src={imgpt3five}></img>
              <img className="mx-auto" src={imgpt3fivedesc}></img>
            </a>{" "}
          </div>
          <div className="w-1/4 my-10">
            <a
              target="_blank"
              href="https://in.canon/en/consumer/lide-400/product?category=scanning&subCategory=flatbed-scanners"
            >
              <img className="mx-auto" src={imgpt3six}></img>
              <img className="mx-auto" src={imgpt3sixdesc}></img>
            </a>{" "}
          </div>
          <div className="w-1/4 my-10 ">
            <a
              target="_blank"
              href="https://in.canon/en/consumer/dr-g2090-2110-2140/product?category=scanning&subCategory=document-scanners"
            >
              <img className="mx-auto" src={imgpt3seven}></img>
              <img className="mx-auto" src={imgpt3sevendesc}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Printing;
