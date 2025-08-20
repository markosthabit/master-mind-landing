import SectionWrapper from "../../SectionWrapper";
import CrescentHeader from "./CrescentHeader";
import Image from "next/image";
export default function Writing() {
  return (
    <SectionWrapper id="solution-writing">
      <div className="grid grid-cols-12 gap-6">
        {/* Overlay  Right */}
                <Image
                  src="/images/doctor-pointing.png"
                  alt=""
                  width={640}
                  height={640}
                  className="absolute top-4/32 -right-3/32 object-contain pointer-events-none transform -scale-x-100 -z-10"
                />
                <Image
                  src="/images/cloud-rainbow.png"
                  alt=""
                  width={728}
                  height={728}
                  className="absolute top-17/32 -right-6/32 object-contain pointer-events-none transform -scale-x-100 -z-10"
                />
        
                {/* Overlay Left  */}
                <Image
                  src="/images/left-overlay.png"
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
          <h3 className="text-2xl font-bold text-lightBlue">1. Medical Content Writing</h3>
          <ul className="list-disc list-inside text-md font-light pl-4">
            <li>Email marketing & automation</li>
            <li>Social media (organic + paid)</li>
            <li>Medical representative e-detailing</li>
            <li>Web portals & landing pages</li>
            <li>SMS/WhatsApp campaigns</li>
            <li>Webcasts & virtual events</li>
            <li>KOL webinars</li>
            <li>In-clinic and event activations</li>
            <li>Content adaptation for each touchpoint</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
