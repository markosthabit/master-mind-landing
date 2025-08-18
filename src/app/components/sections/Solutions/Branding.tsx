import SectionWrapper from "../../SectionWrapper";
import CrescentHeader from "./CrescentHeader";
import CustomCard from "./CustomCard";

export default function Branding() {
  return (
    <SectionWrapper id="solution-branding">
      <div className="container mx-auto px-4">
        <CrescentHeader as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-left">
          BRANDING <span className="font-medium">&nbsp;SOLUTIONS</span>
        </CrescentHeader>
        
        <p className="text-base sm:text-lg md:text-xl font-bold text-center max-w-4xl mx-auto ">
          Our branding solutions encompass all stages of brand development, including concept creation, visual identity design, storytelling, and asset production.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 max-w-4xl mx-auto  ">
          <ul className="space-y-6">
            <li>
              <CustomCard
                title="Concept Creation" 
                titleClassName="text-2xl"
                textClassName="text-sm"
              >  
                Shaping your brand’s essence and positioning
              </CustomCard>
            </li>
            <li>
              <CustomCard
                title="Brand Identity" 
                titleClassName="text-2xl"
                textClassName="text-sm"
              >  
              Creating logos, colors, typography, and design systems
              </CustomCard>
            </li>
            <li>
              <CustomCard
                title="Storyboard & Creative Direction" 
                titleClassName="text-2xl"
                textClassName="text-sm"
              >  
                Planning visual narratives for campaigns and videos.
              </CustomCard>
            </li>
          </ul>
          
          <ul className="space-y-6">
            <li>
              <CustomCard
                title="Narrative & Storytelling" 
                titleClassName="text-2xl"
                textClassName="text-sm"
              >  
              Building a brand story that resonates with your audience
              </CustomCard>
            </li>
            <li>
              <CustomCard
                title="Content Creation" 
                titleClassName="text-2xl"
                textClassName="text-sm"
              >  
                Designing consistent, high-impact visuals.
              </CustomCard>
            </li>
            <li>
              <CustomCard
                title="Production" 
                titleClassName="text-2xl"
                textClassName="text-sm"
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