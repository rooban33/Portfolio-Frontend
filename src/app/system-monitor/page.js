"use client"
import Footer from "../components/Footer";
import SystemMonitor from "../components/SystemMonitor"; // Replace with your actual component name
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "../components/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../components/MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "/",
  }
];

export default function SystemMonitorPage() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <nav className="fixed mx-auto border border-[#521e46] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 px-5">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 ">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
        <Image src="/images/logo3.png" className="" width={80} height={80} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
      <div className="container mt-24 mx-auto px-12 py-4">
        <SystemMonitor/>
      </div>
      <Footer />
    </main>
  );
}