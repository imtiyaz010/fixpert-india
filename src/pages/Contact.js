import React from "react";
import Header from "../components/common/Header";
import PageBanner from "../components/common/PageBanner";
import Footer from "../components/common/Footer";
import Links from "../components/contact/Links";

function Contact() {
  return (
    <div>
      <Header />
      <PageBanner
        bg="https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        title="Contact"
      />
      <Links />
      <Footer />
    </div>
  );
}

export default Contact;
