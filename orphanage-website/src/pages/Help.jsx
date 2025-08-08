import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, HandHeart, Home, Users, MessageSquareHeart } from "lucide-react";

const HowToHelp = () => {
  const [openModal, setOpenModal] = useState(null);
  const handleModal = (type) => setOpenModal(type);
  const [showQR, setShowQR] = useState(false);
  const closeModal = () => setOpenModal(null);

  const HelpCard = ({ title, description, icon: Icon, onClick }) => (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all space-y-3 border border-pink-200 hover:border-pink-400"
    >
      <Icon className="w-8 h-8 text-pink-600" />
      <h4 className="text-xl font-bold text-pink-700">{title}</h4>
      <p className="text-pink-600 text-sm">{description}</p>
      <p className="text-sm text-pink-400 font-medium">Click to learn more →</p>
    </div>
  );

  const Modal = ({ open, onClose, title, children }) => (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-6 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title className="text-2xl font-bold text-pink-700">
                    {title}
                  </Dialog.Title>
                  <button onClick={onClose}>
                    <X className="w-6 h-6 text-pink-600 hover:text-pink-800" />
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );

  const Input = ({ ...props }) => (
    <input
      {...props}
      className="w-full px-4 py-2 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
    />
  );

  const Textarea = ({ ...props }) => (
    <textarea
      {...props}
      className="w-full px-4 py-2 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
    />
  );

  const FormButton = ({ label }) => (
    <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
      {label}
    </button>
  );

  const SponsorForm = () => (
    <form className="space-y-4">
      <Input type="text" placeholder="Full Name" required />
      <Input type="email" placeholder="Email" required />
      <Input type="number" placeholder="Monthly Amount (INR)" required />
      <Textarea placeholder="Why do you want to sponsor?" rows="3" />
      <FormButton label="Become a Sponsor" />
    </form>
  );

  const PartnerForm = () => (
    <form className="space-y-4">
      <Input type="text" placeholder="Organization Name" required />
      <Input type="email" placeholder="Contact Email" required />
      <Textarea placeholder="How would you like to collaborate?" rows="4" />
      <FormButton label="Submit Proposal" />
    </form>
  );

  const TestimonialForm = () => (
    <form className="space-y-4">
      <Input type="text" placeholder="Your Name" required />
      <Textarea placeholder="Share your experience..." rows="4" />
      <FormButton label="Send Testimonial" />
    </form>
  );

  const AdoptRoomContent = () => (
    <div className="space-y-4">
      <img
        src="https://source.unsplash.com/featured/?children,room"
        alt="Adopt a Room"
        className="rounded-xl w-full object-cover h-40"
      />
      <p className="text-pink-700">
        Help us transform dorms, study spaces, or playrooms. Leave your mark
        with a nameplate in the room you sponsor.
      </p>
      <FormButton label="Contact Us to Adopt" />
    </div>
  );

  return (
    <div className="min-h-screen  bg-gradient-to-b from-pink-50 to-white pt-20 p-6 md:p-26">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-pink-700">How You Can Help</h2>
          <p className="text-gray-600 mt-3 text-md sm:text-lg max-w-2xl mx-auto">
            Your kindness brings hope and smiles to children.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-2xl p-8 md:flex items-center justify-between mt-10">
          {/* Left Content - Text + Image */}
          <div className="md:w-1/2 space-y-4">
            <h6 className="text-3xl font-bold text-pink-700">
              Be the Reason for a Smile
            </h6>
            <p className="text-gray-700 text-lg">
              Your small donation can bring big changes. Help provide food,
              shelter, and education to children in need.
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-pink-800">Bank Transfer:</p>
              <p>Name: Malalai Illam</p>
              <p>Account No: 1234567890</p>
              <p>IFSC: ABCD0123456</p>
            </div>
          </div>

          {/* Right Content - QR Code + CTA */}
          <div className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://donate.example.com"
              alt="Donate QR Code"
              className="w-48 h-48"
            />

            <p className="text-sm mt-2 text-gray-600">Scan to donate via UPI</p>
            <a
              // href="https://donate.example.com"
              // target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition shadow-lg"
            >
              Donate Now 💖
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-6 py-12">
          {[
            {
              title: "Sponsor a Child",
              description:
                "Be the reason a child smiles, learns, and dreams. Your monthly support transforms lives.",
              icon: HandHeart,
              type: "sponsor",
            },
            {
              title: "Adopt a Room",
              description:
                "Create a safe, beautiful space where children feel loved, valued, and at home.",
              icon: Home,
              type: "adopt",
            },
            {
              title: "Partner With Us",
              description:
                "Join hands for lasting impact. Together, we can build brighter futures, one child at a time.",
              icon: Users,
              type: "partner",
            },
            {
              title: "Submit Testimonial",
              description:
                "Share your story. Your words can inspire others to care, give, and make a difference.",
              icon: MessageSquareHeart,
              type: "testimonial",
            },
          ].map(({ title, description, icon: Icon, type }) => (
            <div
              key={type}
              onClick={() => handleModal(type)}
              className="cursor-pointer group bg-gradient-to-br from-pink-100 via-white to-pink-200 rounded-3xl p-10 shadow-2xl transform transition-transform hover:scale-105 min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="bg-white text-pink-600 p-5 rounded-full shadow-md group-hover:bg-pink-100 transition">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-pink-800 group-hover:text-pink-600">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-800 text-lg font-serif italic leading-relaxed tracking-normal group-hover:text-pink-800 transition duration-300">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <Modal
        open={openModal === "sponsor"}
        onClose={closeModal}
        title="Sponsor a Child"
      >
        <SponsorForm />
      </Modal>

      <Modal
        open={openModal === "adopt"}
        onClose={closeModal}
        title="Adopt a Room"
      >
        <AdoptRoomContent />
      </Modal>

      <Modal
        open={openModal === "partner"}
        onClose={closeModal}
        title="Partner With Us"
      >
        <PartnerForm />
      </Modal>

      <Modal
        open={openModal === "testimonial"}
        onClose={closeModal}
        title="Submit a Testimonial"
      >
        <TestimonialForm />
      </Modal>
    </div>
  );
};

export default HowToHelp;
