import Image from "next/image";
import SectionWrapper from "../../SectionWrapper";
import CrescentHeader from "./CrescentHeader";

export default function EventPlanning() {
  return (
    <SectionWrapper id="solution-eventPlanning">
      <div className="grid grid-cols-12 gap-6">
        {/* Overlay  Right */}
        <Image
          src="/images/top-right-overlay.webp"
          alt=""
          width={1024}
          height={1024}
          className="absolute -top-18/32 -right-12/32 object-contain pointer-events-none"
        />
        {/* Overlay Left  */}
        <Image
          src="/images/speaker.webp"
          alt=""
          width={480}
          height={1024}
          className="absolute right-0 top-0 h-screen object-cover pointer-events-none -z-10"
        />
        <div className="col-span-12 w-screen">
          <CrescentHeader
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-left"
          >
            EVENT
            <br />
            <span>MANAGEMENT</span>
          </CrescentHeader>
        </div>
        <div className="col-start-2 col-span-8">
          <h2 className="text-3xl font-bold text-lightBlue">
            “Planning → Setup → Event Day →<br /> Editing → Press Coverage.”
          </h2>
        </div>

        <div className="col-start-2 col-span-6 ">
          <h3 className="text-2xl font-bold text-lightBlue">
            Pre-Event Planning
          </h3>
          <ul className="list-disc list-inside text-md font-light pl-4">
            <li>Concept & theme development</li>
            <li>Event branding & creative assets</li>
            <li>Venue sourcing & logistics</li>
            <li>Stakeholder coordination </li>
            <li>Press release preparation</li>
            <li>Guest list & invitation management</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
