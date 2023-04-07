import React from "react";

function Services() {
  const cardData = [
    {
      name: "Home Deep Cleaning",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYig3tye7g2ilLhJ-QNHKAd0_idow9qVsMOQ&usqp=CAU",
      link: "",
      id: 1,
    },
    {
      name: "Office Cleaning",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMEHPD52J0GSzui-DnhatPGFMqaR0rsIGBA&usqp=CAU",
      link: "",
      id: 2,
    },
    {
      name: "Kitchen Cleaning",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpem0krwj7uniVu8OtzlqStgZekhuZ1a50Qg&usqp=CAU",
      link: "",
      id: 3,
    },
    {
      name: "Bathroom Cleaning",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaK77PYz1nQwPrz8SOfhSRM2sWh5_Pyn7ImQ&usqp=CAU",
      link: "",
      id: 4,
    },
    {
      name: "Sofa Cleaning",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wtFbhKkpMpPHyxYL_YDgni716oHJ-fnxXw&usqp=CAU",
      link: "",
      id: 5,
    },
    {
      name: "Glass Cleaning",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj6ZVg1573v5-fl2bzkbfVAXrV9NUZ9wQHJw&usqp=CAU",
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
