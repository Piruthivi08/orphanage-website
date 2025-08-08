import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import babypic1 from "../assets/3d-cartoon-back-school.jpg";

const kidsData = [
  { name: "Aarav", age: 7, hobby: "Drawing", story: "Aarav loves to draw animals and dreams of becoming a wildlife photographer." },
  { name: "Meera", age: 6, hobby: "Singing", story: "Meera sings lullabies to younger kids and hopes to be a music teacher." },
  { name: "Rohan", age: 8, hobby: "Football", story: "Rohan plays football every evening and wants to join the national team." },
  { name: "Isha", age: 5, hobby: "Dancing", story: "Isha loves to dance and perform in school events." },
  { name: "Kabir", age: 9, hobby: "Reading", story: "Kabir enjoys reading storybooks and dreams of being a writer." },
  { name: "Anaya", age: 7, hobby: "Gardening", story: "Anaya loves planting flowers and caring for the garden." },
  { name: "Dev", age: 6, hobby: "Building", story: "Dev enjoys building things with blocks and wants to be an engineer." },
  { name: "Sana", age: 5, hobby: "Painting", story: "Sana paints colorful scenes and wants to open her own art gallery." },
];


export default function Kids() {
  const [selectedKid, setSelectedKid] = useState(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedKid ? "hidden" : "auto";
  }, [selectedKid]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20 py-16 px-4 sm:px-8 font-sans">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-700">Meet Our Little Stars</h1>
        <p className="text-gray-600 mt-3 text-md sm:text-lg max-w-2xl mx-auto">
          Every smile tells a story. Click on a child to learn more about their dreams and hobbies.
        </p>
      </div>

      {/* Kids Grid */}
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
  {kidsData.map((kid, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.07 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative bg-white rounded-3xl border-4 border-pink-200 shadow-xl p-5 text-center cursor-pointer hover:shadow-2xl hover:border-yellow-300 transition-all duration-300 group"
      onClick={() => setSelectedKid(kid)}
    >
      {/* Voice Bubble */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 w-64 bg-yellow-100 text-pink-800 text-sm font-medium p-3 rounded-2xl shadow-lg z-20">
        <span className="block text-center leading-snug">“{kid.story}”</span>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-100 rotate-45 z-0"></div>
      </div>

      {/* Profile Picture */}
      <div className="w-24 h-24 mx-auto mb-4 relative">
        <div className="absolute inset-0 bg-pink-100 rounded-full blur-xl" />
        <img
          src={babypic1}
          alt={kid.name}
          className="w-24 h-24 object-cover rounded-full border-4 border-yellow-200 shadow-lg relative z-10"
        />
      </div>

      <h3 className="text-lg font-bold text-pink-700">Hi, I'm {kid.name}!</h3>
      <p className="text-sm text-gray-500">{kid.age} years old</p>
      <span className="inline-block mt-2 text-xs text-white bg-pink-400 px-3 py-1 rounded-full whitespace-nowrap">
        💖 Loves {kid.hobby}
      </span>
    </motion.div>
  ))}
</div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedKid && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedKid(null);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <img
                src={babypic1}
                alt={selectedKid.name}
                className="w-28 h-28 rounded-full border-4 border-yellow-300 mx-auto mb-4 shadow-lg"
              />
              <h2 className="text-2xl font-bold text-pink-600">{selectedKid.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{selectedKid.age} years old</p>
              <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded-xl text-sm font-medium my-3">
                💡 Favorite Hobby: {selectedKid.hobby}
              </div>
              <p className="text-gray-700 mb-6 italic">“{selectedKid.story}”</p>
              <button
                onClick={() => setSelectedKid(null)}
                className="bg-pink-500 text-white px-6 py-2 rounded-full shadow hover:bg-pink-600 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer CTA Section */}
      <div className="mt-20 bg-gradient-to-r from-pink-100 to-yellow-100 py-10 px-6 sm:px-10 rounded-2xl text-center shadow-inner max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 mb-3">You can change their story 💫</h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">Be the light in their lives — sponsor or adopt today.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600 transition">
            Sponsor a Child
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 transition">
            Adopt Now
          </button>
        </div>
      </div>
    </section>
  );
}
