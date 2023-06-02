import React from "react";

function Banner() {
  return (
    <div className="w-full relative h-[50vh] lg:h-screen">
      <img
        src="https://images.unsplash.com/photo-1566917064245-1c6bff30dbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        alt="img"
        className="absolute top-0 left-0 w-full h-[50vh] lg:h-screen"
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col">
        <div className="px-4 my-8">
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold text-black text-center">
            Doorstep AC Repair and Servicing
          </h1>
        </div>
        <div className="flex flex-wrap px-4 mb-4">
          <p className="text-xl md:text-2xl lg:text-3xl text-black text-center ">
            Budget-friendly and prompt air conditioner services by Carlcare with
            30 days of service warranty
          </p>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-xl px-5 py-2.5 text-center my-8"
        >
          Call Now 78603 03304
        </button>
      </div>
    </div>
  );
}

export default Banner;
