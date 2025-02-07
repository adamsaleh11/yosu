"use client";
import "./styles/home.scss";
import { Navbar } from "@/components/navbar";
import { Locations } from "@/components/locations";
import Image from "next/image";
import { Programs } from "@/components/programs";
import { Footer } from "@/components/footer";
import { useRef } from "react";

export default function Home() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="home bg-white dark:bg-[#333333] min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Logo Section */}
      <div className="relative h-[400px] sm:h-[600px] lg:h-[731px] bg-transparent">
        {/* Carousel Wrapper */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
          >
            &#8249;
          </button>

          {/* Carousel Content */}
          <div
            ref={carouselRef}
            className="flex w-full h-full overflow-x-scroll scroll-smooth snap-x snap-mandatory"
          >
            {[
              "/homePageTitleImage.png",
              "/youthBasketball.png",
              "/youthTennis.jpeg",
            ].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-full bg-cover bg-center snap-center"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: index === 1 ? "center -50px" : "center",
                }}
              ></div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
          >
            &#8250;
          </button>
        </div>

        {/* Subtitles and Button */}
        <div className="absolute right-[4.5rem] top-[6.5rem] sm:right-[3.5rem] sm:top-[11.5rem] text-white p-4 sm:p-8">
          <div className="font-bold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] mb-4">
            Your First Subtitle
          </div>
          <div className="font-bold text-[24px] sm:text-[40px] leading-[30px] sm:leading-[50px] mb-6 max-w-[320px] sm:max-w-[570px]">
            Your Second Subtitle – The main message goes here, describing
            something important.
          </div>
          <button className="px-4 sm:px-6 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-black transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        {/* About Us Section */}
        <section
          id="about"
          className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16"
        >
          <div className="text-left lg:w-1/2">
            <h2 className="font-bold text-[20px] sm:text-[24px] lg:text-[36px] leading-[28px] sm:leading-[30px] lg:leading-[50px] text-black mb-6">
              About Us
            </h2>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[22px] lg:leading-[24px] text-black">
              YOSU is a dedicated community of former athletes, sports coaches,
              and enthusiasts from various disciplines, including soccer,
              basketball, tennis, and volleyball. As Ottawa's first sports
              organization to offer a multi-sport approach, we provide young
              athletes the opportunity to explore both individual and team
              sports. Our goal is to foster well-rounded development by exposing
              children to different sports at an early stage, promoting
              broad-based athletic growth rather than early specialization.
            </p>
          </div>
          <div className="lg:w-1/2 lg:ml-8 mt-10 lg:mt-14">
            <Image
              src="/aboutGroup.png"
              alt="About Image"
              width={812}
              height={480}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </section>
      </div>

      {/* Programs Section */}
      <div className="bg-[#F5F5F5] w-full py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <section id="programs" className="mb-8 sm:mb-16">
            <Programs redirectUrl="/programs" />
          </section>
        </div>
      </div>

      {/* Locations Section */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <section id="locations" className="mb-8 sm:mb-16">
          <Locations />
        </section>
      </div>

      {/* Image Section */}
      <div>
        <section id="images" className="w-full mb-8 sm:mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-full h-[150px] sm:h-[200px]">
                <Image
                  src={`/yosuHome${index + 1}.png`}
                  alt={`Image ${index + 1}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
