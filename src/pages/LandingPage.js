import React from "react";
import Banner from "../components/common/Banner";
import Header from "../components/common/Header";
import Services from "../components/landingPage/Services";
import Footer from "../components/common/Footer";
import Resion from "../components/landingPage/Resion";

function LandingPage() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Resion />
      <Footer />
    </div>
  );
}

export default LandingPage;
