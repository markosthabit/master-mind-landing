// CrescentHeader.jsx (Updated for responsiveness)
import Image from 'next/image';

const CrescentHeader = ({ 
  as: Tag = 'h1', 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="relative inline-block w-full">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0">
        <Image 
          src="/images/crescent-moon.png"
          alt="Crescent Moon"
          width={164} 
          height={164} 
          className="object-contain w-16 h-16 md:w-[164px] md:h-[164px]" // Responsive sizing
        />
      </div>
      <Tag 
        className={`relative z-10 pl-8 md:pl-12 min-h-[60px] md:min-h-[100px] flex items-center ${className}`} // Responsive padding and min-height
        {...props}
      >
        {children}
      </Tag>
    </div>
  );
};

export default CrescentHeader;