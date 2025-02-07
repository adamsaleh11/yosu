"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/newYosuLogo.png"
            alt="Youth Ottawa Soccer Universe Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="font-bold text-xl text-black">
            Youth Ontario Sports Universe
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-black font-medium">
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-black font-medium"
          >
            About
          </Link>
          <Link
            href="/programs"
            className="text-gray-700 hover:text-black font-medium"
          >
            Programs
          </Link>
          <Link
            href="/#locations"
            scroll={true}
            className="text-gray-700 hover:text-black font-medium"
          >
            Locations
          </Link>
          <Link
            href="/#programs"
            scroll={true}
            className="text-gray-700 hover:text-black font-medium"
          >
            Fees
          </Link>
          <Link
            href="/#footer"
            scroll={true}
            className="text-gray-700 hover:text-black font-medium"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black font-medium"
            >
              About
            </Link>
            <Link
              href="/programs"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black font-medium"
            >
              Programs
            </Link>
            <Link
              href="/#locations"
              scroll={true}
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black font-medium"
            >
              Locations
            </Link>
            <Link
              href="/#programs"
              scroll={true}
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black font-medium"
            >
              Fees
            </Link>
            <Link
              href="/#footer"
              scroll={true}
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
