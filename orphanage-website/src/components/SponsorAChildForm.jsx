import { useState } from "react";
import { submitSponsorForm } from "../utils/handleSponsorChild";

const SponsorAChildForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submitSponsorForm(formData);
    if (result.success) {
      setStatus("✅ Submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Submission failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs */}
      <input type="text" placeholder="Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
      <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
      <textarea placeholder="Message" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required />
      <button type="submit">Submit</button>
      <p>{status}</p>
    </form>
  );
};

export default SponsorAChildForm;
