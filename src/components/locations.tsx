"use client";
import React from "react";

const locations = [
  {
    name: "Ottawa Soccer Field",
    city: "Ottawa, ON",
    description:
      "A premier soccer field located in the heart of Ottawa, offering excellent facilities.",
    link: "https://www.google.com/maps?q=Ottawa+Soccer+Field",
  },
  {
    name: "Toronto Sports Arena",
    city: "Toronto, ON",
    description:
      "One of the largest sports arenas in Toronto, perfect for multi-sport activities.",
    link: "https://www.google.com/maps?q=Toronto+Sports+Arena",
  },
  {
    name: "Vancouver Athletic Park",
    city: "Vancouver, BC",
    description:
      "A stunning athletic park in Vancouver, surrounded by breathtaking views.",
    link: "https://www.google.com/maps?q=Vancouver+Athletic+Park",
  },
];

export const Locations = () => {
  return (
    <div className="locations-section w-full py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-black">Locations</h1>
        <p className="text-gray-600 mb-8">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt.
        </p>

        {/* Responsive Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded shadow-md transition hover:shadow-lg"
            >
              {/* Location Header */}
              <div className="flex items-center mb-4 space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c0 2.76 2.239 5 5 5m2-5c0-2.761-2.24-5-5-5m-7 2c1.657 0 3 1.343 3 3M6 6h.01M6 8a2 2 0 012 2M6 2a10 10 0 1010 10c0-.2-.01-.396-.03-.59M15.734 5.234A3.482 3.482 0 0115 6a3 3 0 01-3 3c-2.01 0-4.007-1.6-4.21-3.58M9 9l-3 3M6 6v-.01"
                  />
                </svg>
                <h2 className="text-xl font-bold text-black">
                  {location.name}
                </h2>
              </div>
              <p className="text-gray-500 text-sm">{location.city}</p>
              <p className="text-gray-600 text-sm mt-2 mb-6 text-center">
                {location.description}
              </p>

              {/* View in Google Maps Button */}
              <a
                href={location.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                View in Google Maps
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
