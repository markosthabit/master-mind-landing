import SectionWrapper from "../../SectionWrapper";
import CrescentHeader from "./CrescentHeader";
import Image from "next/image";
export default function Writing() {
  return (
    <SectionWrapper id="solution-med-expert">
      <div className="grid grid-cols-12 gap-6">
            {/* Overlay  Top */}
        <Image
          src="/images/large-top-overlay.webp"
          alt=""
          width={800}
          height={800}
          className="absolute -top-20/32 -right-4/32 object-contain pointer-events-none"
        />
        {/* Overlay  Right */}
        <Image
          src="/images/doctor-smiling.webp"
          alt=""
          width={512}
          height={512}
          className="absolute top-9/32 right-0 object-contain pointer-events-none -z-20"
        />
        <Image
          src="/images/cloud-rainbow.webp"
          alt=""
          width={728}
          height={728}
          className="absolute top-17/32 -right-6/32 object-contain pointer-events-none transform -scale-x-100 -z-10"
        />
        <Image
          src="/images/cloud-circle.webp"
          alt=""
          width={512}
          height={512}
          className="absolute top-9/32  -right-1/32 object-contain pointer-events-none -z-30"
        />

        {/* Overlay Left  */}
        <Image
          src="/images/left-overlay.webp"
          alt=""
          width={700}
          height={700}
          className="absolute right-23/32 -top-1/8 object-contain pointer-events-none -z-50"
        />
    
        <div className="col-span-12 w-screen">
          <CrescentHeader
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-left"
          >
            MEDICAL
            <br />
            <span>COMMUNICATION</span>
          </CrescentHeader>
        </div>
        <div className="col-start-2 col-span-8">
          <h2 className="text-3xl font-bold text-lightBlue">
            Content creation → Engagement → Education → Publication
          </h2>
        </div>

        <div className="col-start-2 col-span-6 ">
          <h3 className="text-2xl font-bold text-lightBlue">3. Medical Expert Engagement</h3>
          <ul className="list-disc list-inside text-md font-light pl-4">
            <li>Advisory board planning and execution</li>
            <li>Consensus meeting facilitation</li>
            <li>Moderation, reporting & follow-ups</li>
            <li>Scientific committee coordination</li>
            <li>KOL engagement strategy</li>
          </ul>
        </div>
      </div>
      
    </SectionWrapper>
  );
}
