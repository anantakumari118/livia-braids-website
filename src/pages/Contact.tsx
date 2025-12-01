import React from "react";

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! This is a demo – we’ll connect it to Firebase later.");
  };

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-pink-300">
            Contact
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold">
            Book your braid appointment.
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            Share your details and what style you&apos;re thinking of. 
          </p>
        </header>

        <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-6 md:p-8">
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 md:grid-cols-2 md:gap-6 text-sm"
          >
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Name
              </label>
              <input
                required
                type="text"
                className="w-full rounded-xl bg-black border border-white/15 px-3 py-2 outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Phone or WhatsApp
              </label>
              <input
                required
                type="tel"
                className="w-full rounded-xl bg-black border border-white/15 px-3 py-2 outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
                placeholder="Best number to reach you"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full rounded-xl bg-black border border-white/15 px-3 py-2 outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Preferred Time
              </label>
              <input
                type="time"
                className="w-full rounded-xl bg-black border border-white/15 px-3 py-2 outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-300 mb-1">
                What style do you want?
              </label>
              <textarea
                required
                rows={3}
                className="w-full rounded-xl bg-black border border-white/15 px-3 py-2 outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
                placeholder="Example: waist-length knotless, medium box braids, kids braids with beads..."
              />
            </div>

            <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-2">
              <p className="text-xs text-slate-400 max-w-sm">
                After submitting, you&apos;ll get a reply with available times,
                estimated price and next steps to confirm your appointment.
              </p>
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-pink-500 to-pink-300 px-8 py-3 text-xs md:text-sm font-semibold text-black shadow-lg hover:shadow-xl transition"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
