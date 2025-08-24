import SectionWrapper from "../../SectionWrapper";

export default function ValueEngage() {
  return (
    <SectionWrapper id="healthcare-engagement">
      <div
        className="py-10 px-4 sm:py-14 sm:px-8 md:py-16 md:px-16 scrollbar-modern"
        style={{
          background: ` var(--color-darkBlue)`,
          color: 'var(--color-softWhite)'
        }}
      >
        <div className="max-w-2xl sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Main Heading */}
            <div className="text-left mb-8 lg:mb-0">
              <h1
                className="font-bold leading-tight"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                }}
              >
                <span style={{ color: 'var(--color-softWhite)' }}>We </span>
                <span style={{ color: 'var(--color-softWhite)' }}>engage</span>
                <br />
                <span style={{ color: 'var(--color-softWhite)' }}>with </span>
                <span
                  style={{
                    background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  patients
                </span>
                <br />
                <span style={{ color: 'var(--color-softWhite)' }}>and</span>
                <br />
                <span
                  style={{
                    background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  customers
                </span>
                <span style={{ color: 'var(--color-softWhite)' }}> at</span>
                <br />
                <span style={{ color: 'var(--color-softWhite)' }}>various</span>
                <br />
                <span
                  style={{
                    background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  stages of
                </span>
                <br />
                <span
                  style={{
                    background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  their journey.
                </span>
              </h1>
            </div>

            {/* Right Side - Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {/* Patient Card */}
              <div className="text-left">
                <h3
                  className="font-bold mb-2 sm:mb-4"
                  style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
                    color: 'var(--color-lightBlue)'
                  }}
                >
                  Patient
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                    color: 'var(--color-softWhite)',
                    opacity: '0.9'
                  }}
                >
                  We focus on the patient in everything we do, ensuring our efforts align with their unique healthcare journey and provide compassionate, effective support.
                </p>
              </div>

              {/* Physician Card */}
              <div className="text-left">
                <h3
                  className="font-bold mb-2 sm:mb-4"
                  style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
                    color: 'var(--color-lightBlue)'
                  }}
                >
                  Physician
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                    color: 'var(--color-softWhite)',
                    opacity: '0.9'
                  }}
                >
                  We collaborate closely with physicians to support holistic care by improving communication, enhancing clinical efforts, and providing tools that boost diagnostic accuracy and patient involvement.
                </p>
              </div>

              {/* Educator Card */}
              <div className="text-left">
                <h3
                  className="font-bold mb-2 sm:mb-4"
                  style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
                    color: 'var(--color-lightBlue)'
                  }}
                >
                  Educator
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                    color: 'var(--color-softWhite)',
                    opacity: '0.9'
                  }}
                >
                  We support healthcare educators by offering aligned content, resources, and events that help simplify information and improve patient understanding.
                </p>
              </div>

              {/* Pharmacist Card */}
              <div className="text-left">
                <h3
                  className="font-bold mb-2 sm:mb-4"
                  style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
                    color: 'var(--color-lightBlue)'
                  }}
                >
                  Pharmacist
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                    color: 'var(--color-softWhite)',
                    opacity: '0.9'
                  }}
                >
                  We understand pharmacists are key in patient education and adherence. Our programs integrate smoothly into pharmacies, providing tools that strengthen pharmacist-patient connections and ensure continuous care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}