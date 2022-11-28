import { Route, Routes } from 'react-router-dom';
import BetLines from '../components/BetLines';
import DropdownBox from '../components/DropdownBox';
import UpperBetPanel from '../components/UpperBetPanel';
import { useAppSelector as useSelector } from '../redux';
import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronLeftIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import { betSlice, selectFilteredBets } from '../redux/slices/betSlice';

const Sportbook = () => {
  const event = useSelector((state) => state.meta.currentEvent);
  const bets = useSelector(selectFilteredBets);

  const handleClick = () => {};

  return (
    <div>
      <div className='flex justify-between items-center h-14 px-2 bg-black'>
        <div className='flex items-center gap-x-4'>
          <Bars3Icon className='w-8 h-8 scale-y-125  text-white' />
          <p className='text-white text-xs'>EN VIVO</p>
        </div>
        <span className='w-7 h-7 rounded bg-red-600'></span>
        <div className='flex items-center gap-x-4'>
          <div className='flex flex-col items-center'>
            <UserCircleIcon className='w-7 h-7 stroke-green-700' />
            <p className='text-white text-[10px]'>$ 4500</p>
          </div>
          <DocumentTextIcon className='w-8 h-8 stroke-white' />
        </div>
      </div>

      <div className='flex gap-x-2  py-4 pl-2'>
        {[...new Array(8)].map(() => {
          return (
            <span className='block w-11 h-11 rounded-full bg-red-100 border-gray-300 border-2'></span>
          );
        })}
      </div>

      <div className='h-6 bg-[#aeaeae] text-sm'>
        <p className='leading-[24px]'>FUTBOL</p>
      </div>

      <div className='flex justify-between items-center h-[60px] px-5 bg-[#919191]'>
        <span>
          <ChevronLeftIcon className='w-6 h-6' />
        </span>
        <p className='text-lg uppercase text-white'>{event}</p>
        <span>
          <ChevronDownIcon className='w-6 h-6' />
        </span>
      </div>

      <div className='flex justify-between items-center h-[60px] px-5 bg-[#919191]'>
        <p className='text-lg text-gray-500'>Miercoles, 24 Nov 2021 17:00:00</p>
        {/* <p className='text-lg text-gray-500'>Miercoles, 24 Nov 2021 17:00:00</p> */}
      </div>

      <div className='flex items-center h-[70px] px-6 bg-[#F1F1F1]'>
        <p className='pr-2 text-[#A60000] text-xl italic font-bold'>
          &#43; CREA TU APUESTA
        </p>
        <InformationCircleIcon className='w-6 h-6 mr-auto text-[#919191]' />
        <span className='relative w-[42px] h-[26px] rounded-full bg-[#A60000]'>
          <span className='absolute top-[50%] right-0 w-[20px] h-[20px] translate-x-[3px] -translate-x-[3px] -translate-y-1/2 rounded-full bg-white'></span>
        </span>
      </div>

      <div className='flex items-center pl-[19px] h-[51px]'>
        <ul className='flex gap-x-[41px] text-[16px] font-normal'>
          <li className='text-[#A60000]'>Popular</li>
          <li>Partido</li>
          <li>Equipos</li>
          <li>Goles</li>
          <li>Jugadores</li>
        </ul>
      </div>

      {/* <div className=''> */}
      {/* <UpperBetPanel title={'GANADOR'} /> */}
      <div>
        <DropdownBox title={'GANADOR'} isCta>
          <BetLines
            market={'GANADOR'}
            lines={[
              ['1', '-118'],
              ['X', '+270'],
              ['2', '+300'],
            ]}
            isVerticallyStacked={false}
          />
        </DropdownBox>
        {/* </div> */}

        {/* <div className=''> */}
        {/* <UpperBetPanel title={'AMBOS EQUIPOS ANOTAN'} /> */}
        <DropdownBox title={'AMBOS EQUIPOS ANOTAN'} isCta>
          <BetLines
            market={'AMBOS EQUIPOS ANOTAN'}
            lines={[
              ['SI', '-130'],
              ['NO', '+100'],
            ]}
            isVerticallyStacked={true}
          />
        </DropdownBox>
        {/* </div> */}

        {/* <div className=''>
        <UpperBetPanel title={'DOBLE OPORTUNIDAD'} /> */}
        <DropdownBox title={'DOBLE OPORTUNIDAD'} isCta>
          <BetLines
            market={'DOBLE OPORTUNIDAD'}
            lines={[
              ['PUMAS UNAM/EMPATE', '-200'],
              ['PUMAS UNAM/AMÉRICA', '-400'],
              ['AMÉRICA/EMPATE', '-264'],
            ]}
            isVerticallyStacked={true}
          />
        </DropdownBox>
        {/* </div> */}

        {/* <div className=''>
        <UpperBetPanel title={'EMPATE NO ACCIÓN'} /> */}
        <DropdownBox title={'EMPATE NO ACCIÓN'} isCta>
          <BetLines
            market={'EMPATE NO ACCIÓN'}
            lines={[
              ['1', '-270'],
              ['2', '+187'],
            ]}
            isVerticallyStacked={false}
          />
        </DropdownBox>
      </div>

      {bets.length > 1 && (
        <div className='flex items-center gap-x-3 h-[62.5px] px-[22px] bg-[#333333]'>
          <span className='w-8 h-8 rounded-full bg-[#1EB500] text-white text-center leading-[32px]'>
            {bets.length}
          </span>
          <button className='mr-auto text-white' onClick={handleClick}>
            CREA TU APUESTA
          </button>
          <span className='h-8 px-[13px] rounded-full bg-[#1EB500] text-white'>
            ramile
          </span>
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default Sportbook;
