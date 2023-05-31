import React, { useState } from "react";
import Select from "react-select";

const location = [
  { value: "kanpur", label: "Kanpur" },
];

const service = [
  { value: "0", label: "AC Repair and Service" },
  { value: "1", label: "Washing Machine Repair and Service" },
  { value: "3", label: "Refrigerator Repair and Service" },
  { value: "4", label: "Water Purifier Repair and Service" },
  { value: "5", label: "Geyser Repair and Service" },
  { value: "6", label: "LED TV Repair" },
];

function Query() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <form className="flex flex-col p-3 md:p-12 gap-4">
      <h1 className="text-xl font-semibold">Call Back Query !!</h1>
      <div className="bg-[#f0f0f0] p-3 md:p-12 ">
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-8 mb-5">
          <Select
            defaultValue={selectedLocation}
            onChange={setSelectedLocation}
            options={location}
            placeholder="Select Location"
            className="max-w-64"
            required
          />
          <Select
            defaultValue={selectedService}
            onChange={setSelectedService}
            options={service}
            placeholder="Select Service"
            className="max-w-64"
            required
          />
          <div>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Name."
              required
            />
          </div>
          <div>
            <input
              type="number"
              id="phone"
              maxLength="10"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Phone Numer."
              onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
              pattern="[7-9]{1}[0-9]{9}"
              title="Please enter valid phone number"
              required={true}
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Query;
