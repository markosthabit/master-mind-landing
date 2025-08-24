import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
export default function Home() {
  return (
    <SectionWrapper id="home" className="relative w-screen overflow-hidden" >
    {/* Right Overlay */}
      <Image
        src="/images/comma.webp"
        alt=""
        width={256}
        height={256}
        className="absolute top-17/32 right-4/32 object-contain pointer-events-none z-10 "
      />
      <Image
        src="/images/sparse-object.webp"
        alt=""
        width={1024}
        height={1024}
        className="absolute -top-4/32 -right-16/32 object-cover pointer-events-none z-10"
      />
      {/* Left Overlay */}
      <Image
        src="/images/sparse-object.webp"
        alt=""
        width={1024}
        height={1024}
        className="absolute -top-11/32 -left-14/32 object-cover pointer-events-none z-10"
      />
      <Image
        src="/images/comma.webp"
        alt=""
        width={256}
        height={256}
        className="absolute top-10/32 left-3/32 object-contain pointer-events-none z-10 transform -scale-x-100 "
      />
      <h1 className="text-8xl font-bold z-20 ">
        SMART
        <span className="font-light"> STRATEGIES,</span>
        <br />
        BRILLIANT
        <span className="font-light"> RESULTS</span>
      </h1>
    </SectionWrapper>
  );
}
