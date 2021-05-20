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

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        {/* <HeroHome /> */}
        <NewHero />
        <FeaturesBlocks />
        <PartnersHome />
        {/* <FeaturesHome /> */}

        {/* <Testimonials /> */}
        <div className="h-64 w-screen bg-white"></div>
        {/* <Newsletter /> */}
      </main>

      {/*  Site footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
