"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

const sections = ["home", "about", "values", "solutions", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

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

  const navLabels: Record<string, string> = {
    home: "Home",
    about: "About us", 
    values: "Our Values",
    solutions: "Our Solutions",
    contact: "Contact us"
  };

  return (
    <nav
      className="fixed h-16  top-0 left-0 w-screen z-50 py-4 px-6 bg-darkBlue"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="w-8 h-8 flex items-center justify-center" style={{ marginLeft: '.5cm' }}>
            <Image src="/images/logo.png" alt="logo" width={90} height={90} />
          </div>
          {/* Logo Text */}
          <div className="flex items-center gap-1">
            <span 
              className="font-bold text-xl"
              style={{ color: 'var(--color-softWhite)' }}
            >
              Master
            </span>
            <span 
              className="font-normal text-xl"
              style={{ color: 'var(--color-lightBlue)' }}
            >
              Mind
            </span>
          </div>
        </div>
        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={clsx(
                  "font-bold transition-colors duration-300 hover:opacity-80",
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
      </div>
    </nav>
  );
}