"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

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

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full bg-grey/80 backdrop-blur-md shadow transition z-50 opacity-100"
      )}
    >
      <ul className="flex justify-center gap-8 py-3">
        {sections.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={clsx(
                "uppercase font-medium transition",
                active === id ? "text-teal-600" : "text-gray-400"
              )}
            >
              {id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
