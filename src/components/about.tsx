import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-white">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="YOSU.svg"
            alt="About Us"
            width={200}
            height={150}
            className="w-[200px] h-[150px] object-cover rounded-lg mb-4 md:mb-0"
          />
          <p className="md:ml-8 text-lg text-white md:text-gray-200">
            Description about your company or service goes here. This is a
            placeholder text.
          </p>
        </div>
      </div>
    </div>
  );
};
