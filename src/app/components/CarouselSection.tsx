// app/components/CarouselSection.tsx
"use client";

import { ComponentType, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface SlideDef {
  id: string;
  Component: ComponentType<Record<string, unknown>>; // Changed from any to Record<string, unknown>
}

interface CarouselSectionProps {
  id: string;
  subsections: SlideDef[];
}

export default function CarouselSection({ id, subsections }: CarouselSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  // debug info to console on mount
  useEffect(() => {
    console.debug(`[CarouselSection:${id}] slides:`, subsections.length);
  }, [id, subsections.length]);

  // init handler
  const onSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;

    // Some setups need explicit loopedSlides set to number of slides to make
    // looping reliable (especially with custom effects or dynamic slides).
    try {
      // @ts-expect-error - Swiper params types don't always include loopedSlides
      if (swiper.params && swiper.params.loop && !swiper.params.loopedSlides) {
        // set to number of real slides
        // this is safe even if the property isn't used by your Swiper version
        // and helps in some versions where loop didn't clone correctly.
         
        // @ts-expect-error - Runtime assignment for Swiper loopedSlides property
        swiper.params.loopedSlides = subsections.length;
      }
    } catch (e) {
      // ignore - not critical
      console.warn("[CarouselSection] could not set loopedSlides", e);
    }
  };

  // Single-click handler: advance, with manual wrap fallback if needed
  const handleClick = (e: React.MouseEvent) => {
    // prevent clicking interactive children from triggering navigation
    const tag = (e.target as HTMLElement).tagName.toLowerCase();
    if (["a", "button", "input", "textarea", "svg"].includes(tag)) return;

    if (!swiperRef.current) return;
    const s = swiperRef.current;

    // Prefer native loop behavior:
    if (s.params.loop) {
      s.slideNext();
      return;
    }

    // Fallback when loop isn't enabled: manual wrap
    if (s.isEnd) s.slideTo(0);
    else s.slideNext();
  };

  return (
    <div
      className="h-screen w-full relative"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") swiperRef.current?.slideNext();
        if (e.key === "ArrowLeft") swiperRef.current?.slidePrev();
      }}
    >
      {/* Subtle edge shading */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black/10 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black/10 to-transparent z-10" />

      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        // IMPORTANT: loop=true is set here; we also add observer options
        loop={true}
        // helps Swiper detect DOM updates and re-init clones when needed
        observer={true}
        observeParents={true}
        // allow mouse dragging like touch
        simulateTouch={true}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSwiper={onSwiperInit}
        // small performance tweak - remove if you need more precise events
        className="h-full w-full"
      >
        {subsections.map(({ id: subId, Component }) => (
          <SwiperSlide key={subId} className="flex items-center justify-center px-6">
            {/* render slide content */}
            <Component />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}