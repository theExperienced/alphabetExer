import { Link, Route, Routes } from 'react-router-dom';
import Sportbook from './pages/Sportbook';
import BetSlip from './pages/BetSlip';
import { CogIcon } from '@heroicons/react/24/solid';
// import CellSignalIcon from './assets/cellSignal.svg';
// import WifiIcon from './assets/wifi.svg';
// import BatteryIcon from './assets/battery.svg';

const App = () => {
  return (
    <div className='overflow-x-hidden bg-white'>
      <div className='flex items-center text-lg font-medium h-12 px-9 bg-black'>
        <p className='mr-auto text-white'>11:41</p>
        <Link className='text-white' to='/sd'>
          sd
        </Link>
        <Link className='text-white' to='/'>
          blank
        </Link>
        {/* <CellSignalIcon />
        <WifiIcon />
        <BatteryIcon /> */}
      </div>
      <div className='relative'>
        <Routes>
          <Route path='/' element={<Sportbook />} />
          <Route path='/betSlip' element={<BetSlip />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <div className='flex justify-between h-[75px] px-3 pt-px bg-black text-white text-xs'>
        <div className='flex flex-col items-center text-[#11B502]'>
          <CogIcon className='w-9 h-9' />
          <p>Depositar</p>
        </div>
        <div className='flex flex-col items-center'>
          <CogIcon className='w-9 h-9' />
          <p>Mis Apuestas</p>
        </div>
        <div className='flex flex-col items-center'>
          <CogIcon className='w-9 h-9' />
          <p>Boleta</p>
        </div>
        <div className='flex flex-col items-center'>
          <CogIcon className='w-9 h-9' />
          <p>Roulette</p>
        </div>
        <div className='flex flex-col items-center'>
          <CogIcon className='w-9 h-9' />
          <p>Black Jack</p>
        </div>
      </div>

      {/* {betTitles.map((betTitle) => {
          const numOfOptions = Object.keys(options).length;

          return (
            <div className=''>
              <UpperBetPanel title={betTitle} />
              <BetOptions
                title={betTitle}
                options={options}
                isVerticallyStacked={Math.random() > 0.5}
              />
            </div>
          );
        })} */}
    </div>
  );
};

export default App;
