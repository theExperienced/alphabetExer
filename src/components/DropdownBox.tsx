import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../redux';
import { setBet } from '../redux/slices/betSlice';
import BetBuilder from './BetBuilder';
import CTAButton from './CTAButton';
import SingleBet from './SingleBet';

type DropdownBoxProps = {
  title: string;
  children: JSX.Element;
  isCta?: boolean;
  bgColor?: string;
};

const flitizi = {
  event: 'gugi 0',
  market: 'gugi 01',
  line: 'gugi 011',
  stake: 'gugi 0111',
};

const DropdownBox: React.FC<DropdownBoxProps> = ({
  title,
  children,
  isCta,
  bgColor,
}) => {
  const [isDropped, setDropped] = useState(false);
  // const selected = useSelector((state) => state.bets.selected[title]);
  // const dispatch = useDispatch();

  const handleDrop = () => {
    setDropped((prev) => !prev);
  };
  const handleClick = () => {};

  return (
    <div
    // className={`  justify-between gap-[10.5px] px-[11.5px] py-[10px] bg-[#F1F1F1]`}
    >
      <div
        className='flex items-center gap-x-2 w-full h-[35px] px-[11.5px] bg-[#A60000]'
        onClick={handleDrop}
      >
        <ChevronDownIcon className='w-4 stroke-white' />
        <p className='mr-auto text-[15px] text-white'>{title}</p>
        {isCta && <CTAButton />}
      </div>
      <div
        className={`${
          isDropped ? 'auto opacity-100 visible' : 'h-0 opacity-0 invisible'
        }   transition-all`}
      >
        {children}
        {/* {isSingleBet ? <SingleBet {...flitizi} /> : <BetBuilder />} */}
      </div>
    </div>
  );
};

export default DropdownBox;
