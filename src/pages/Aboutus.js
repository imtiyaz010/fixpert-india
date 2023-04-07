import React from "react";
import Header from "../components/common/Header";
import PageBanner from "../components/common/PageBanner";
import About from "../components/about-us/About";
import Query from "../components/about-us/Query";
import Footer from "../components/common/Footer";

function Aboutus() {
  return (
    <div>
      <Header />
      <PageBanner
        title="About Us"
        bg="https://www.datocms-assets.com/53681/1632462877-abiutusgiepl.jpeg"
      />
      <div className="flex flex-col justify-center 3xl:px-[25%]">
        <About />
        <Query />
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
