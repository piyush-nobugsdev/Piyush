"use client";

import ThemeToggle from "@/components/ThemeToggle";


export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-lightBg/80 dark:bg-darkBg/80 border-b border-lightCard dark:border-darkCard transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-primary">
          Piyush
        </h1>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8">

          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-lightText dark:text-darkText hover:text-primary transition duration-300"
            >
              {item}

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
