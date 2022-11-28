import { MinusCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../redux';
import { selectFilteredBets, setBet } from '../redux/slices/betSlice';
import CTAButton from './CTAButton';

const BetBuilder: React.FC = () => {
  const bets = useSelector(selectFilteredBets);
  const event =useSelector((state) => state.meta.currentEvent);

  return (
    <div
    // className={`  justify-between gap-[10.5px] px-[11.5px] py-[10px] bg-[#F1F1F1]`}
    >
      <div
        className={`flex items-center gap-[10.5px] px-[11.5px] py-[10px] bg-white`}
      >
       <CTAButton isInversed/>
        <p>
          {bets.length} Seleccion{`${bets.length !== 1 ? 'es' : ''}`}
        </p>
      </div>
      <div className='grid-cols-betSlip'>
        <div
          className={`justify-between gap-[10.5px] px-[11.5px] py-[10px] bg-[#F1F1F1]`}
        >
          <p className='font-semibold'>{event}</p>
          <p>total stake</p>
        </div>
        <div>
          {bets.map(({market, line}) => (
            <div
              className={`justify-between gap-[10.5px] px-[11.5px] py-[10px] bg-[#F1F1F1]`}
            >
              <span className='mr-[12px]'>
                <MinusCircleIcon className='w-5 h-5'/>
              </span>
              <p className='font-medium'>{line}<span className='text-[#919191] font-normal'>{market}</span></p>
             
            </div>
          ))}
        </div>
        <div>TRASH</div>
      </div>
    </div>
  );
};

export default BetBuilder;
//  [&:nth-child(3)]:after:
