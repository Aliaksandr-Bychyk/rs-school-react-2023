import IFormCardData from '../interfaces/IFormCardData';
import * as toolkitRaw from '@reduxjs/toolkit';
import IRTK from '../interfaces/IRTK';
const { createSlice } = ((toolkitRaw as IRTK).default ?? toolkitRaw) as typeof toolkitRaw;

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
    addFromCard: (state, action: toolkitRaw.PayloadAction<IFormCardData>) => {
      state.value = [action.payload, ...state.value];
    },
  },
});

export const { addFromCard } = formCardSlice.actions;

export default formCardSlice.reducer;
