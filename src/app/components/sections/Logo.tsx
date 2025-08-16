"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <section
      id="logo"
      className="min-h-screen w-full flex items-center justify-center bg-yellow-600"
    >
      <div className="relative w-[60vw] h-[60vw] max-w-[300px] max-h-[300px] sm:max-w-[400px] sm:max-h-[400px]">
        <Image
          src="/splash.png"
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
