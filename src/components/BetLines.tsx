import { useState } from 'react';
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../redux';
import { setBet } from '../redux/slices/betSlice';

type BetLinesProps = {
  market: string;
  lines: string[][];
  isVerticallyStacked: boolean;
};

const BetLines: React.FC<BetLinesProps> = ({
  market,
  lines,
  isVerticallyStacked,
}) => {
  const marketIndex = useSelector((state) => state.bets.marketsOrder[market]);
  const bet = useSelector((state) => state.bets.bets[marketIndex]);
  console.log("🚀 ~ file: BetLines.tsx ~ line 21 ~ bet", bet)

  const dispatch = useDispatch();

  const handleClick = (line: string, stake: string) => {
    console.log("🚀 ~ file: BetLines.tsx ~ line 25 ~ handleClick ~ line", line)
    if (!bet || bet.line !== line) {
      console.log("🚀 ~ file: BetLines.tsx ~ line 26 ~ handleClick ~ line", line)
      dispatch(setBet({ market, line, stake }));
    }
  };

  return (
    <div
      className={`flex ${
        isVerticallyStacked && 'flex-col'
      } justify-between gap-[10.5px] px-[11.5px] py-[10px] bg-[#F1F1F1]`}
    >
      {lines.map(([line, stake]) => {
        console.log(
          '🚀 ~ file: BetLines.tsx ~ line 51 ~ {lines.map ~ selected === line',
          bet?.line === line
        );
        return (
          <div className={`h-${isVerticallyStacked ? '[42px]' : '12'} grow`}>
            <button
              className='flex w-full h-full'
              onClick={(e) => handleClick(line, stake)}
            >
              <span
                className={`w-full h-full flex ${
                  isVerticallyStacked
                    ? 'justify-between'
                    : 'flex-col justify-center items-center'
                } ${
                  isVerticallyStacked ? 'px-[9.5px] py-[12.5px]' : 'py-[10.5px]'
                } ${bet?.line === line ? 'bg-[#e4ab12]' : 'bg-[#d1d1d1]'}`}
              >
                <span className='flex justify-center items-center'>{line}</span>
                <span className='flex justify-center items-center'>
                  {stake}
                </span>
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BetLines;
