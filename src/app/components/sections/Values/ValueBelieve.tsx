
import SectionWrapper from "../../SectionWrapper";


export default function ValueBelieve() {
  return (
    <SectionWrapper id="values-believe">
      <div 
        className="py-16 px-6 scrollbar-modern"
        style={{ 
          background: ` var(--color-darkBlue) `,
          color: 'var(--color-softWhite)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
        
        <h1 
          className="font-bold mb-12"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
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
          className="leading-relaxed mb-16 max-w-3xl mx-auto"
          style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            color: 'var(--color-softWhite)',
            opacity: '0.9'
          }}
        >
          The integration of agile practices, compliance, and safety fosters sustainable 
          growth, allowing organizations to compete while upholding ethical and legal 
          responsibilities.
        </p>
        
        {/* Value Items */}
        <div className="space-y-12">
          {/* Agile Methodologies */}
          <div 
            className="leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
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
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
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
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
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
          className="font-bold mt-16"
          style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
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