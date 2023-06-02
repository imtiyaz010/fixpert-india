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
        bg="https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
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
