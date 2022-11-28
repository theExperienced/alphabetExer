import { useState } from 'react';
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../redux';
import { setBet } from '../redux/slices/betSlice';
import {
  TrashIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from '@heroicons/react/24/solid';
type SingleBetProps = {
  market: string;
  line: string;
  stake: string;
};

const SingleBet: React.FC<SingleBetProps> = ({ market, line, stake }) => {
  const event = useSelector((state) => state.meta.currentEvent);
  const dispatch = useDispatch();

  const handleDrop = () => {};

  return (
    <div className='pt-[8.5px] px-2 pb-2'>
      {/* //probably doesnt neet rows */}
      {/* <div className='grid grid-rows-betSlip grid-cols-betSlip'> */}
      <div className='flex'>
        <div className='grow'>
          <p className='text-[11px] font-medium'>{`${line} - ${market}${event}`}</p>
          <div>
            <button>
              <MinusCircleIcon />
            </button>
            <div>
              <label className='mr-1 font-bold text-sm'>$</label>
              <input className='border-2 border-gray-500' />
            </div>
            <button>
              <PlusCircleIcon className='text-black bg-red' />
            </button>
          </div>
        </div>

        <div className=' flex flex-col items-end gap-y-2 pt-3 text-right'>
          <TrashIcon className='w-6 h-6 fill-[#D1D1D1]' />
          <p className='font-bold text-sm'>{stake}</p>
        </div>
      </div>
      <div className='border-[#E4AB12] border-[3px]'>
        <p className='text-[10px] py-2 text-center font-bold'>
          Una apuesta sencilla de $ {200} te paga $ {100} 
        </p>
      </div>
    </div>

    // <div
    // // className={`  justify-between gap-[10.5px] px-[11.5px] py-[10px] bg-[#F1F1F1]`}
    // >
    //   <div className='w-full h-[35px] bg-[#A60000]' onClick={handleDrop}>
    //     ssss
    //   </div>
    //   <div
    //     className={`${
    //       isDropped ? 'h-[235px]' : 'h-[0px]'
    //     } bg-black transition-all`}
    //   >
    //     <div>
    //     {isSingleBet? <}

    //       {' '}
    //       <button
    //         className='flex h-full items-center justify-center text-[#A60000] font-semibold'
    //         onClick={handleClick}
    //       >
    //         CTA
    //       </button>
    //     </div>{' '}
    //     {/* <p>{numOfSelections}</p> */}
    //   </div>
    // </div>
  );
};

export default SingleBet;
