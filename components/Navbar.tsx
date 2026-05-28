"use client";

import React, { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/sonar-ai", label: "SONAR AI" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#why", label: "Why Blue Water" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll handled by browser
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-silver-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center group -ml-1">
            <img 
              src="/images/logo.jpg" 
              alt="Blue Water Components" 
              className="h-8 md:h-9 w-auto" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="nav-link text-navy-900 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Info + CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://www.dmsms.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-navy-900 hover:text-blue-600 transition-colors"
            >
              Access SONAR
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2"
            >
              Request a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-navy-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mobile-menu border-t border-silver-200 bg-white px-6 py-8">
          <div className="flex flex-col gap-6 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-navy-900 hover:text-blue-600 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-silver-200 flex flex-col gap-4">
              <a 
                href="https://www.dmsms.ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-navy-900 font-medium"
              >
                Access SONAR
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center text-white px-6 py-3 rounded-lg text-sm font-semibold"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
