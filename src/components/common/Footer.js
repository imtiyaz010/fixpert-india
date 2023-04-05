import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className=" bg-slate-800">
      <div>
        <InfoDiv />
      </div>
      <div>
        <ServicesDiv />
      </div>
      <hr />
      <div className="grid place-items-center text-white p-4 text-sm">
        <p>Copyright 2023 © All Rights Reserved By Fixpert Services</p>
      </div>
    </div>
  );
}

const InfoDiv = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-white md:p-16 p-6 gap-12">
      <div className="w- min-h-40  bg-white text-black flex justify-center flex-col gap-5 p-8 shadow-md md:col-span-2">
        <h2 className="font-bold">FIXPERT</h2>
        <p className="font-semibold">
          Fixpert Services is a leading Home and Office Services Platform of
          India.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">Quick Links</h2>
        <hr className="w-1/3" />
        <ul className="flex flex-col gap-3 text-sm">
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact Us</li>
          <li className="cursor-pointer">Privacy Policy</li>
          <li className="cursor-pointer">Terms & Conditions</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">Contact Info</h2>
        <hr className="w-1/3" />
        <ul className="flex flex-col gap-3 text-sm">
          <li className="cursor-pointer">Gurgaon, Haryana</li>
          <li className="cursor-pointer">91-8987378792</li>
          <li className="cursor-pointer">
            Support@nakodadcs.com
            <br />
            We reply within 1 work day
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">Working Hours</h2>
        <hr className="w-1/3" />
        <ul className="flex flex-col gap-3 text-sm">
          <li>Timing 9:00 AM - 9:00 PM</li>
          <li>Monday To Sunday</li>
          <li className="flex flex-row gap-3">
            <FaFacebookF className="h-4 w-4 cursor-pointer text-white bg-slate-800" />
            <FaLinkedinIn className="h-4 w-4 cursor-pointer text-white bg-slate-800" />
            <FaInstagram className="h-4 w-4 cursor-pointer text-white bg-slate-800" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const ServicesDiv = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white mb-8">
      <div className="gap-2 flex flex-col ">
        <h2>OUR SERVICES</h2>
        <hr />
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:p-8 p-2 md:gap-12 text-sm">
          <div className="flex flex-col gap-4">
            <ul className="flex flex-col gap-3">
              <li className="cursor-pointer">Sofa Deep Cleaning</li>
              <li className="cursor-pointer">Full Home Cleaning</li>
              <li className="cursor-pointer">Office Cleaning</li>
              <li className="cursor-pointer">Kitchen Deep Cleaning Services</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="flex flex-col gap-3">
              <li className="cursor-pointer">Chair Cleaning</li>
              <li className="cursor-pointer">Glass and Windows Cleaning</li>
              <li className="cursor-pointer">Carpenter</li>
              <li className="cursor-pointer">Home Painting</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="flex flex-col gap-3">
              <li className="cursor-pointer">Cleaning</li>
              <li className="cursor-pointer">Pest Control</li>
              <li className="cursor-pointer">Plumber</li>
              <li className="cursor-pointer">Electrician</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="flex flex-col gap-3">
              <li className="cursor-pointer">AC Service Repair</li>
              <li className="cursor-pointer">LED TV Repairing Near Me</li>
              <li className="cursor-pointer">AC Gas Filling Near Me</li>
              <li className="cursor-pointer">CCTV & Smart locks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
