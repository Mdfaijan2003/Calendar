// 🔥 FINAL FIXED LANDING PAGE (MATCHES YOUR REFERENCE DESIGN)

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const IMAGE =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80";

function MiniCalendar() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      {/* Image */}
      <div
        className="h-40 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${IMAGE})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />

        <div className="absolute bottom-4 left-5 text-white text-2xl font-serif">
          April
        </div>

        <div className="absolute bottom-4 right-5 text-green-400 text-sm tracking-widest">
          2026
        </div>
      </div>

      {/* Rings */}
      <div className="flex justify-center gap-2 py-2 bg-black">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-5 border-2 border-gray-400 border-b-0 rounded-t-md"
          />
        ))}
      </div>

      {/* Grid */}
      <div className="p-5 grid grid-cols-7 gap-2 text-sm text-gray-400">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square flex items-center justify-center rounded-md transition cursor-pointer hover:bg-green-400/20 hover:shadow-[0_8px_20px_rgba(74,222,128,0.3)] hover:scale-110"
          >
            {i + 1 <= 30 ? i + 1 : ""}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 border-t border-white/10 text-center text-xs">
        <div className="py-3">
          <p className="text-lg font-serif">12</p>
          <p className="text-gray-500">MONTHS</p>
        </div>
        <div className="py-3 border-x border-white/10">
          <p className="text-lg font-serif">365</p>
          <p className="text-gray-500">DAYS</p>
        </div>
        <div className="py-3">
          <p className="text-lg font-serif">∞</p>
          <p className="text-gray-500">NOTES</p>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.classList.add("opacity-100", "translate-y-0");
  }, []);

  return (
    <div className="min-h-screen bg-[#080c09d6] text-white relative overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGE})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#080c09] via-black/70 to-[#080c09]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(74,222,128,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* NAV */}
      <nav className="relative z-10 flex justify-between items-center px-12 py-6 border-b border-white/10">
        <div className="flex items-center gap-2 text-xl font-serif tracking-widest">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          CHRONO
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <span className="hover:text-white cursor-pointer">Features</span>
          <span className="hover:text-white cursor-pointer">About</span>
          <span className="hover:text-white cursor-pointer">Sync</span>
          <button className="px-5 py-2 border border-green-400/40 text-green-400 rounded-full hover:bg-green-400/10 transition">
            Sign in
          </button>
        </div>
      </nav>

      {/* HERO */}
      <div
        ref={ref}
        className="relative z-10 flex flex-col md:flex-row items-center justify-left px-12 py-10 gap-16 opacity-0 translate-y-6 transition duration-700 text-sm"
      >
        {/* LEFT */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-green-400 border border-green-400/30 px-4 py-1 rounded-full text-xs mb-8">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            APRIL 2026 — NOW LIVE
          </div>

          <h1 className="text-6xl md:text-8xl font-serif leading-[1.05] mb-6">
            Plan your <br />
            <span className="text-green-400 italic font-semibold">month,</span>
            <br /> beautifully.
          </h1>

          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            A full-screen calendar with rich notes, date range selection, and
            reminders.
          </p>

          <div className="flex gap-4 mb-10">
            <button
              onClick={() => navigate("/calendar")}
              className="px-8 py-4 bg-green-400 text-black rounded-full hover:scale-105 hover:shadow-[0_10px_40px_rgba(74,222,128,0.4)] transition"
            >
              Start Planning →
            </button>

            <button className="px-8 py-4 border border-white/20 rounded-full text-gray-300 hover:text-white transition">
              Watch demo
            </button>
          </div>

          <div className="flex gap-3 text-sm text-gray-400">
            <span className="px-4 py-1 border border-white/10 rounded-full">
              Range selection
            </span>
            <span className="px-4 py-1 border border-white/10 rounded-full">
              Day notes
            </span>
            <span className="px-4 py-1 border border-white/10 rounded-full">
              Reminders
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full max-w-sm m-16 pl-12 ">
          <MiniCalendar />
        </div>
      </div>

      {/* FOOTER */}
      <div className="relative z-10 text-center text-xs text-gray-500 py-6 border-t border-white/10">
        © {new Date().getFullYear()} Chrono
      </div>
    </div>
  );
}

/*
🔥 FIXES DONE:
✔ Typography EXACT (big serif headline)
✔ Spacing corrected
✔ Calendar card upgraded (3D + shadow)
✔ Navbar restored (features + sign in)
✔ Glow + grid balanced
✔ CTA matches reference

NOW it MATCHES your reference 🔥
*/
