import Image from "next/image";
// components/sections/Contact.tsx
export default function Contact() {
  return (
    
    <div className="relative text-left w-28/32 h-28/32 space-y-4 rounded-4xl bg-linear-65 from-darkPurple to-mediumPurple p-32 overflow-hidden ">
      {/* Overlay  Right */}
      <Image
        src="/images/phone-mind.png"
        alt=""
        width={216}
        height={216}
        className="absolute top-5/32 right-4/32 object-cover pointer-events-none z-30"
      />
      <Image
        src="/images/large-left-overlay.png"
        alt=""
        width={1200}
        height={728}
        className="absolute right-1/32 bottom-10/32 object-contain  pointer-events-none"
      />
      {/* Ovelay Left */}
      <Image
        src="/images/cloud-rainbow.png"
        alt=""
        width={728}
        height={728}
        className="absolute -top-14/32 -left-8/32 object-contain pointer-events-none z-10"
      />
      <Image
        src="/images/logo.png"
        alt=""
        width={50}
        height={50}
        className="absolute bottom-1/32 left-3/32 object-contain pointer-events-none z-10"
      />

      <h1 className="text-5xl font-bold text-softWhite">Get in Touch</h1>
      <div className="grid grid-flow-col gird-cols-2 w-3/4">
        <ul className="col-span-1">
          <li className="p-8">
            <h2 className="text-2xl font-bold">Phone Number</h2>
            <p>+965 9979 55 98</p>
          </li>
          <li className="p-8">
            <h2 className="text-2xl font-bold">Website</h2>
            <p>www.mastermindmina.com</p>
          </li>
        </ul>
        <ul className="col-span-1">
          <li className="p-8">
            <h2 className="text-2xl font-bold">Email</h2>
            <p>info@mastermindmina.com</p>
          </li>
          <li className="p-8">
            <h2 className="text-2xl font-bold">Social Media</h2>
            <p>@mastermindmina</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
