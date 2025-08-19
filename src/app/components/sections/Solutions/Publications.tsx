import SectionWrapper from "../../SectionWrapper";
import CrescentHeader from "./CrescentHeader";
export default function Publications() {
  return (
    <SectionWrapper id="solution-publications">
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
          <h3 className="text-2xl font-bold text-lightBlue">2. Accreditation & Publications</h3>
          <ul className="list-disc list-inside text-md font-light pl-4">
            <li>Coordination of medical content accreditation (CME/CPD)</li>
            <li>Abstract submissions & conference materials</li>
            <li>Manuscript writing and editing</li>
            <li>Compliance with medical/scientific standards</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
