import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
export default function ValueEngage() {
  return (
    <SectionWrapper id="healthcare-engagement">
      <div className="py-8 px-6 scrollbar-modern relative">
        <Image
          src="/images/left-overlay.png"
          alt=""
          width={700}
          height={700}
          className="absolute right-23/32 -top-1/8 object-contain pointer-events-none -z-50"
        />
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Heading */}
            <div className="text-left">
              <h1
                className="font-bold leading-tight"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                }}
              >
                <span style={{ color: "var(--color-softWhite)" }}>We </span>
                <span style={{ color: "var(--color-softWhite)" }}>engage</span>
                <br />
                <span style={{ color: "var(--color-softWhite)" }}>with </span>
                <span
                  style={{
                    background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  patients
                </span>
                <br />
                <span style={{ color: "var(--color-softWhite)" }}>and</span>
                <br />
                <span
                  style={{
                    background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  customers
                </span>
                <span style={{ color: "var(--color-softWhite)" }}> at</span>
                <br />
                <span style={{ color: "var(--color-softWhite)" }}>various</span>
                <br />
                <span
                  style={{
                    background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  stages of
                </span>
                <br />
                <span
                  style={{
                    background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  their journey.
                </span>
              </h1>
            </div>

            {/* Right Side - Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Patient Card */}
              <div className="text-left">
                <h3
                  className="font-bold mb-4"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2rem)",
                    color: "var(--color-lightBlue)",
                  }}
                >
                  Patient
                </h3>
                <p
                  className="leading-relaxed border-l-4 p-2 border-lightBlue"
                  style={{
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                    color: "var(--color-softWhite)",
                    opacity: "0.9",
                  }}
                >
                  We focus on the patient in everything we do, ensuring our
                  efforts align with their unique healthcare journey and provide
                  compassionate, effective support.
                </p>
              </div>

              {/* Physician Card */}
              <div className="text-left">
                <h3
                  className="font-bold mb-4"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2rem)",
                    color: "var(--color-lightBlue)",
                  }}
                >
                  Physician
                </h3>
                <p
                  className="leading-relaxed border-l-4 p-2 border-lightBlue"
                  style={{
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                    color: "var(--color-softWhite)",
                    opacity: "0.9",
                  }}
                >
                  We collaborate closely with physicians to support holistic
                  care by improving communication, enhancing clinical efforts,
                  and providing tools that boost diagnostic accuracy and patient
                  involvement.
                </p>
              </div>

              {/* Educator Card */}
              <div className="text-left">
                <h3
                  className="font-bold mb-4"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2rem)",
                    color: "var(--color-lightBlue)",
                  }}
                >
                  Educator
                </h3>
                <p
                  className="leading-relaxed border-l-4 p-2 border-lightBlue"
                  style={{
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                    color: "var(--color-softWhite)",
                    opacity: "0.9",
                  }}
                >
                  We support healthcare educators by offering aligned content,
                  resources, and events that help simplify information and
                  improve patient understanding.
                </p>
              </div>

              {/* Pharmacist Card */}
              <div className="text-left">
                <h3
                  className="font-bold mb-4"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2rem)",
                    color: "var(--color-lightBlue)",
                  }}
                >
                  Pharmacist
                </h3>
                <p
                  className="leading-relaxed border-l-4 p-2 border-lightBlue"
                  style={{
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                    color: "var(--color-softWhite)",
                    opacity: "0.9",
                  }}
                >
                  We understand pharmacists are key in patient education and
                  adherence. Our programs integrate smoothly into pharmacies,
                  providing tools that strengthen pharmacist-patient connections
                  and ensure continuous care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
