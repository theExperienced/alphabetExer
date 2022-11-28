type CTAButtonProps = {
  isInversed?: boolean;
};

const CTAButton: React.FC<CTAButtonProps> = ({ isInversed }) => {
  const handleClick = () => {};

  return (
    <div
      className={`h-[17px] px-1 rounded-sm ${
        isInversed ? 'bg-[#A60000]' : 'bg-[#F1F1F1]'
      } skew-x-[-12deg]`}
    >
      <button
        className={`flex h-full items-center justify-center text-xs ${
          isInversed ? 'text-[#F1F1F1]' : 'text-[#A60000]'
        }  font-extrabold`}
        onClick={handleClick}
      >
        CTA
      </button>
    </div>
  );
};

export default CTAButton;
