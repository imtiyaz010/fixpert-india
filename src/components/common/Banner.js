import React from "react";

function Banner() {
  return (
    <div className="w-full relative h-[50vh] lg:h-screen">
      <img
        src="https://public.carlcare.com/public/1eba802c8207e841aae650084902f511.png"
        alt="img"
        className="absolute top-0 left-0 w-full h-[50vh] lg:h-screen"
      />
      {/* <div className="w-full md:h-screen h-1/2 bg-[url('https://public.carlcare.com/public/1eba802c8207e841aae650084902f511.png')] bg-contain bg-no-repeat flex justify-center items-center flex-col"> */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col">
        <div className="px-4 my-8">
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center">
            Doorstep AC Repair and Servicing
          </h1>
        </div>
        <div className="flex flex-wrap px-4 mb-4">
          <p className="text-xl md:text-2xl lg:text-3xl text-white text-center ">
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
