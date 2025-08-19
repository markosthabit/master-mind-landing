import SectionWrapper from "../../SectionWrapper";
import CrescentHeader from "./CrescentHeader";
export default function PostEvent() {
  return (
    <SectionWrapper id="solution-postEvent">
      <div className="grid grid-cols-12 gap-6">
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
            “Planning → Setup → Event Day → Editing → Press Coverage.”
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
