import {
  createSlice,
  nanoid,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';

// export const fetchlist = createAsyncThunk('list/fetchlist', async () => {
//   const response = await axios.get(
//     'https://eager-supreme-appalachiosaurus.glitch.me/list'
//   );
//   return response.data.todoList;
// });

type DialogState = { isOpen: boolean; category?: string };

type InitialState = {
  dialogs: { [index: string]: DialogState };
};

type SetDialogPayload = {
  dialog: string;
  isOpen: boolean;
  category?: string;
};

const initialState: InitialState = {
  dialogs: { addRealiz: { isOpen: false } },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setDialog: (state, action: PayloadAction<SetDialogPayload>) => {
      const { dialog, isOpen, ...rest } = action.payload;
      console.log('🚀 ~ file: listSlice.ts ~ line 46 ~ action', action);

      if (dialog in state.dialogs) {
        console.log("🚀 ~ file: uiSlice.ts ~ line 41 ~ dialog", dialog)
        state.dialogs[dialog] = { isOpen, ...rest };
      }
    },
    // addCategory: (state, action: PayloadAction<string>) => {
    //   state.lists[action.payload] = [];
    // },
    // addRealization: (state, action: PayloadAction<AddRealizationPayload>) => {
    //   const { category, realization } = action.payload;
    //   state.lists[category].push(realization);
    // },
    // editRealization: (state, action: PayloadAction<EditRealizationPayload>) => {
    //   const { category, realization, index } = action.payload;
    //   state.lists[category][index] = realization;
    // },
  },
});

export const { setDialog } = uiSlice.actions;

export default uiSlice.reducer;
