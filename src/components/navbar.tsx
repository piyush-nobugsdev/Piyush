"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <><nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-lightBg/80 dark:bg-darkBg/80 border-b border-lightCard dark:border-darkCard transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-primary">
          Piyush
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative text-lightText dark:text-darkText hover:text-primary transition duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-lightText dark:text-darkText"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}

     
    </nav>
    {isOpen && (
  <div
    className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
    onClick={() => setIsOpen(false)}
  />
)}
     <div
        className={`fixed top-0 right-0 h-full w-64 
  bg-lightBg dark:bg-darkBg 
  shadow-2xl 
  z-[100]   /* VERY IMPORTANT */
  transform transition-transform duration-300 md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-6">
          <X
            size={26}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center gap-8 mt-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-lg text-lightText dark:text-darkText hover:text-primary transition"
            >
              {item}
            </a>
          ))}

          <ThemeToggle />
        </div>
      </div>
      </>
  );
}
