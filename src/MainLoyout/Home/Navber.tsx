import React, { useState } from "react";
import { Menu, School } from "lucide-react";

// Standard Nav Links
const navLinks = [
  { name: "About", href: "#" },
  { name: "Admission", href: "#" },
  { name: "Notices", href: "#" },
  { name: "Teachers", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-100 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Left: Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2D5A48] text-white">
            <School size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            SJOC
          </span>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-gray-500 transition-colors hover:text-[#2D5A48]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block rounded-md bg-[#2D5A48] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#244839] active:scale-95">
            Apply Now
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Simple Implementation) */}
      {isOpen && (
        <div className="absolute left-0 top-[73px] z-50 w-full border-b bg-white p-6 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="mt-2 w-full rounded-md bg-[#2D5A48] py-3 text-white">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;