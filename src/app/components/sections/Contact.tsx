import Image from "next/image";

export default function Contact() {
  return (
    <div
      id="contact"
      className="relative text-left w-full max-w-7xl mx-auto space-y-4 md:space-y-6 lg:space-y-8 rounded-2xl md:rounded-3xl lg:rounded-4xl bg-linear-65 from-darkPurple to-mediumPurple p-4 md:p-8 lg:p-12 overflow-hidden min-h-[300px] md:min-h-[350px] lg:min-h-[400px]"
      style={{ scrollMarginTop: "4rem" }}
    >
      {/* Overlay Right - Phone Mind */}
      <Image
        src="/images/phone-mind.webp"
        alt=""
        width={160}
        height={160}
        className="absolute top-4 right-4 md:top-8 md:right-8 lg:top-5/32 lg:right-4/32 w-16 h-16 md:w-24 md:h-24 lg:w-auto lg:h-auto object-contain pointer-events-none z-30"
      />
      
      {/* Large Right Overlay */}
      <Image
        src="/images/large-left-overlay.webp"
        alt=""
        width={1200}
        height={728}
        className="absolute right-0 bottom-0 md:right-4 md:bottom-8 lg:right-1/32 lg:bottom-10/32 w-32 h-auto md:w-48 md:h-auto lg:w-auto lg:h-auto object-contain pointer-events-none opacity-30 md:opacity-50 lg:opacity-100"
      />
      
      {/* Cloud Rainbow Overlay */}
      <Image
        src="/images/cloud-rainbow.webp"
        alt=""
        width={728}
        height={728}
        className="absolute -top-4 -left-2 md:-top-8 md:-left-4 lg:-top-14/32 lg:-left-8/32 w-20 h-20 md:w-28 md:h-28 lg:w-auto lg:h-auto object-contain pointer-events-none z-10 opacity-40 md:opacity-60 lg:opacity-100"
      />
      
      {/* Logo */}
      <Image
        src="/images/logo.webp"
        alt=""
        width={50}
        height={50}
        className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:-bottom-1/32 lg:left-2/32 w-10 h-10 md:w-12 md:h-12 lg:w-auto lg:h-auto object-contain pointer-events-none z-10"
      />

      {/* Main Content */}
      <div className="relative z-40 pl-0 md:pr-[220px] lg:pr-[300px]">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-softWhite mb-6 md:mb-8 lg:mb-12 relative z-50">
          Get in Touch
        </h1>
        
        {/* Contact Info Grid */}
        <div className="w-full max-w-4xl relative z-50">
          {/* Mobile Layout - Single Column */}
          <div className="block md:hidden space-y-4">
            <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-softWhite mb-2">Phone Number</h2>
              <p className="text-softWhite/80">+965 9979 55 98</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-softWhite mb-2">Email</h2>
              <p className="text-softWhite/80">info@mastermindmina.com</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-softWhite mb-2">Website</h2>
              <p className="text-softWhite/80">www.mastermindmina.com</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-softWhite mb-2">Social Media</h2>
              <p className="text-softWhite/80">@mastermindmina</p>
            </div>
          </div>

          {/* Tablet & Desktop Layout - Two Columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-6 lg:space-y-8">
              <div className="p-4 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold text-softWhite mb-2">Phone Number</h2>
                <p className="text-softWhite/80 text-base lg:text-lg">+965 9979 55 98</p>
              </div>
              <div className="p-4 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold text-softWhite mb-2">Website</h2>
                <p className="text-softWhite/80 text-base lg:text-lg">www.mastermindmina.com</p>
              </div>
            </div>
            
            <div className="space-y-6 lg:space-y-8">
              <div className="p-4 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold text-softWhite mb-2">Email</h2>
                <p className="text-softWhite/80 text-base lg:text-lg">info@mastermindmina.com</p>
              </div>
              <div className="p-4 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold text-softWhite mb-2">Social Media</h2>
                <p className="text-softWhite/80 text-base lg:text-lg">@mastermindmina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}