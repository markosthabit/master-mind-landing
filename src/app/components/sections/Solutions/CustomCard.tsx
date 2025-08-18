const CustomCard = ({ 
  title, 
  children,
  titleClassName = '',
  textClassName = '',
  className = '',
  ...props 
}) => {
  return (
    <div className={` ${className}`} {...props}>
      <h3 className={`font-bold text-lightBlue ${titleClassName}`} >
        {title}
      </h3>
      <div className="flex items-center">
        <span className="font-light text-white mr-2 text-5xl leading-relaxed">|</span>
        
        <p className={`text-softWhite font-extralight ${textClassName}`} style={{ width: '50%' }}>
          {children}
        </p>
      </div>
    </div>
  );
};
export default CustomCard;