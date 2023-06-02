import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function Header() {
  const links = [
    { name: "AC Repair", link: "/", id: 1 },
    { name: "Washing Machine Repair", link: "/", id: 2 },
    { name: "Refrigerator Repair", link: "/", id: 3 },
    { name: "Water Purifier Repair", link: "/", id: 4 },
    { name: "Geyser Repair", link: "/", id: 5 },
    { name: "LED TV Repair", link: "/", id: 6 },
  ];

  const [isToggle, setIsToggle] = useState(false);
  const [width, setWidth] = useState(getWidth());

  const toggleHandler = () => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());

      if (width >= 767) {
        setIsToggle(false);
      }
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, [width]);

  return (
    <nav className="text-gray-600 body-font bg-white sticky top-0 z-50 shadow-md">
      <div className="flex flex-wrap p-2 flex-col md:flex-row items-center justify-between w-full">
        <div className="flex flex-wrap items-center justify-between w-full md:w-auto">
          <Link
            className="flex title-font font-medium items-center justify-center text-gray-900 mb-0 h-full"
            to="/"
          >
            <img
              src="images/fixpertIndiaLogo.jpg"
              className="w-44 h-16"
              alt="icon"
            />
          </Link>
          <FaBars
            className="md:hidden h-8 w-8 cursor-pointer"
            onClick={toggleHandler}
          />
        </div>
        <div
          className={` ${
            !isToggle && "hidden"
          } w-full md:block md:w-auto md:order-1`}
        >
          <ul
            className={`flex flex-wrap flex-col md:flex-row text-base gap-6 font-semibold ml-6`}
          >
            <li className="mr-5 hover:text-gray-900 cursor-pointer">
              <Link to="/">HOME</Link>
            </li>
            <li className="mr-5 hover:text-gray-900 cursor-pointer">
              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li className="mr-5 hover:text-gray-900 cursor-pointer">
              <Dropdown links={links} />
            </li>
            <li className="mr-5 hover:text-gray-900 cursor-pointer">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
const Dropdown = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
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
        className={`absolute top-14 left-[-28px] flex flex-col py-2 pr-4 bg-white shadow-lg shadow-black w-60 gap-3 ${
          isOpen
            ? "opacity-100 transition-opacity ease-in-out delay-150 pointer-events-auto"
            : "transition-opacity ease-in-out opacity-0 delay-150 pointer-events-none"
        }`}
      >
        {links.map((link) => {
          return (
            <a
              className="m-1 mx-2 pb-2 font-semibold whitespace-nowrap border-b-[1px] hover:text-blue-500 last:border-none last:pb-0"
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
