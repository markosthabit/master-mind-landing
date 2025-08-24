import Image from 'next/image';
import { ComponentProps, ElementType } from 'react';

interface CrescentHeaderProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
}

const CrescentHeader = ({ 
  as: Tag = 'h1', 
  children, 
  className = '', 
  ...props 
}: CrescentHeaderProps & ComponentProps<'h1'>) => {
  return (
    <div className="relative w-full" style={{ height: '164px' }}> {/* Fixed height matching image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0">
        <Image 
          src="/images/crescent-moon.webp"
          alt="Crescent Moon"
          width={164} 
          height={164} 
          className="object-contain w-16 h-16 md:w-[164px] md:h-[164px]"
        />
      </div>
      <div className="relative z-10 pl-8 md:pl-12 h-full flex items-center"> {/* Full height container */}
        <Tag 
          className={`m-0 ${className}`} // Remove default margins
          {...props}
        >
          {children}
        </Tag>
      </div>
    </div>
  );
};

export default CrescentHeader;