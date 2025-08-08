// src/pages/About.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { FaHeart, FaHandHoldingHeart } from "react-icons/fa";
import kid1 from "../assets/kid1.jpg";
import pep1 from "../assets/pep1.jpg";
import pep2 from "../assets/pep2.jpg";
import pep3 from "../assets/pep3.jpg";
import pep4 from "../assets/pep4.jpg";

export default function About() {
  const scrollToFounder = () => {
    const section = document.getElementById("founder");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const milestones = [
    {
      year: "2010",
      text: "Founded with 5 children and a dream of creating a loving home.",
    },
    {
      year: "2015",
      text: "Expanded facilities with classrooms, library, and playground.",
    },
    {
      year: "2020",
      text: "Introduced healthcare, counseling, and extracurricular activities.",
    },
    {
      year: "2024",
      text: "Launched adoption and sponsorship initiatives worldwide.",
    },
  ];

  const staffMembers = [
    {
      name: "Jhon Doe",
      role: "Founder",
      img: pep1,
      fact: "Makes the best pancakes 🍯",
    },
    {
      name: "Mark Hendry",
      role: "Teacher",
      img: pep2,
      fact: "Knows magic tricks 🎩",
    },
    {
      name: "Sara Ahmed",
      role: "Volunteer",
      img: pep3,
      fact: "Speaks 4 languages 🌍",
    },
    {
      name: "David Kim",
      role: "Caregiver",
      img: pep4,
      fact: "Can play guitar 🎸",
    },
  ];

  const stats = [
    { label: "Children Cared For", value: 120 },
    { label: "Adoptions Completed", value: 45 },
    { label: "Meals Served", value: 25000 },
    { label: "Volunteers Engaged", value: 300 },
  ];

  function Counter({ target }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = target;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, [target]);

    return count.toLocaleString();
  }

  return (
    <>
      {/* --- Phase 1: Hero Section --- */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white px-4 text-center">
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>

        {/* Hero Text */}
        <div className="max-w-2xl z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-pink-700 leading-tight">
            Every Child’s Story Matters
          </h1>
          <p className="text-gray-600 mt-4 text-sm sm:text-lg">
            Baby Hope Orphanage is a loving home where children find family,
            care, and the chance to dream big.
          </p>
        </div>

        {/* Scroll Arrow */}
        <button
          onClick={scrollToFounder}
          className="absolute bottom-8 animate-bounce text-pink-400 z-10"
        >
          <FaArrowDown size={28} />
        </button>
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 500 50"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path
            d="M0,0 C150,50 350,0 500,50 L500,0 L0,0 Z"
            fill="#fdf2f8"
          ></path>
        </svg>
      </div>

      {/* --- Phase 2: Founders’ Story --- */}
      <section
        id="founder"
        className="bg-gradient-to-b from-white to-pink-50 py-16 px-4"
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-10">
          {/* Founder Image */}
          <motion.div
            className="sm:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={kid1}
              alt="Founder"
              className="rounded-2xl shadow-lg border-4 border-pink-100 object-cover w-72 h-72 sm:w-[350px] sm:h-[350px]"
            />
          </motion.div>

          {/* Story Text */}
          <motion.div
            className="sm:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 mb-4">
              How Baby Hope Began
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
              In 2010, Jane Doe welcomed five children into her home, driven by
              a dream to give them love, education, and the freedom to dream.
              What started as a small act of kindness soon blossomed into a
              haven for dozens of children in need.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
              Over the years, Baby Hope Orphanage expanded its facilities to
              include classrooms, a library, a playground, and healthcare
              partnerships — creating an environment where children could grow
              in safety and happiness.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Today, Baby Hope is more than a shelter — it is a family, a place
              where every child feels valued, heard, and loved.
            </p>
          </motion.div>
        </div>
      </section>
      {/* --- Phase 3: Mission, Vision, Core Values --- */}
      <section className="bg-pink-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-700">
            What We Stand For
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Baby Hope Orphanage is built on love, trust, and the belief that
            every child deserves a safe, joyful, and nurturing place to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-pink-400"
          >
            <div className="flex justify-center mb-4 text-pink-500 text-4xl">
              <i className="fas fa-heart"></i>
            </div>
            <h3 className="text-lg font-semibold text-pink-600 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              To provide a loving and secure home where children can grow with
              dignity, access to education, and hope for a brighter future.
            </p>
            <ul className="text-gray-500 text-sm list-disc pl-5 space-y-1 text-left">
              <li>Safe and nurturing environment</li>
              <li>Quality education for every child</li>
              <li>Access to healthcare and emotional support</li>
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-yellow-400"
          >
            <div className="flex justify-center mb-4 text-yellow-500 text-4xl">
              <i className="fas fa-sun"></i>
            </div>
            <h3 className="text-lg font-semibold text-yellow-600 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              A world where no child is left alone — where every boy and girl is
              loved, educated, and empowered to create their own story.
            </p>
            <ul className="text-gray-500 text-sm list-disc pl-5 space-y-1 text-left">
              <li>Universal access to love & care</li>
              <li>Opportunities to explore talents</li>
              <li>Strong community integration</li>
            </ul>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-green-400"
          >
            <div className="flex justify-center mb-4 text-green-500 text-4xl">
              <i className="fas fa-hand-holding-heart"></i>
            </div>
            <h3 className="text-lg font-semibold text-green-600 mb-3">
              Core Values
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Love, respect, kindness, and community — the pillars that guide
              our care and every decision we make for our children.
            </p>
            <ul className="text-gray-500 text-sm list-disc pl-5 space-y-1 text-left">
              <li>Respect for individuality</li>
              <li>Commitment to kindness</li>
              <li>Building strong bonds of trust</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* phase 4 */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-700 mb-12">
          Our Journey
        </h2>

        {/* Desktop Zig-Zag with Curves */}
        <div className="hidden sm:block relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-pink-200"></div>

          {milestones.map((item, index) => (
            <motion.div
              key={index}
              className={`relative mb-24 flex items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Card */}
              <div
                className={`w-5/12 relative ${
                  index % 2 === 0 ? "pl-12" : "pr-12"
                }`}
              >
                <div className="bg-white border border-pink-100 shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                  <p className="text-pink-600 font-bold text-lg">{item.year}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* Curved Connector */}
                <svg
                  className={`absolute top-1/2 transform -translate-y-1/2 ${
                    index % 2 === 0 ? "right-full" : "left-full rotate-y-180"
                  }`}
                  width="80"
                  height="40"
                  viewBox="0 0 80 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20 C40 0, 40 40, 80 20"
                    stroke="#F9A8D4"
                    strokeWidth="3"
                    fill="transparent"
                  />
                </svg>
              </div>

              {/* Circle */}
              <div className="relative flex flex-col items-center z-10">
                <div className="absolute w-16 h-16 bg-pink-100 rounded-full -z-10"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-pink-400 text-white font-bold rounded-full shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Empty Side */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Stack */}
        <div className="block sm:hidden space-y-8">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-pink-200 shadow-md rounded-xl p-5 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-3 left-4 w-8 h-8 bg-pink-400 text-white font-bold rounded-full flex items-center justify-center shadow-md">
                {index + 1}
              </div>
              <p className="text-pink-600 font-bold mt-2">{item.year}</p>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* phase 5 */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-700">
            Our Loving Family
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Meet the dedicated staff and volunteers who make Baby Hope a warm
            and happy place for every child.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {staffMembers.map((person, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="flex justify-center mt-6">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-pink-200 shadow-md"
                />
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-pink-700">
                  {person.name}
                </h3>
                <p className="text-gray-500 text-sm">{person.role}</p>
              </div>

              {/* Fun Fact Hover Card */}
              <div className="absolute inset-0 bg-pink-500 bg-opacity-90 text-white flex items-center justify-center text-center text-sm px-4 opacity-0 group-hover:opacity-100 transition duration-300">
                {person.fact}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* phase-6 */}
      <section className="bg-pink-50 py-16 px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-700">
            Our Impact
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Every smile, every hug, and every milestone matters — here’s a
            glimpse of what we’ve achieved together.
          </p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-pink-400"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-pink-600">
                <Counter target={stat.value} />
              </p>
              <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* last <section></section> */}
     <section className="bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-pink-700 mb-4"
        >
          You Can Be Their Hero 💖
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-sm sm:text-base mb-8"
        >
          Every contribution helps us provide love, care, and a brighter future
          for our children. Join us in making a difference today.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
            <FaHeart /> Donate Now
          </button>
          <button className="flex items-center justify-center gap-2 border-2 border-pink-500 hover:bg-pink-50 text-pink-600 px-6 py-3 rounded-full font-semibold shadow-lg transition">
            <FaHandHoldingHeart /> Sponsor a Child
          </button>
        </motion.div>

        {/* Small Support Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 text-xs mt-6"
        >
          100% of donations go directly to child care and education.
        </motion.p>
      </div>
    </section>
    </>
  );
}
