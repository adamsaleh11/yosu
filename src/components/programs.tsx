"use client";
import React from "react";

export const Programs = ({ redirectUrl }) => {
  const programData = [
    {
      category: "Soccer",
      title: "U17 Program",
      subtitle: "Ages 17-18",
      description:
        "Learn advanced soccer techniques and teamwork in our U17 program.",
      offerings: ["Program Offering", "Program Offering", "-", "-"],
    },
    {
      category: "Basketball",
      title: "Youth Hoops",
      subtitle: "Ages 12-15",
      description:
        "Develop your basketball skills and enjoy friendly competitions.",
      offerings: ["Program Offering", "Program Offering", "-", "-"],
    },
    {
      category: "Tennis",
      title: "Junior Tennis",
      subtitle: "Ages 10-14",
      description: "Learn the fundamentals of tennis in a fun environment.",
      offerings: ["Program Offering", "Program Offering", "-", "-"],
    },
    {
      category: "Volleyball",
      title: "Spike Academy",
      subtitle: "Ages 13-16",
      description:
        "Master volleyball skills and participate in exciting tournaments.",
      offerings: ["Program Offering", "Program Offering", "-", "-"],
    },
  ];

  return (
    <div className="programs-section bg-[#F5F5F5] w-full py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Programs</h1>
        <p className="text-gray-600 mb-8 px-4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-12 px-4">
          {programData.map((program, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
              style={{
                width: "300px",
                height: "550px",
                margin: "0 auto",
              }}
            >
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-2">
                  {program.category}
                </p>
                <h2 className="text-2xl font-bold mb-1">{program.title}</h2>
                <p className="text-gray-400 text-base mb-4">
                  {program.subtitle}
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  {program.description}
                </p>
              </div>
              <hr />
              <div className="text-center mb-6">
                <ul className="list-none space-y-1 text-blue-500 text-sm">
                  {program.offerings.map((offering, idx) => (
                    <li key={idx}>{offering}</li>
                  ))}
                </ul>
              </div>
              <hr />
              <a
                href={redirectUrl}
                className="block bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Join Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
