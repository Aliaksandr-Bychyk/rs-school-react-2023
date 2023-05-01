import * as toolkitRaw from '@reduxjs/toolkit';
import IRTK from '../interfaces/IRTK';
const { createSlice } = ((toolkitRaw as IRTK).default ?? toolkitRaw) as typeof toolkitRaw;

export interface ISearchTextSlice {
  value: string;
}

const initialState: ISearchTextSlice = {
  value: '',
};

export const searchTextSlice = createSlice({
  name: 'search-text',
  initialState,
  reducers: {
    setSearchValue: (state, action: toolkitRaw.PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchTextSlice.actions;

export default searchTextSlice.reducer;
