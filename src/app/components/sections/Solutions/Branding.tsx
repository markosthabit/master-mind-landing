import SectionWrapper from "../../SectionWrapper";
import CrescentHeader from "./CrescentHeader";
import CustomCard from "./CustomCard";
import Image from "next/image";

export default function Branding() {
  return (
    <SectionWrapper id="solution-branding">
  <div className="container mx-auto px-0 pb-0 overflow-visible min-h-0">
        {/* Overlay Right */}
        {/* Responsive overlays: smaller and top-right on mobile, original on md+ */}
        <Image
          src="/images/star-ballon.png"
          alt=""
          width={200}
          height={200}
          className="hidden sm:absolute sm:right-1/16 sm:top-3/16 sm:block object-contain pointer-events-none blur-xs rotate-45"
        />
        <Image
          src="/images/star-ballon.png"
          alt=""
          width={400}
          height={400}
          className="hidden sm:absolute sm:-right-3/32 sm:top-1/32 sm:block object-contain pointer-events-none"
        />
        <Image
          src="/images/star-ballon.png"
          alt=""
          width={300}
          height={300}
          className="hidden sm:absolute sm:-right-3/32 sm:top-12/32 sm:block object-contain pointer-events-none rotate-45"
        />
        {/* Small screen overlay */}
        <Image
          src="/images/star-ballon.png"
          alt=""
          width={60}
          height={60}
          className="absolute right-2 top-2 w-10 h-10 object-contain pointer-events-none z-10 sm:hidden"
        />
        {/* Overlay Left Half */}
        <Image
          src="/images/left-overlay.png"
          alt=""
          width={700}
          height={700}
          className="absolute right-23/32 -top-1/8 object-contain pointer-events-none -z-50"
        />
        <CrescentHeader
          as="h2"
          className="text-xl sm:text-3xl md:text-4xl font-bold text-left mb-2 sm:mb-8"
        >
          BRANDING <span className="font-medium">&nbsp;SOLUTIONS</span>
        </CrescentHeader>

  <p className="text-sm sm:text-lg md:text-xl font-bold text-center max-w-4xl mx-auto mb-2 sm:mb-6 px-1 -mt-16 sm:mt-0">
          Our branding solutions encompass all stages of brand development,
          including concept creation, visual identity design, storytelling, and
          asset production.
        </p>

  <div className="-mt-16 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-0 sm:gap-y-2 md:gap-y-8 gap-x-0 sm:gap-x-4 md:gap-x-16 max-w-4xl mx-auto min-h-0 overflow-visible">
          <ul className="space-y-0.5 sm:space-y-2 md:space-y-6">
            <li>
              <CustomCard
                title="Concept Creation"
                titleClassName="text-base sm:text-2xl"
                textClassName="text-xs sm:text-sm"
              >
                Shaping your brand’s essence and positioning
              </CustomCard>
            </li>
            <li>
              <CustomCard
                title="Brand Identity"
                titleClassName="text-base sm:text-2xl"
                textClassName="text-xs sm:text-sm"
              >
                Creating logos, colors, typography, and design systems
              </CustomCard>
            </li>
            <li>
              <CustomCard
                title="Storyboard & Creative Direction"
                titleClassName="text-base sm:text-2xl"
                textClassName="text-xs sm:text-sm"
              >
                Planning visual narratives for campaigns and videos.
              </CustomCard>
            </li>
          </ul>

          <ul className="space-y-0.5 sm:space-y-2 md:space-y-6">
            <li>
              <CustomCard
                title="Narrative & Storytelling"
                titleClassName="text-base sm:text-2xl"
                textClassName="text-xs sm:text-sm"
              >
                Building a brand story that resonates with your audience
              </CustomCard>
            </li>
            <li>
              <CustomCard
                title="Content Creation"
                titleClassName="text-base sm:text-2xl"
                textClassName="text-xs sm:text-sm"
              >
                Designing consistent, high-impact visuals.
              </CustomCard>
            </li>
            <li>
              <CustomCard
                title="Production"
                titleClassName="text-base sm:text-2xl"
                textClassName="text-xs sm:text-sm"
              >
                Delivering print and digital materials for all touch points.
              </CustomCard>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
