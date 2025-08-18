"use client";
import Logo from "@/app/components/sections/Logo";
import Home from "@/app/components/sections/Home";

import {
  AboutIntro,
  AboutHistory,
  AboutVision,
  AboutWeAre,
} from "@/app/components/sections/About/About";

import {
  ValueBelieve,
  ValueEngage,
} from "@/app/components/sections/Values/Values";

import {
  SolutionsIntro,
  Branding,
  Media,
  Engagement,
  Writing,
  Publication,
  MedExpert,
  Education,
  EventPlanning,
  EventExecution,
  PostEvent,
} from "@/app/components/sections/Solutions/Solutions";

import Contact from "@/app/components/sections/Contact";

// ---------- Types ----------
import { ComponentType, JSXElementConstructor } from "react";

export interface SectionItem {
  id: string;
  Component?: ComponentType<object>;
  subsections?: {
    id: string;
    Component: ComponentType<object>;
  }[];
}

export interface Section {
  id: string;
  Component?: ComponentType<object>;
  subsections?: SectionItem[];
}

// ---------- Sections Registry ----------
const sections: Section[] = [
  {
    id: "logo",
    Component: Logo,
  },
  {
    id: "home",
    Component: Home,
  },
  {
    id: "about",
    subsections: [
      { id: "intro", Component: AboutIntro },
      { id: "history", Component: AboutHistory },
      { id: "vision", Component: AboutVision },
      { id: "weare", Component: AboutWeAre },
    ],
  },
  {
    id: "values",
    subsections: [
      { id: "believe", Component: ValueBelieve },
      { id: "engage", Component: ValueEngage },
    ],
  },
  {
    id: "solutions",
    subsections: [
      { id: "intro", Component: SolutionsIntro },
      { id: "branding", Component: Branding },
      { id: "media", Component: Media },
      { id: "engagement", Component: Engagement },
      { id: "writing", Component: Writing },
      { id: "publication", Component: Publication },
      { id: "medexpert", Component: MedExpert },
      { id: "education", Component: Education },
      { id: "eventplanning", Component: EventPlanning },
      { id: "eventexecution", Component: EventExecution },
      { id: "postevent", Component: PostEvent },
    ],
  },
  {
    id: "contact",
    Component: Contact,
  },
];

export default sections;