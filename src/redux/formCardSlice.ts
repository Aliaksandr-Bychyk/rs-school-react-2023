import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IFormCardData from '../interfaces/IFormCardData';

export interface ISearchTextSlice {
  value: IFormCardData[];
}

const initialState: ISearchTextSlice = {
  value: [],
};

export const formCardSlice = createSlice({
  name: 'from-card',
  initialState,
  reducers: {
    addFromCard: (state, action: PayloadAction<IFormCardData>) => {
      state.value = [action.payload, ...state.value];
    },
  },
});

export const { addFromCard } = formCardSlice.actions;

export default formCardSlice.reducer;
