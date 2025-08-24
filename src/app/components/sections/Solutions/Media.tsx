import SectionWrapper from "../../SectionWrapper";
import CrescentHeader from "./CrescentHeader";
import Image from "next/image";
export default function Media() {
  return (
    <SectionWrapper id="solution-media">
      <div className="container mx-auto px-4">
        {/* Overlay  Right */}
        <Image
          src="/images/two-people-in-VR.webp"
          alt=""
          width={728}
          height={728}
          className="absolute  -right-5/32 object-contain pointer-events-none transform -scale-x-100"
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
          src="/images/large-left-overlay.webp"
          alt=""
          width={2400}
          height={2400}
          className="absolute right-10/16 -top-5/8 object-contain pointer-events-none"
        />
        <CrescentHeader
          as="h2"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-left"
        >
          INTERACTIVE MEDIA
          <br />
          <span className="font-medium">SOLUTIONS</span>
        </CrescentHeader>

        <p className="text-base sm:text-lg md:text-xl font-bold text-center max-w-4xl mx-auto ">
          We design immersive, tech-powered experiences that educate, inspire,
          and engage healthcare audiences.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto  ">
          <ul className="space-y-6">
            <li>
              <div>
                <h1 className="font-bold text-lightBlue text-2xl ">
                  Engagement & Education
                </h1>
                <ul className="list-inside list-disc">
                  <li>Gamification</li>
                  <li>Web Portals</li>
                  <li>Webcasts/ Podcasts</li>
                </ul>
              </div>
            </li>
            <div>
              <h1 className="font-bold text-lightBlue text-2xl ">
                Credibility & Storytelling
              </h1>
              <ul className="list-inside list-disc">
                <li>KOLs Interviews</li>
                <li>Patient Testimonials</li>
                <li>case Studies</li>
              </ul>
            </div>

            <li></li>
          </ul>

          <ul className="space-y-6">
            <li>
              <div>
                <h1 className="font-bold text-lightBlue text-2xl ">
                  Tech—Driven Solutions
                </h1>
                <ul className="list-inside list-disc">
                  <li>Al-Powered Chatbots & Virtual Assistants</li>
                  <li>Personalized Content Engines</li>
                  <li>Interactive Tools</li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <h1 className="font-bold text-lightBlue text-2xl ">
                  Multimedia Production
                </h1>
                <ul className="list-inside list-disc">
                  <li>Educational & Promotional Videos</li>
                  <li>2D/3D Animations</li>
                  <li>Motion Graphics </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
