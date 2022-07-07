import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import NewHero from "../partials/NewHero";
import Navbar from "../partials/NavBar";
import PartnersHome from "../partials/PartnersHome";
import Features2 from "../partials/Features2";
import TryHero from "../partials/TryHero";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* <Navbar /> */}
      {/* Site header */}
      {/* <Header /> */}
      {/* Page content */}
      <main className="flex-grow">
        {/* Page sections */}
        {/* <HeroHome /> */}

        {/* <Testimonials /> */}
        {/* <Newsletter /> */}
        {/*  Site footer */}
        {/* <Footer /> */}

        {/* --------------old----------------- */}
        {/* <NewHero />
        {/* <FeaturesBlocks /> */}
        {/* <FeaturesHome /> */}
        {/* <PartnersHome />  */}

        {/* <NewHero /> */}
        {/* <FeaturesBlocks /> */}
        <TryHero />
        <FeaturesHome />
        <Features2 />
        <PartnersHome />

        <div className="h-40 w-screen bg-gray-100"></div>
      </main>
    </div>
  );
}

export default Home;
