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
    <div className="programs-section bg-[#F5F5F5] w-full py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-black">Programs</h1>{" "}
        {/* Added text-black */}
        <p className="text-gray-600 mb-8 px-4"></p>
        {/* Dropdown Menu for Club Selection */}
        <div className="flex justify-start mb-8 pl-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-xl font-bold px-6 py-3 text-black" //Added text-black
              >
                <Users className="w-6 h-6" />
                {selectedClub || "Loading..."}
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-black">
                Select a Club
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {clubs.map((club, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setSelectedClub(club)}
                  className="text-black" //Added text-black
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
                    height: "600px",
                    flex: "0 0 auto",
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  <div className="text-center">
                    <p className="text-gray-500 text-sm font-medium mb-2 uppercase text-black">
                      Soccer
                    </p>
                    <h3 className="text-2xl font-bold mb-1 text-black">
                      {program.ageGroup}
                    </h3>
                    <p className="text-gray-400 text-base mb-4 text-black">
                      {program.season}
                    </p>
                  </div>

                  <hr className="border-t-2 border-[#bce0fd] my-4" />

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

                  <button
                    onClick={() =>
                      handleJoinNow(
                        program.ageGroup,
                        selectedClub,
                        program.season
                      )
                    }
                    className="block bg-[#3FA9F5] text-white text-center py-2 rounded hover:bg-[#349cd7] transition duration-300"
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
