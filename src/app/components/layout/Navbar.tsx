"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

const sections = ["home", "about", "values", "solutions", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const allSections = [...sections];
    const observers: IntersectionObserver[] = [];

    allSections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.6 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu when clicking on a nav link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const navLabels: Record<string, string> = {
    home: "Home",
    about: "About us",
    values: "Our Values",
    solutions: "Our Solutions",
    contact: "Contact us"
  };

  return (
    <nav className="fixed h-16 top-0 left-0 w-screen z-50 py-4 px-4 sm:px-6 bg-darkBlue">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Logo Icon */}
          <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center ml-2 sm:ml-[0.5cm]">
            <Image 
              src="/images/logo.png" 
              alt="logo" 
              width={90} 
              height={90}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Logo Text */}
          <div className="flex items-center gap-1">
            <span
              className="font-bold text-lg sm:text-xl"
              style={{ color: 'var(--color-softWhite)' }}
            >
              Master
            </span>
            <span
              className="font-normal text-lg sm:text-xl"
              style={{ color: 'var(--color-lightBlue)' }}
            >
              Mind
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={clsx(
                  "font-bold transition-colors duration-300 hover:opacity-80"
                )}
                style={{
                  color: active === id ? 'var(--color-lightBlue)' : 'var(--color-softWhite)',
                  fontSize: '1.1rem'
                }}
              >
                {navLabels[id]}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={clsx(
              "block w-6 h-0.5 transition-all duration-300 transform origin-center",
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            )}
            style={{ backgroundColor: 'var(--color-softWhite)' }}
          />
          <span
            className={clsx(
              "block w-6 h-0.5 transition-all duration-300",
              isMenuOpen ? "opacity-0" : ""
            )}
            style={{ backgroundColor: 'var(--color-softWhite)' }}
          />
          <span
            className={clsx(
              "block w-6 h-0.5 transition-all duration-300 transform origin-center",
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            )}
            style={{ backgroundColor: 'var(--color-softWhite)' }}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "lg:hidden fixed inset-0 top-16 bg-darkBlue transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-start pt-8 space-y-6">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={handleNavClick}
              className={clsx(
                "font-bold text-xl transition-colors duration-300 hover:opacity-80 py-2 px-4 rounded"
              )}
              style={{
                color: active === id ? 'var(--color-lightBlue)' : 'var(--color-softWhite)'
              }}
            >
              {navLabels[id]}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 bg-black bg-opacity-50 -z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}