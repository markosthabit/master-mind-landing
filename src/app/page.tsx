"use client";

import Navbar from "@/app/components/layout/Navbar";
import SectionWrapper from "@/app/components/SectionWrapper";
import CarouselSection from "@/app/components/CarouselSection";

import sections from "@/app/sectionsRegistry";

export default function Page() {
  return (
<main className="relative scroll-snap-y scroll-snap-mandatory overflow-y-scroll h-screen scrollbar-modern">
  <Navbar />
      {sections.map(({ id, Component, subsections }) => (
        <SectionWrapper key={id} id={id}>
          {subsections ? (
            <CarouselSection id={id} subsections={subsections} />
          ) : (
            Component && <Component />
          )}
        </SectionWrapper>
      ))}
    </main>
  );
}