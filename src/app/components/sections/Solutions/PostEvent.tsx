import SectionWrapper from "../../SectionWrapper";
import CrescentHeader from "./CrescentHeader";
import Image from "next/image";
export default function PostEvent() {
  return (
    <SectionWrapper id="solution-postEvent">
      <div className="grid grid-cols-12 gap-6">
        {/* Overlay  Right */}
                <Image
                  src="/images/speaker-pc.png"
                  alt=""
                  width={800}
                  height={1024}
                  className="absolute right-0 top-0 h-screen object-cover pointer-events-none -z-10"
        />        
                <Image
                  src="/images/cloud-rainbow.png"
                  alt=""
                  width={512}
                  height={512}
                  className="absolute -top-6/32 right-9/32 object-contain pointer-events-none rotate-90 -z-10"
        />
           {/* Overlay Left Half */}
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
          <h3 className="text-2xl font-bold text-lightBlue">Post-Event</h3>
          <ul className="list-disc list-inside text-md font-light pl-4">
            <li>Video editing & event highlight reels</li>
            <li>Post-event reports and analytics</li>
            <li>Press release publication & media tracking</li>
            <li>Follow-up communication kits</li>
            <li>Feedback collection & insights summary</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
