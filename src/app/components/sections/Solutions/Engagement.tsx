import SectionWrapper from "../../SectionWrapper";
import CrescentHeader from "./CrescentHeader";
import Image from "next/image";
export default function Engagement() {
  return (
    <SectionWrapper id="solution-engagement">
      <div className="grid grid-cols-12 gap-6">
        {/* Overlay  Right */}
        <Image
          src="/images/phone.webp"
          alt=""
          width={400}
          height={400}
          className="absolute top-9/32 right-5/32 object-contain pointer-events-none transform"
        />
        <Image
          src="/images/cloud-circle.webp"
          alt=""
          width={512}
          height={512}
          className="absolute top-3/8  -right-5/32 object-contain pointer-events-none -z-10"
        />
        <Image
          src="/images/cloud-rainbow.webp"
          alt=""
          width={728}
          height={728}
          className="absolute -top-8/32 -right-8/32 object-contain pointer-events-none transform -scale-x-100 -z-10"
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
            OMNICHANNEL
            <br />
            <span className="font-medium">ENGAGEMENT</span>
          </CrescentHeader>
        </div>
        <div className="col-start-2 col-span-6">
          <h2 className="text-3xl font-bold text-lightBlue">
            Plan → Engage → Optimize
          </h2>
        </div>

        <div className="col-start-2 col-span-6 text-2xl font-bold text-lightBlue">
          <ul>
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
