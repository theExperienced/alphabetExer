import React from 'react';

type UpperBetPanelProps = { title: string };

const UpperBetPanel: React.FC<UpperBetPanelProps> = ({ title }) => {
  const handleClick = (e: React.MouseEvent) => {};

  return (
    <div className='flex justify-between items-center h-[44px] bg-[#A60000] px-[11.5px]'>
      <div className=' text-[15px] text-white'>{title}</div>
      <div className='h-[17px] px-1 bg-[#F1F1F1] skew-x-[-12deg]'>
        <button className='flex h-full items-center justify-center text-[#A60000] font-semibold' onClick={handleClick}>CTA</button>
      </div>
    </div>
  );
};

export default UpperBetPanel;
