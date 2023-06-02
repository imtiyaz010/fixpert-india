import React from "react";

function Services() {
  const cardData = [
    {
      name: "AC Repair and Service",
      img: "https://images.unsplash.com/photo-1568634697393-0165d25e7acb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFpciUyMGNvbmRpdGlvbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      link: "",
      id: 1,
    },
    {
      name: "Washing Machine Repair and Service",
      img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      link: "",
      id: 2,
    },
    {
      name: "Refrigerator Repair and Service",
      img: "https://plus.unsplash.com/premium_photo-1661949405680-0c58586dfc2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJlZnJpZ2VyYXRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      link: "",
      id: 3,
    },
    {
      name: "Water Purifier Repair and Service",
      img: "https://images.unsplash.com/photo-1629969337555-e384ed2d1439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0ZXIlMjBwdXJpZmllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      link: "",
      id: 4,
    },
    {
      name: "Geyser Repair and Service",
      img: "https://cdn.pixabay.com/photo/2017/08/23/10/22/tubing-2672187_1280.jpg",
      link: "",
      id: 5,
    },
    {
      name: "LED TV Repair",
      img: "https://plus.unsplash.com/premium_photo-1664300273542-25faf1e19fbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TEVEJTIwdHZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      link: "",
      id: 6,
    },
  ];
  return (
    <div className="flex flex-col gap-12 justify-center items-center pb-8">
      <div className="grid place-items-center mt-12">
        <h2 className="text-xl font-bold">POPULAR CLEANING SERVICES</h2>
      </div>
      <div className="w-3/4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-8">
          {cardData.map((card) => {
            return (
              <div key={card.id}>
                <Card name={card.name} img={card.img} link={card.link} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Card = ({ name, img, link }) => {
  return (
    <div>
      <a href={link}>
        <img
          src={img}
          className="w-72 h-40 rounded-md  transition-shadow duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-black/30 m-4"
          alt="img"
        />
        <p className="text-center font-semibold">{name}</p>
      </a>
    </div>
  );
};

export default Services;
