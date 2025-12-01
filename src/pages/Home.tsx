import React from "react";
import { Link } from "react-router-dom";
import Hero from "../sections/Hero";
import ImageCarousel from "../components/ImageCarousel";

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Hero />

      {/* tighter divider */}
      <div className="h-12 bg-gradient-to-b from-pink-500/8 via-transparent to-black" />

      {/* WHY CLIENTS LOVE US */}
      <section className="py-12 bg-gradient-to-b from-black via-pink-900/06 to-black relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-8 h-36 w-36 bg-pink-500/16 blur-3xl rounded-full" />
          <div className="absolute bottom-8 right-8 h-40 w-40 bg-fuchsia-400/14 blur-3xl rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10 animate-fade-up">
            <p className="text-xs uppercase tracking-[0.35em] text-pink-300">Why clients love us</p>
            <h2 className="mt-3 text-2xl md:text-4xl font-extrabold">Not just braids — a whole vibe.</h2>
            <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">We focus on comfort, clean parting, smooth finishing, and a relaxing environment so you walk out looking AND feeling amazing.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { num: "01", title: "Gentle, low-tension braiding", desc: "Your scalp comfort comes first. We braid with soft hands and adjust tension based on your sensitivity." },
              { num: "02", title: "Picture-perfect finishing", desc: "Clean parts. Smooth ends. Neat lines. Your braids look great from every angle — even up close." },
              { num: "03", title: "All hair types welcome", desc: "Kids & adults, natural or relaxed, short or long — we customize your braid size and style to match YOU." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-slate-900/60 border border-white/8 backdrop-blur-md p-4 shadow-lg hover:border-pink-400/60 hover:-translate-y-0.5 transition">
                <p className="text-xs uppercase text-pink-300 tracking-[0.2em] mb-2">{item.num}</p>
                <h3 className="font-semibold text-md mb-1 text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg bg-slate-900/70 backdrop-blur-md border border-white/10 p-4 text-center">
            <p className="text-sm text-pink-200 font-semibold mb-2">Ready for a fresh new look?</p>
            <Link to="/contact" className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold shadow">Book your appointment</Link>
          </div>
        </div>
      </section>

      {/* smaller section break */}
      <div className="h-16 bg-gradient-to-b from-black via-fuchsia-500/06 to-black w-full" />

      {/* Gallery preview */}
      <section className="py-12 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-700/8 to-transparent blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-pink-300">Popular styles</p>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-2">A few client favorites 💕</h2>
          <p className="text-slate-300 text-sm mt-2 max-w-xl mx-auto">A quick look at some of the most loved braids. Clean parts • Healthy tension • Beautiful finishing.</p>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          <ImageCarousel
            images={[
              "/images/1.jpg",
              "/images/2.jpg",
              "/images/3.jpg",
              "/images/4.jpg",
              "/images/5.jpg",
            ]}
            interval={3000}
            heightClass="h-52"
          />
        </div>

        <div className="text-center mt-8">
          <Link to="/gallery" className="inline-block border border-pink-300/50 px-6 py-2 rounded-full text-sm font-semibold text-pink-100 hover:bg-pink-500/10 transition">View full gallery</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gradient-to-b from-black via-pink-900/06 to-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-pink-300">Testimonials</p>
            <h2 className="text-2xl md:text-3xl font-extrabold">Loved by clients</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "My daughter's hair looks SO neat and she was so gentle with her. Absolutely recommend!",
              "These are the cleanest braids I’ve ever had! Super comfortable and lasted long.",
              "She’s patient, fast, and does exactly what you ask for. Amazing energy and environment!",
            ].map((review, i) => (
              <div key={i} className="rounded-2xl bg-slate-900/60 border border-white/10 p-4 text-sm text-slate-300 shadow-md backdrop-blur">
                <p>“{review}”</p>
                <p className="mt-3 text-pink-200 text-xs font-semibold">★★★★★</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/services" className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold shadow">Explore services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
