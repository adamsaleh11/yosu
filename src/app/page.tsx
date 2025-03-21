"use client";
import Head from "next/head";
import "./styles/home.scss";
import { Navbar } from "@/components/navbar";
import { Locations } from "@/components/locations";
import Image from "next/image";
import { Programs } from "@/components/programs";
import { Footer } from "@/components/footer";
import { useRef } from "react";

// Define props interface for Programs component if it accepts redirectUrl
interface ProgramsProps {
  redirectUrl: string;
}

export default function Home() {
  // Specify the type for the ref as HTMLDivElement
  const carouselRef = useRef<HTMLDivElement>(null);

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
    <>
      {/* ✅ ADDING SEO META TAGS */}
      <Head>
        <title>Youth Ontario Sports Universe | YOSU</title>
        <meta
          name="description"
          content="Join Youth Ontario Sports Universe (YOSU) to participate in basketball, tennis, and more! Register now for the best youth sports programs in Ontario."
        />
        <meta
          name="keywords"
          content="youth sports Ontario, YOSU, Ottawa sports programs, youth basketball, youth tennis, sports leagues for kids"
        />
        <meta name="author" content="Youth Ontario Sports Universe" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) for Facebook & LinkedIn */}
        <meta
          property="og:title"
          content="Youth Ontario Sports Universe | YOSU"
        />
        <meta
          property="og:description"
          content="Join Youth Ontario Sports Universe (YOSU) to participate in basketball, tennis, and more! Register now for the best youth sports programs in Ontario."
        />
        <meta property="og:image" content="/homePageTitleImage.png" />
        <meta property="og:url" content="https://yosu.vercel.app/" />
        <meta property="og:type" content="website" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
              ‹
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
                  className="flex-shrink-0 w-full h-full snap-center relative"
                >
                  <div
                    className="absolute inset-0 bg-cover"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: index === 0 ? "65% center" : "center",
                    }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
            >
              ›
            </button>
          </div>

          {/* Subtitle & Slogan Section */}
          <div className="absolute right-[4.5rem] top-[6.5rem] sm:right-[3.5rem] sm:top-[11.5rem] text-white p-4 sm:p-8">
            {/* First Subtitle */}
            <div className="font-bold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] mb-4 uppercase">
              Youth Ontario Sports Universe
            </div>

            {/* Slogan */}
            <div className="font-bold text-[24px] sm:text-[40px] leading-[30px] sm:leading-[50px] mb-6 max-w-[320px] sm:max-w-[570px] uppercase">
              YOU PLAY GAME WITH THE HEAD AND HEART
            </div>

            {/* Call-to-Action Button */}
            <a
              href="/programs"
              className="px-4 sm:px-6 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-black transition inline-block text-center"
            >
              Sign Up
            </a>
          </div>
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

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
