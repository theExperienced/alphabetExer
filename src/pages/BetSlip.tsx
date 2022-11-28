import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import BetBuilder from '../components/BetBuilder';
import DropdownBox from '../components/DropdownBox';
import SingleBet from '../components/SingleBet';
import { useAppSelector as useSelector } from '../redux';
import { selectFilteredBets } from '../redux/slices/betSlice';

const BetSlip = () => {
  const bets = useSelector(selectFilteredBets);
  console.log('🚀 ~ file: BetSlip.tsx ~ line 9 ~ BetSlip ~ bets', bets);

  return (
    <div className=''>
      <div className='fixed inset-0 top-[48px] w-[43.5px] h-[calc(100vh - 48px)] bg-black bg-opacity-80'></div>
      <div className='pl-[43.5px]'>
        <div className='flex gap-x-3 items-end h-12 pl-3 pr-2'>
          <Link to='/' className='flex items-center h-full mr-auto'>
            <ChevronLeftIcon className='w-6 h-6 stroke-[#A60000]' />
            <span className='font-medium text-lg'>Boleto</span>
          </Link>
          <p className='text-xs pb-1'>$ 4,000.00</p>
          <p className='text-xs pb-1'>Borrar Todos</p>
        </div>
        <div className='w-full'>
          <div className='flex'>
            <DropdownBox title='CREA TU APUESTA'>
              <BetBuilder />
            </DropdownBox>
          </div>
          {/* NOT SURE DIV IS NESSECARY */}

          <div>
            <DropdownBox title='SENCILLAS'>
              <div>
                {bets.map((bet) => (
                  <SingleBet {...bet} />
                ))}
              </div>
            </DropdownBox>
          </div>

          <div className=' px-3 py-2 bg-[#D1D1D1] text-[13px]'>
            <p className='font-medium'>
              Nº total de apuestas: 1Total importe apostado: $ 400.00
            </p>
            <p className='basis-[min-content] py-4 bg-[#E4AB12] font-normal'>
              Ganancia:$ 1,565.45
            </p>
          </div>

          <div className='flex flex-col gap-y-2 px-3 py-2 pt-3'>
            <div className='flex items-center'>
              <input
                // checked
                id='checked-checkbox'
                type='checkbox'
                value=''
                className='w-4 h-4  bg-gray-100 rounded border-gray-300'
              />
              <label
                htmlFor='checked-checkbox'
                className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Aceptar cualquier cambio de momio
              </label>
            </div>

            <div className='flex mb-[17px] items-center'>
              <input
                // checked
                id='checked-checkbox'
                type='checkbox'
                value=''
                className='w-4 h-4  bg-gray-100 rounded border-gray-300'
              />
              <label
                htmlFor='checked-checkbox'
                className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Aceptar momios mas altos
              </label>
            </div>

            <button className='bg-[#11B502] py-3 text-center text-white font-semibold rounded-md'>
              APOSTAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
