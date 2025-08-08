import React, { useState } from "react";
import { sendContactForm } from "../utils/sendContactForm";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: "Submitting...", type: "info" });

    const result = await sendContactForm(formData);

    if (result.success) {
      setStatus({ message: "✅ Message sent successfully!", type: "success" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus({
        message: "❌ Failed to send message. Try again later.",
        type: "error",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-4 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 pt-10 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-700">Get in Touch</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Have questions, ideas, or just want to say hi? We’d love to hear from you!
          </p>

          <div className="space-y-4 text-gray-700 text-base">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-500" />
              <span>Baby Hope, Madurai, India</span>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-pink-500" />
              <span>contact@babyhope.org</span>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-pink-500" />
              <span>+91 9876543210</span>
            </p>
          </div>

          <iframe
            src="https://maps.google.com/maps?q=madurai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="rounded-2xl w-full h-64 shadow-md"
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 space-y-5">
          <h3 className="text-2xl font-bold text-pink-600 mb-2">Send a Message</h3>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status.message && (
            <p
              className={`text-sm mt-2 ${
                status.type === "success"
                  ? "text-green-600"
                  : status.type === "error"
                  ? "text-red-600"
                  : "text-gray-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
