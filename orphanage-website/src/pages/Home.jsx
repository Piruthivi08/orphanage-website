// File: src/data/testimonials.js
export const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi, India",
    message:
      "Adopting from Malalai Illam was the best decision of our lives. Our daughter brings us so much joy!",
    image: c1,
  },
  {
    name: "Rahul & Sneha",
    location: "Mumbai, India",
    message:
      "We were guided with love and support throughout the adoption journey. Truly grateful!",
    image: c2,
  },
];

// File: src/data/adoptions.js
export const adoptionCases = [
  {
    childName: "Anjali",
    age: 5,
    story:
      "Anjali found her forever home with a loving family in Bangalore. She loves painting and dancing!",
    image: fam1,
  },
  {
    childName: "Arun",
    age: 3,
    story:
      "Arun was adopted by a kind couple from Hyderabad. He’s now attending pre-school happily!",
    image: fam3,
  },
];

// File: src/pages/Home.jsx
import React, { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import fam1 from "../assets/fam1.jpg";
import fam2 from "../assets/fam2.jpg";
import fam3 from "../assets/fam3.jpg";
import c1 from "../assets/585.jpg";
import c2 from "../assets/9751050.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

   const scrollToFounder = () => {
    const section = document.getElementById("mission");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-pink-50 text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white px-4 text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
        <h1
          className="text-5xl font-bold text-pink-700 mb-4"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Welcome to Baby Hope 💖
        </h1>
        <p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A loving home for every child. Support, adopt, volunteer, or donate
          and help us change lives.
        </p>
        <button
          onClick={scrollToFounder}
          className="absolute bottom-8 animate-bounce text-pink-400 z-10"
        >
          <FaArrowDown size={28} />
        </button>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24" id="mission">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="200">
            <img
              src={fam2}
              alt="mission"
              className="rounded-3xl shadow-lg w-full"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-4xl font-bold text-pink-600 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
              We are committed to providing a safe, nurturing, and inspiring
              environment for every child. Our goal is to ensure that every
              orphaned child finds not just a shelter, but a real family and a
              hopeful future.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <h2
          className="text-4xl font-bold text-center text-pink-600 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          What Families Say ❤️
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-pink-100 rounded-2xl p-6 shadow-md"
              data-aos="fade-up"
              data-aos-delay={`${i * 100}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-pink-700">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{t.message}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Adoption Stories Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-pink-50">
        <h2
          className="text-4xl font-bold text-center text-pink-700 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Successful Adoption Stories 🏡
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {adoptionCases.map((child, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6"
              data-aos="zoom-in-up"
              data-aos-delay={`${i * 100}`}
            >
              <img
                src={child.image}
                alt={child.childName}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-pink-600">
                {child.childName}, {child.age} years
              </h3>
              <p className="text-gray-600 mt-2">{child.story}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="text-center bg-pink-600 text-white py-16 px-4"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          You can change a child's life 💫
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Join our mission to provide love, care, and opportunities to children
          in need. Every action counts.
        </p>
        <button className="bg-white text-pink-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-pink-100 transition">
          Support Us Now
        </button>
      </section>
    </div>
  );
};

export default Home;
