import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  currentEvent: string;
};

type SetStakePayload = {
  market: string;
  stake: string;
};

const initialState: InitialState = {
  // events: ['Pumas UNAM vs América'],
  currentEvent: 'Pumas UNAM vs América',
};

export const metadataSlice = createSlice({
  name: 'metadata',
  initialState,
  reducers: {
    setBet: (state, action: PayloadAction) => {
      // console.log('🚀 ~ file: listSlice.ts ~ line 46 ~ action', action);
      // const { market, line, stake } = action.payload;
      // const marketIndex = state.marketsOrder[market];
      // state.metadata[marketIndex] = { line, stake };
    },
  },
});

export const { setBet } = metadataSlice.actions;

export default metadataSlice.reducer;
