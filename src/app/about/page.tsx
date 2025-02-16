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
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">About Us</h1>
            <p className="text-sm sm:text-lg">
              Empowering young athletes through fun, skill-building, and
              teamwork in our youth sports leagues.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        {/* Section 1 */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Building Confidence and Skills Through Sports
          </h2>
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="lg:w-1/2 text-sm sm:text-base leading-relaxed text-gray-700">
              <p className="mb-4">
                At YOSU, we’re a community group of ex-soccer, basketball,
                tennis, and volleyball players, sports coaches, and sports
                enthusiasts. We’re proud to be the first sports organization in
                Ottawa to offer multiple sports (both individual and team
                sports) for young athletes. Our unique approach gives children
                the opportunity to explore different sports at an early stage of
                their lives, helping them discover their passions and develop a
                well-rounded skill set.
              </p>
              <p className="mb-4">
                We believe in the power of sports to shape young minds and
                bodies. Our leagues are designed to provide a safe, inclusive,
                and fun environment where kids can learn the fundamentals of
                soccer, develop teamwork skills, and build lifelong friendships.
                Whether your child is just starting out or looking to improve
                their skills, our programs cater to all levels. With experienced
                coaches, age-appropriate training, and a focus on sportsmanship,
                we’re here to help your child grow both on and off the field.
              </p>
              <p className="mb-4">
                Our methodology of two days of activities per week (practice and
                game) ensures that kids have fun playing the "beautiful game" of
                soccer while also enjoying other sports or social activities. We
                are not fans of early specialization in sports for children. By
                giving them the opportunity to play different sports up to the
                age of 11/12, we hope they will be able to choose the sports
                they love most and continue to develop their talents to the next
                level.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/about2.png"
                alt="Kids playing soccer"
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
                Why Choose Our Youth Sports League?
              </h2>
            </div>
            <div className="lg:w-1/2 text-sm sm:text-base leading-relaxed text-gray-700">
              <p>
                Our league is more than just soccer—it’s a community. We offer
                programs for kids of all ages, from U4 to U10, with flexible
                schedules and affordable fees. From spring to fall, we provide a
                variety of leagues and events to keep your child active and
                engaged throughout the year.
              </p>
              <p className="mt-4">
                <strong>Our Objectives:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Create an environment that satisfies children's needs—mentally
                  and physically. Sports help not only with physical development
                  but also with life skills and identity formation.
                </li>
                <li>
                  Introduce children to a variety of team sports (soccer,
                  hockey, basketball, volleyball, football, baseball) and
                  individual sports (tennis, gymnastics, track and field) to
                  give them a strong foundation for lifelong activity.
                </li>
                <li>
                  Teach discipline, persistence, and concentration through
                  sports.
                </li>
                <li>Improve physical motor skills and functional abilities.</li>
                <li>Develop social skills, teamwork, and communication.</li>
                <li>
                  Help children become more independent, stronger, and
                  resilient.
                </li>
              </ul>
            </div>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image
              src="/about3.png"
              alt="Kids practicing soccer"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-[250px]"
            />
            <Image
              src="/about4.png"
              alt="Team celebration"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-[250px]"
            />
            <Image
              src="/about5.png"
              alt="Coaches guiding kids"
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
