"use client";
import React, { useState, useEffect } from "react";
import { programs } from "../data/programData";
import { Users, ChevronDown } from "lucide-react"; // Importing Users and ChevronDown icons
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown";
import { Button } from "./button"; // Assuming you're using Shadcn's Button component

export const Programs = ({ redirectUrl }) => {
  const clubs = [...new Set(programs.map((club) => club.club))]; // Unique club names
  const [selectedClub, setSelectedClub] = useState<string | null>(null);

  // Automatically set the first club on load
  useEffect(() => {
    if (clubs.length > 0 && selectedClub === null) {
      setSelectedClub(clubs[0]);
    }
  }, [clubs, selectedClub]);

  // Find the selected club's programs
  const selectedClubPrograms =
    programs.find((club) => club.club === selectedClub)?.programs || [];

  return (
    <div className="programs-section bg-[#F5F5F5] w-full py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Soccer Programs</h1>
        <p className="text-gray-600 mb-8 px-4">
          Discover our youth soccer programs available in different locations
          across Ontario.
        </p>

        {/* Dropdown Menu for Club Selection - Aligned with First Program Card */}
        <div className="flex justify-start mb-8 pl-4">
          {" "}
          {/* Align to first program card */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-xl font-bold px-6 py-3"
              >
                <Users className="w-6 h-6" /> {/* Users icon */}
                {selectedClub || "Loading..."}
                <ChevronDown className="w-5 h-5 ml-2" /> {/* Dropdown Arrow */}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Select a Club</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {clubs.map((club, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setSelectedClub(() => club)}
                >
                  {club}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Display Programs for Selected Club */}
        {selectedClub && (
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-6 pl-4">
              {selectedClubPrograms.map((program, pIndex) => (
                <div
                  key={pIndex}
                  className="p-6 rounded-lg shadow-md flex flex-col justify-between"
                  style={{
                    width: "300px",
                    height: "600px", // Set fixed height
                    flex: "0 0 auto",
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    backgroundColor: "#f8f8f8", // Set background color
                  }}
                >
                  {/* Program Category & Title */}
                  <div className="text-center">
                    <p className="text-gray-500 text-sm font-medium mb-2 uppercase">
                      Soccer
                    </p>
                    <h3 className="text-2xl font-bold mb-1">
                      {program.ageGroup}
                    </h3>
                    <p className="text-gray-400 text-base mb-4">
                      {program.season}
                    </p>
                  </div>

                  <hr className="border-t-2 border-[#bce0fd] my-4" />

                  {/* Program Details */}
                  <div className="text-left px-2">
                    <ul className="list-none space-y-2 text-[#3fa9f5] text-sm">
                      <li>{program.fee}</li>
                      <li>{program.locations.join(", ")}</li>
                      {program.details.map((detail, index) => (
                        <li key={index} className="break-words">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="border-t-2 border-[#bce0fd] my-4" />

                  <a
                    href={redirectUrl}
                    className="block bg-[#3FA9F5] text-white text-center py-2 rounded hover:bg-[#349cd7] transition duration-300"
                  >
                    Join Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
