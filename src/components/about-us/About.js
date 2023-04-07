import React from "react";

function About() {
  return (
    <div className=" w-full grid md:grid-cols-2 justify-between p-2 xl:p-8 my-8">
      <div className="p-8">
        <img
          src="https://www.build-review.com/wp-content/uploads/2021/04/Home-repair-1.jpg"
          alt="banner"
          className="min-h-72"
        />
      </div>
      <div className="md:col-span-1 p-4">
        <h2 className="text-xl font-bold">About Us</h2>
        <p className="xl:w-[75%]">
          Nakoda Urban Services was established in year 2020 with a promise to
          provide customers with a clean and safe environment in personal and
          commercial spaces. In our organization, we are equipped with advanced
          technology and all the right tools, equipment that helps us provide
          satisfactory results to the customers. We serve as your reliable
          partner for Professional Home and Commercial Deep Cleaning services,
          Paint services, Sanitization services, AC Services & Repair,
          Carpenters, Plumbing, Electricians and Pest Control Services. We also
          provide Packers & Movers if you plan to shift to a new place and you
          can avail all other services at new place. We specialise in making
          your windows shine with window cleaning services, sparkling up the
          corners of your home, up-keep the condition of your mattresses,
          carpets. We also offer kitchen cleaning services, chair cleaning, and
          sofa dry cleaning services, providing professional sanitization
          services. Now, revamp the overall look of your home with the help of a
          skilled house painting expert and carpenter in India by booking from
          us.
        </p>
      </div>
    </div>
  );
}

export default About;
