import React, { useState } from "react";
import { IoPricetagsSharp } from "react-icons/io5";

function Resion() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="md:text-3xl text-xl font-bold">
        Why Choose FIXPERT-INDIA Services?
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:p-8 md:m-8 p-2 m-2 mb-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

const Card = () => {
  const [active, setActive] = useState(false);
  const onEnterHandler = () => {
    setActive(true);
  };
  const onLeaveHandler = () => {
    setActive(false);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center w-72 border-gray-400 border p-12 gap-8 rounded-md ${
        active ? "shadow-2xl" : "shadow-md"
      }`}
      onMouseEnter={onEnterHandler}
      onMouseLeave={onLeaveHandler}
    >
      <IoPricetagsSharp
        className={`border-4 border-blue-600  rounded-full h-16 w-16 p-3 ${
          active
            ? "bg-blue-600 text-white shadow-lg"
            : "bg-white text-blue-600 shadow-md"
        } `}
      />
      <div className="flex flex-col gap-3">
        <h2 className="font-bold">Transparent Prices</h2>
        <p>
          We offer transparent pricing for major AC repair services. So you can
          rest assured to be charged fairly
        </p>
      </div>
    </div>
  );
};

export default Resion;
