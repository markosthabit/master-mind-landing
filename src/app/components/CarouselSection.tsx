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
  Component?: ComponentType<object>;
}

interface CarouselSectionProps {
  id: string;
  subsections: SlideDef[];
}

export default function CarouselSection({ id, subsections }: CarouselSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    console.debug(`[CarouselSection:${id}] slides:`, subsections.length);
  }, [id, subsections.length]);

  const onSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    try {
      // @ts-expect-error - Swiper params types don't always include loopedSlides property
      if (swiper.params && swiper.params.loop && !swiper.params.loopedSlides) {
        // @ts-expect-error - Runtime assignment for Swiper loopedSlides property
        swiper.params.loopedSlides = subsections.length;
      }
    } catch (e) {
      console.warn("[CarouselSection] could not set loopedSlides", e);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    const tag = (e.target as HTMLElement).tagName.toLowerCase();
    if (["a", "button", "input", "textarea", "svg"].includes(tag)) return;

    if (!swiperRef.current) return;
    const s = swiperRef.current;

    const { clientX, currentTarget } = e;
    const { width, left } = (currentTarget as HTMLElement).getBoundingClientRect();
    const midpoint = left + width / 2;

    if (clientX < midpoint) {
      // Clicked left half → previous slide
      s.slidePrev();
    } else {
      // Clicked right half → next slide
      s.slideNext();
    }
  };

  return (
    <div
      className="h-[calc(100vh-4rem)] w-full relative"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") swiperRef.current?.slideNext();
        if (e.key === "ArrowLeft") swiperRef.current?.slidePrev();
      }}
    >
      {/* gradient edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black/10 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black/10 to-transparent z-10" />

      {/* arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          swiperRef.current?.slidePrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 text-white p-3 hover:bg-black/70"
      >
        ◀
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          swiperRef.current?.slideNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 text-white p-3 hover:bg-black/70"
      >
        ▶
      </button>

      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        observer={true}
        observeParents={true}
        simulateTouch={true}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSwiper={onSwiperInit}
        className="h-full w-full"
      >
        {subsections.map(({ id: subId, Component }) => (
          <SwiperSlide
            key={subId}
            className="flex items-center justify-center px-6"
          >
            {Component ? (
              <Component />
            ) : (
              <div>Component not available</div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
