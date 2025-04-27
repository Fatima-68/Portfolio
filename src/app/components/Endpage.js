"use client";

import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Endpage() {
  return (
    <footer className="bg-[#0b1120] text-white py-16 px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-pink-400">Have projects in mind?</h2>
        <p className="mt-4 text-2xl font-semibold">Lets work together</p>

        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition">
          Book A Call →
        </button>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-pink-400 text-3xl" />
            <div>
              <p className="font-semibold text-pink-400">Email</p>
              <a href="mailto:fatimasaleem6868@gmail.com" className="text-gray-300 hover:underline">
                fatimasaleem6868@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-pink-400 text-3xl" />
            <div>
              <p className="font-semibold text-pink-400">Contact</p>
              <a href="tel:+923335094929" className="text-gray-300 hover:underline">
                +92 333 5094929
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
          <p className="text-pink-400 font-semibold mb-4">Quick Links</p>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#Home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#About" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#Portfolio" className="hover:underline">
                Project
              </Link>
            </li>
            <li>
              <Link href="#Portfolioshowcase" className="hover:underline">
                Portfolio Showcase
              </Link>
            </li>
          </ul>
        </div>
      </div>
        {/* Footer Bottom */}
        <div className="mt-12 text-sm text-gray-400 space-y-2">
        <p>© 2025 | Built with ❤️ and crafted with code.</p>
        <p>🚀 Dreamed with big ideas, 🍩 powered by sweet creativity.</p>
        <p>😎 Turning visions into reality — one line of code at a time!</p>
        </div>
      </div>
    </footer>
  );
}
