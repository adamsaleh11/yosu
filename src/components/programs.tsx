"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { programs } from "../data/programData";
import { Users, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown";
import { Button } from "./button";

// Define props interface
interface ProgramsProps {
  redirectUrl: string;
}

export const Programs: React.FC<ProgramsProps> = ({ redirectUrl }) => {
  const router = useRouter();
  const clubs = Array.from(new Set(programs.map((club) => club.club)));
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

  const handleJoinNow = (ageGroup: string, club: string, season: string) => {
    // Include season in the URL parameters
    const url = `${redirectUrl}?ageGroup=${encodeURIComponent(
      ageGroup
    )}&club=${encodeURIComponent(club)}&season=${encodeURIComponent(season)}`;
    router.push(url);
  };

  return (
    <div className="programs-section bg-[#F5F5F5] w-full py-8 sm:py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Programs</h1>
        <p className="text-gray-600 mb-6 sm:mb-8 px-4"></p>

        {/* Dropdown Menu for Club Selection */}
        <div className="flex justify-center sm:justify-start mb-6 sm:mb-8 px-4 sm:pl-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-lg sm:text-xl font-bold px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto"
              >
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                {selectedClub || "Loading..."}
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Select a Club</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {clubs.map((club, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setSelectedClub(club)}
                >
                  {club}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Display Programs for Selected Club */}
        {selectedClub && (
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide pb-4">
            <div className="flex space-x-4 sm:space-x-6 px-4">
              {selectedClubPrograms.map((program, pIndex) => (
                <div
                  key={pIndex}
                  className="p-4 sm:p-6 rounded-lg shadow-md flex flex-col justify-between"
                  style={{
                    width: "250px",
                    height: "550px",
                    flex: "0 0 auto",
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  <div className="text-center">
                    <p className="text-gray-500 text-xs sm:text-sm font-medium mb-2 uppercase">
                      Soccer
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">
                      {program.ageGroup}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-4">
                      {program.season}
                    </p>
                  </div>

                  <hr className="border-t-2 border-[#bce0fd] my-3 sm:my-4" />

                  <div className="text-left px-1 sm:px-2">
                    <ul className="list-none space-y-2 text-[#2a80bd] text-xs sm:text-sm font-medium">
                      <li>{program.fee}</li>
                      <li>{program.locations.join(", ")}</li>
                      {program.details.map((detail, index) => (
                        <li key={index} className="break-words">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="border-t-2 border-[#bce0fd] my-3 sm:my-4" />

                  <button
                    onClick={() =>
                      handleJoinNow(
                        program.ageGroup,
                        selectedClub,
                        program.season
                      )
                    }
                    className="block bg-[#3FA9F5] text-white text-center py-2 rounded hover:bg-[#349cd7] transition duration-300 font-medium"
                  >
                    Join Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
