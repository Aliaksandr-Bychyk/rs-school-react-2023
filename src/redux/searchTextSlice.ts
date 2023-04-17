import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchTextSlice.actions;

export default searchTextSlice.reducer;
