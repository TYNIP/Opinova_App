import { createSlice } from '@reduxjs/toolkit';

const searchBarSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = '';
    },
  },
});

export const { setSearchTerm, clearSearchTerm } = searchBarSlice.actions;
export const selectSearchTerm = (state) => state.search.searchTerm;
export default searchBarSlice.reducer;