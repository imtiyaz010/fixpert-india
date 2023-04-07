import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";

function Links() {
  const links = [
    {
      id: 1,
      tag: "MdEmail",
      title: "Email Here",
      snap: "support@fixpert.india.com",
    },
    {
      id: 2,
      tag: "BsWhatsapp",
      title: "Chat Support",
    },
    {
      id: 3,
      tag: "FaPhone",
      title: "Call Here",
      snap: "91-7860303304",
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center items-center bg-slate-200 gap-8 p-4 py-16">
      {links.map((link) => {
        return (
          <Card
            title={link.title}
            snap={link.snap}
            tag={link.tag}
            key={link.id}
          />
        );
      })}
    </div>
  );
}

const Card = ({ tag, title, snap }) => {
  const [active, setActive] = useState(false);
  const onEnterHandler = () => {
    setActive(true);
  };
  const onLeaveHandler = () => {
    setActive(false);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center shadow-md hover:shadow-lg hover:shadow-black bg-white sm:w-80 w-full cursor-pointer hover:-translate-y-4 duration-300`}
      onMouseEnter={onEnterHandler}
      onMouseLeave={onLeaveHandler}
    >
      <div className="w-full h-24 flex justify-center items-center">
        {tag === "MdEmail" ? (
          <MdEmail
            className={`w-16 h-16 p-4 mt-6 border rounded-full
          ${active ? "text-white bg-blue-500" : "text-blue-500 bg-blue-200"}
          `}
          />
        ) : tag === "BsWhatsapp" ? (
          <BsWhatsapp
            className={`w-16 h-16 p-4 mt-6 border rounded-full
          ${active ? "text-white bg-blue-500" : "text-blue-500 bg-blue-200"}
          `}
          />
        ) : (
          <FaPhone
            className={`w-16 h-16 p-4 mt-6 border rounded-full
          ${active ? "text-white bg-blue-500" : "text-blue-500 bg-blue-200"}
          `}
          />
        )}
      </div>
      <div className="w-full h-24 flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        {snap && <span className="text-sm ">{snap}</span>}
      </div>
    </div>
  );
};

export default Links;
