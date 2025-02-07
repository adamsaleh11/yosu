import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="about-page bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div
        className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/about1.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">About</h1>
            <p className="text-sm sm:text-lg">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        {/* Section 1 */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Excepteur sint occaecat cupidatat.
          </h2>
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="lg:w-1/2 text-sm sm:text-base leading-relaxed text-gray-700">
              <p className="mb-4">
                Culpa qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p className="mb-4">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/about2.png"
                alt="About Us Image 2"
                width={800}
                height={450}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16">
          {/* Subtitle and Paragraph */}
          <div className="flex flex-col lg:flex-row items-start gap-8 mb-8">
            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui
              </h2>
            </div>
            <div className="lg:w-1/2 text-sm sm:text-base leading-relaxed text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image
              src="/about3.png"
              alt="About Us Image 3"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-[250px]"
            />
            <Image
              src="/about4.png"
              alt="About Us Image 4"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-[250px]"
            />
            <Image
              src="/about5.png"
              alt="About Us Image 5"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-[250px]"
            />
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
