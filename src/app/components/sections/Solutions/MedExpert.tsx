import SectionWrapper from "../../SectionWrapper";
import CrescentHeader from "./CrescentHeader";
export default function Writing() {
  return (
    <SectionWrapper id="solution-med-expert">
    <div className="grid grid-cols-12 gap-6">
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
