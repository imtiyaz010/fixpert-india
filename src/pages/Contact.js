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
        bg="https://res.cloudinary.com/practicaldev/image/fetch/s--azBZrKVe--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/lkqdz74o7w5f1m26r7aw.jpg"
        title="Contact"
      />
      <Links />
      <Footer />
    </div>
  );
}

export default Contact;
