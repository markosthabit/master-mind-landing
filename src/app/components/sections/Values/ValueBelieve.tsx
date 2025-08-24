
import SectionWrapper from "../../SectionWrapper";


export default function ValueBelieve() {
  return (
    <SectionWrapper id="values-believe">
      <div
        className="py-10 px-4 sm:py-14 sm:px-8 md:py-16 md:px-16 scrollbar-modern"
        style={{
          background: ` var(--color-darkBlue) `,
          color: 'var(--color-softWhite)'
        }}
      >
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
          <h1
            className="font-bold mb-8 sm:mb-10 md:mb-12"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            We believe in
          </h1>

          {/* Main Value Statement */}
          <p
            className="leading-relaxed mb-8 sm:mb-12 md:mb-14 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: 'var(--color-softWhite)',
              opacity: '0.9'
            }}
          >
            The integration of agile practices, compliance, and safety fosters sustainable
            growth, allowing organizations to compete while upholding ethical and legal
            responsibilities.
          </p>

          {/* Value Items */}
          <div className="space-y-2 sm:space-y-4 md:space-y-6">
            {/* Agile Methodologies */}
            <div
              className="leading-relaxed"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.25rem)' }}
            >
              <span style={{ color: 'var(--color-softWhite)', opacity: '0.9' }}>Embracing </span>
              <span
                className="font-semibold"
                style={{ color: 'var(--color-lightBlue)' }}
              >
                agile methodologies
              </span>
              <span style={{ color: 'var(--color-softWhite)', opacity: '0.9' }}>, to adapt quickly to changing environments and
                customer needs, ensuring that projects are delivered efficiently and effectively.</span>
            </div>

            {/* Compliance */}
            <div
              className="leading-relaxed"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.25rem)' }}
            >
              <span
                className="font-semibold"
                style={{ color: 'var(--color-lightBlue)' }}
              >
                Compliance
              </span>
              <span style={{ color: 'var(--color-softWhite)', opacity: '0.9' }}>, ensures that all processes and operations align with legal and
                regulatory requirements, safeguarding the organization against potential risks and
                liabilities.</span>
            </div>

            {/* Safety */}
            <div
              className="leading-relaxed"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.25rem)' }}
            >
              <span
                className="font-semibold"
                style={{ color: 'var(--color-lightBlue)' }}
              >
                Safety
              </span>
              <span style={{ color: 'var(--color-softWhite)', opacity: '0.9' }}>is paramount and integrating it into every aspect of work culture promotes a
                secure and healthy environment for employees. This not only protects the workforce
                but also enhances productivity and morale.</span>
            </div>
          </div>

          {/* Bottom Title */}
          <h3
            className="font-bold mt-10 sm:mt-12 md:mt-16"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              background: `linear-gradient(135deg, var(--color-lightBlue) 0%, var(--color-lightPurple) 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Agility Compliance Safety
          </h3>
        </div>
      </div>
    </SectionWrapper>
  );
}