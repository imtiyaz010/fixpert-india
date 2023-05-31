import React, { useState } from "react";
import { IoPricetagsSharp } from "react-icons/io5";

const Resion = () => {
  const resons = [
    {
      label: "Transparent Prices",
      subject: "We offer transparent pricing for repair and service. So you can rest assured to be charged fairly"
    },
    {
      label: "Onsite Service",
      subject: "Our professionals, technicians visit customers' homes to carry out repairs, installations, or maintenance tasks."
    },
    {
      label: "30 Day(s) Service Warranty",
      subject: "We provide 30 Day(s) warranty based on nature of service to ensure customer satisfactio"
    },
  ]
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="md:text-3xl text-xl font-bold">
        Why Choose FIXPERT-INDIA Services?
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:p-8 md:m-8 p-2 m-2 mb-8">
        {
          resons.map((prop, index) => {
            return (
              <Card prop={prop} index={index} />
            )
          })
        }
      </div>
    </div>
  );
}

const Card = ({ prop }) => {
  const [active, setActive] = useState(false);
  const onEnterHandler = () => {
    setActive(true);
  };
  const onLeaveHandler = () => {
    setActive(false);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center w-72 border-gray-400 border p-12 gap-8 rounded-md ${active ? "shadow-2xl" : "shadow-md"
        }`}
      onMouseEnter={onEnterHandler}
      onMouseLeave={onLeaveHandler}
    >
      <IoPricetagsSharp
        className={`border-4 border-blue-600  rounded-full h-16 w-16 p-3 ${active
          ? "bg-blue-600 text-white shadow-lg"
          : "bg-white text-blue-600 shadow-md"
          } `}
      />
      <div className="flex flex-col gap-3">
        <h2 className="font-bold">{prop.label}</h2>
        <p>
          {prop.subject}
        </p>
      </div>
    </div>
  );
};

export default Resion;
