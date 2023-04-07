import React from "react";

function PageBanner({ title, bg }) {
  console.log(bg);
  return (
    <div className="w-full relative h-[14vh] md:h-[20vh]">
      <img
        src={bg}
        alt="img"
        className="absolute top-0 left-0 w-full h-[14vh] md:h-[20vh]"
      />
      {/* <div className="w-full md:h-screen h-1/2 bg-[url('https://public.carlcare.com/public/1eba802c8207e841aae650084902f511.png')] bg-contain bg-no-repeat flex justify-center items-center flex-col"> */}
      <div className="absolute text-white text-2xl font-bold w-full h-full">
        <div className="w-full h-full relative bg-opacity-25 bg-slate-800">
          <h2 className="absolute top-8 md:top-16 left-6 md:left-24">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
