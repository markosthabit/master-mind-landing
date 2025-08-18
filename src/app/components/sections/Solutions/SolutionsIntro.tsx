// Solutions.jsx (Updated for responsiveness)
import CrescentHeader from "../../CrescentHeader";

export default function Solutions() {
  return (
    <div className="text-center space-y-4">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-7xl font-bold text-lightBlue">
          <span className="font-light">OUR </span>
          SOLUTIONS
        </h1>
        <p className="text-base sm:text-lg text-softWhite mx-auto pt-4 sm:pt-8">
          Comprehensive Solutions for 
          <span className="font-bold"> Healthcare & Pharmaceutical companies</span>
        </p>
      </div>
      
      <div className="pt-8 sm:pt-16">
        <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-x-8 md:gap-x-48 gap-y-16 md:gap-y-36">
          <li className="w-[150px] sm:w-[200px] md:w-[250px]"> {/* Responsive widths */}
            <CrescentHeader as="h2" className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
              BRANDING
            </CrescentHeader>
          </li>
          
          <li className="w-[150px] sm:w-[200px] md:w-[250px]">
            <CrescentHeader as="h2" className="text-xl sm:text-2xl md:text-3xl font-bold text-left">
              INTERACTIVE <br />MEDIA
            </CrescentHeader>
          </li>
          
          <li className="w-[150px] sm:w-[200px] md:w-[250px]">
            <CrescentHeader as="h2" className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
              OMNICHANNEL
            </CrescentHeader>
          </li>
          
          <li className="w-[150px] sm:w-[200px] md:w-[250px]">
            <CrescentHeader as="h2" className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
              MEDCOM
            </CrescentHeader>
          </li>
          
          <li className="w-[150px] sm:w-[200px] md:w-[250px]">
            <CrescentHeader as="h2" className="text-xl sm:text-2xl md:text-3xl font-bold text-left">
              EVENTS <br /> MANAGEMENT
            </CrescentHeader>
          </li>
        </ul>
      </div>
    </div>
  );
}