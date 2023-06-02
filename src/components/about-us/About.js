import React from "react";

function About() {
  return (
    <div className=" w-full grid md:grid-cols-2 justify-between p-2 xl:p-8 my-8">
      <div className="p-8">
        <img
          src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
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
