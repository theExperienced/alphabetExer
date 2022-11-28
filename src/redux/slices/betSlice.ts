import { createSelector } from 'reselect';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

// const betGenerator = () => {
//   const numOfMarkets = 10;
//   const abcArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   const bets: { [bet: string]: { [option: string]: string } } = {};

//   for (let i = 0; i < numOfMarkets; i++) {
//     const numOfOptions = 2 + Math.round(Math.random());

//     for (let j = 0; j < numOfOptions; j++) {
//       const newBet: { [option: string]: string } = {};
//       newBet[abcArr[Math.round(Math.random() * abcArr.length)]] = String(
//         Math.round(Math.random() * 400)
//       );
//     }

//     bets[abcArr[Math.round(Math.random() * abcArr.length)]] = {
//       // abcArr[Math.round(Math.random() * abcArr.length)]:,
//     };

//     return bets;
//   }
// };

// const bets = betGenerator();

const bets = {
  GANADOR: { '1': '-118', X: '+270', '2': '+300' },
  'AMBOS EQUIPOS ANOTAN': { SI: '-130', NO: '+100' },
  'DOBLE OPORTUNIDAD': {
    'PUMAS UNAM/EMPATE': '-200',
    'PUMAS UNAM/AMÉRICA': '-400',
    'AMÉRICA/EMPATE': '-264',
  },
  'EMPATE NO ACCIÓN': { 1: '-270', 2: '+187' },
};

type InitialState = {
  // bets: typeof bets;
  marketsOrder: { [option: string]: number };
  bets: Bet[];
  selected: { [market: string]: string };
  titles: string[];
};

type Bet = {
  market: string;
  line: string;
  stake: string;
};

type SetBetPayload = Bet;

type SetStakePayload = {
  market: string;
  stake: string;
};

const initialState: InitialState = {
  marketsOrder: {
    GANADOR: 0,
    'AMBOS EQUIPOS ANOTAN': 1,
    'DOBLE OPORTUNIDAD': 2,
    'EMPATE NO ACCIÓN': 3,
  },
  bets: new Array(4),
  selected: {},
  titles: Object.keys(bets!),
};

export const betSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    setBet: (state, action: PayloadAction<SetBetPayload>) => {
      console.log('🚀 ~ file: listSlice.ts ~ line 46 ~ action', action);
      const { market, line, stake } = action.payload;
      const marketIndex = state.marketsOrder[market];

      state.bets[marketIndex] = { market, line, stake };
    },
    setStake: (state, action: PayloadAction<SetStakePayload>) => {
      console.log('🚀 ~ file: listSlice.ts ~ line 46 ~ action', action);
      const { market, stake } = action.payload;
      const marketIndex = state.marketsOrder[market];

      state.bets[marketIndex].stake = stake;
    },
  },
});

export const selectFilteredBets = createSelector(
  (state: RootState) => state.bets.bets,
  (bets) => bets.filter((bet) => bet)
);

export const { setBet } = betSlice.actions;

export default betSlice.reducer;
