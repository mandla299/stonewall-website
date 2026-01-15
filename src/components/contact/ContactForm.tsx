
import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<"success" | "error" | null>(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);       
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "7ba282f6-69cf-4a6d-9736-1689d8317623");
    formData.append("subject", "New Message from Stonewall Data Solutions Website");
    formData.append("from_name", "Your Website Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#f3f0ff] via-[#fef6e4] to-[#eafaf1] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#332E81]">
          Send Us a Message
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Honeypot */}
          <input type="checkbox" name="botcheck" className="hidden" />

          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[#332E81] ">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#ff7200] bg-[#d8d7e2]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[#332E81]">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#ff7200] bg-[#d8d7e2]"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-semibold mb-2 text-[#332E81]">Service Interest</label>
              <select
                id="interest"
                name="interest"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#ff7200] bg-[#d8d7e2]"
              >
                <option value="">Select a service</option>
                <option value="Transcription">Transcription</option>
                <option value="Data Entry">Data Entry</option>
                <option value="Data Cleaning">Data Cleaning</option>
                <option value="Survey Capture">Survey Capture</option>
                <option value="Sanitation Logging">Sanitation Logging</option>
                <option value="Custom Workflow">Custom Workflow</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-[#332E81]">Message</label>
              <textarea
                id="message"
                name="message"
                rows={9.5}
                required
                placeholder="Tell us what you need, or ask a question..."
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#ff7200] bg-[#d8d7e2]"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white font-semibold px-6 py-4 rounded-full transition duration-300 ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#ff7200] hover:bg-[#e65f00]"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* Inline status message */}
        {status === "success" && (
          <div className="mt-6 rounded-lg bg-green-50 border border-green-200 p-4 text-green-700">
            ✅ Thanks! Your message has been sent.
          </div>
        )}
        {status === "error" && (
          <div className="mt-6 rounded-lg bg-red-50 border border-red-200 p-4 text-red-700">
            ❌ Sorry, something went wrong. Please try again later.
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
