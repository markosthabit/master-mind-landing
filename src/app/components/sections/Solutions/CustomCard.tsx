interface CustomCardProps {
  title: string;
  children: React.ReactNode;
  titleClassName?: string;
  textClassName?: string;
  className?: string;
}

const CustomCard = ({ 
  title, 
  children,
  titleClassName = '',
  textClassName = '',
  className = '',
  ...props 
}: CustomCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={` ${className}`} {...props}>
      <h3 className={`font-bold text-lightBlue ${titleClassName}`} >
        {title}
      </h3>
      <div className="flex items-center">        
        <p className={`text-softWhite font-extralight border-l-6 p-2 ${textClassName}`} style={{ width: '60%' }}>
          {children}
        </p>
      </div>
    </div>
  );
};

export default CustomCard;