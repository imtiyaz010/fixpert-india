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
          Fixpert India was established in year 2020 with a promise to
          provide customers with a clean and safe environment in personal and
          commercial spaces. In our organization, we are equipped with advanced
          technology and all the right tools, equipment that helps us provide
          satisfactory results to the customers. We serve as your reliable
          partner for Professional Home and Commercial AC Repair & Service,
          Washing Machine Repair and Service, Refrigerator Repair and Service, Water Purifier Repair and Service
          Geyser Repair and Service, and LED TV Repair.
        </p>
      </div>
    </div>
  );
}

export default About;
