import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";

export default function ValueBelieve() {
  return (
    <SectionWrapper id="values-believe">
      <div className="py-0 px-6 scrollbar-modern">
        {/* Overlay  Right */}
        <Image
          src="/images/top-right-overlay.png"
          alt=""
          width={728}
          height={728}
          className="absolute -top-64 -right-64 object-contain pointer-events-none"
        />
        {/* Overlay Left  */}
        <Image
          src="/images/large-left-overlay.png"
          alt=""
          width={2400}
          height={2400}
          className="absolute right-10/16 -top-5/8 object-contain pointer-events-none"
        />
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="font-bold mb-6 text-7xl"
            style={{
              background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            We believe in
          </h1>

          {/* Main Value Statement */}
          <p className="leading-relaxed mb-6 text-xl max-w-5xl mx-auto">
            The integration of agile practices, compliance, and safety fosters
            sustainable growth, allowing organizations to compete while
            upholding ethical and legal responsibilities.
          </p>

          {/* Value Items */}
          <div className="space-y-8">
            {/* Agile Methodologies */}
            <div
              className="leading-relaxed"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
            >
              <span style={{ color: "var(--color-softWhite)", opacity: "0.9" }}>
                Embracing{" "}
              </span>
              <span
                className="font-bold"
                style={{ color: "var(--color-lightBlue)" }}
              >
                Agile methodologies
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
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
            >
              <span
                className="font-bold"
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
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
            >
              <span
                className="font-bold"
                style={{ color: "var(--color-lightBlue)" }}
              >
                Safety&nbsp;
              </span>
              <span style={{ color: "var(--color-softWhite)", opacity: "0.9" }}>
                is paramount and integrating it into every aspect of work
                culture promotes a secure and healthy environment for employees.
                This not only protects the workforce but also enhances
                productivity and morale.
              </span>
            </div>
          </div>

          {/* Bottom Title */}
          <h3
            className="font-bold mt-6"
            style={{
              fontSize: "clamp(2rem, 6vw, 3rem)",
              background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Agility Compliance Safety
          </h3>
        </div>
      </div>
    </SectionWrapper>
  );
}
