import SectionWrapper from "../../SectionWrapper";
import CrescentHeader from "./CrescentHeader";
export default function Engagement() {
  return (
    <SectionWrapper id="solution-engagement">
      <div className="grid grid-cols-12 gap-6">
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
