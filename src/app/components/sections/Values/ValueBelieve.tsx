import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";

export default function ValueBelieve() {
  return (
    <SectionWrapper id="values-believe">
      {/* Overlay Right */}
      <Image
        src="/images/top-right-overlay.webp"
        alt=""
        width={728}
        height={728}
        className="absolute -top-64 -right-64 object-contain pointer-events-none -z-10"
      />
      {/* Overlay Left */}
      <Image
        src="/images/large-left-overlay.webp"
        alt=""
        width={2400}
        height={2400}
        className="absolute right-10/16 -top-5/8 object-contain pointer-events-none -z-10"
      />

      <div className="py-8 px-4 sm:py-12 sm:px-8 md:py-14 md:px-16 scrollbar-modern">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
          {/* Top Title */}
          <h1
            className="font-bold mb-5 sm:mb-7 md:mb-8"
            style={{
              fontSize: "clamp(1.5rem, 4.5vw, 2.75rem)", // smaller max
              lineHeight: "1.2",
              background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            We believe in
          </h1>

          {/* Main Value Statement */}
          <p
            className="leading-relaxed mb-5 sm:mb-7 md:mb-9 lg:mb-10 mx-auto"
            style={{
              fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)", // smaller text
              color: "var(--color-softWhite)",
              opacity: "0.9",
              maxWidth: "50ch",
            }}
          >
            The integration of agile practices, compliance, and safety fosters
            sustainable growth, allowing organizations to compete while
            upholding ethical and legal responsibilities.
          </p>

          {/* Value Items */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Agile Methodologies */}
            <div
              className="leading-relaxed"
              style={{ fontSize: "clamp(0.85rem, 1.7vw, 1rem)" }}
            >
              <span style={{ color: "var(--color-softWhite)", opacity: "0.9" }}>
                Embracing{" "}
              </span>
              <span
                className="font-semibold"
                style={{ color: "var(--color-lightBlue)" }}
              >
                agile methodologies
              </span>
              <span style={{ color: "var(--color-softWhite)", opacity: "0.9" }}>
                , to adapt quickly to changing environments and customer needs,
                ensuring that projects are delivered efficiently and
                effectively.
              </span>
            </div>

            {/* Compliance */}
            <div
              className="leading-relaxed"
              style={{ fontSize: "clamp(0.85rem, 1.7vw, 1rem)" }}
            >
              <span
                className="font-semibold"
                style={{ color: "var(--color-lightBlue)" }}
              >
                Compliance
              </span>
              <span style={{ color: "var(--color-softWhite)", opacity: "0.9" }}>
                , ensures that all processes and operations align with legal and
                regulatory requirements, safeguarding the organization against
                potential risks and liabilities.
              </span>
            </div>

            {/* Safety */}
            <div
              className="leading-relaxed"
              style={{ fontSize: "clamp(0.85rem, 1.7vw, 1rem)" }}
            >
              <span
                className="font-semibold"
                style={{ color: "var(--color-lightBlue)" }}
              >
                Safety
              </span>
              <span style={{ color: "var(--color-softWhite)", opacity: "0.9" }}>
                {" "}
                is paramount and integrating it into every aspect of work
                culture promotes a secure and healthy environment for employees.
                This not only protects the workforce but also enhances
                productivity and morale.
              </span>
            </div>
          </div>

          {/* Bottom Title */}
          <h3
            className="font-bold mt-9 sm:mt-11 md:mt-12"
            style={{
              fontSize: "clamp(1.1rem, 3vw, 2rem)", // reduced max
              lineHeight: "1.25",
              background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Agility • Compliance • Safety
          </h3>
        </div>
      </div>
    </SectionWrapper>
  );
}
