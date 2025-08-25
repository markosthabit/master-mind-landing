"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <section
      id="logo"
      className="relative min-h-[calc(100vh-4rem)] top-16 w-full flex items-center justify-center overflow-hidden"
    >
      {/* Overlay Top Right */}
      <Image
        src="/images/top-right-overlay.webp"
        alt=""
        loading="eager"
        width={728}
        height={728}
        className="absolute -top-128 -right-48 object-contain pointer-events-none"
      />

      {/* Overlay Left Half */}
      <Image
        src="/images/left-overlay.webp"
        alt=""
        loading="eager"
        width={1200}
        height={1200}
        className="absolute right-2/4 -top-64 object-contain pointer-events-none opacity-60"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="flex flex-col items-center text-center gap-4 md:flex-row md:items-center md:text-left md:gap-6">
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={164}
            loading="eager"
            height={164}
            className="object-contain w-24 h-24 md:w-[164px] md:h-[164px]"
          />
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-softWhite font-bold leading-tight">
              MASTER <br /> MIND
            </h1>
            <p className="text-lg sm:text-xl">
              Mastering <span className="text-lightPurple">Innovation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
