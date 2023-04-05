import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  const links = [
    { name: "Full Home Cleaning", link: "/f-h-c", id: 1 },
    { name: "Ac Service Repair", link: "/a-s-r", id: 2 },
    { name: "Cleaning Services", link: "c-s", id: 3 },
  ];

  return (
    <nav className="text-gray-600 body-font bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-between">
        <div className="flex flex-wrap items-center justify-between ">
          <a
            className="flex title-font font-medium items-center justify-center text-gray-900 mb-4 md:mb-0 h-full"
            href="/"
          >
            <img
              src="images/fixpertIndiaLogo.jpg"
              className="w-44 h-16"
              alt="icon"
            />
          </a>
          <FaBars className="md:hidden h-8 w-8 cursor-pointer" />
        </div>
        <div className="md:block hidden">
          <ul className="flex flex-wrap  text-base gap-8 font-semibold">
            <li className="mr-5 hover:text-gray-900 cursor-pointer">HOME </li>
            <li className="mr-5 hover:text-gray-900 cursor-pointer">
              ABOUT US{" "}
            </li>
            <li className="mr-5 hover:text-gray-900 cursor-pointer">
              <Dropdown links={links} />
            </li>
            <li className="mr-5 hover:text-gray-900 cursor-pointer">CONTACT</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
const Dropdown = ({ links }) => {
  const [open, setIsOpen] = useState(false);
  const onLeaveHandler = () => {
    setIsOpen(false);
  };
  const onEnterHandler = () => {
    setIsOpen(true);
  };
  return (
    <div className="relative" onMouseLeave={onLeaveHandler}>
      <button onMouseOver={onEnterHandler}>SERVICES</button>
      <div
        className={`absolute top-6 left-[-18px] flex flex-col px-3 py-2 pr-4 bg-white shadow-2xl ${
          open
            ? "opacity-100 transition-opacity ease-in-out delay-150 pointer-events-auto"
            : "transition-opacity ease-in-out opacity-0 delay-150 pointer-events-none"
        }`}
      >
        {links.map((link) => {
          return (
            <a
              className="m-1 mx-2 pb-2 text-sm font-semibold whitespace-nowrap border-b-[1px] hover:text-blue-500 last:border-none last:pb-0 "
              href={link.link}
              key={link.id}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
