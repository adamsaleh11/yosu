import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Programs } from "@/components/programs"; // Import the Programs component

export default function ProgramsPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <div
        className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/programs.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Programs</h1>
            <p className="text-sm sm:text-lg">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-[#F5F5F5]">
        {" "}
        {/* Grey background */}
        <div className="container mx-auto py-8 sm:py-16 px-4">
          <Programs redirectUrl="/contact" />{" "}
        </div>
      </main>

      <Footer />
    </div>
  );
}
