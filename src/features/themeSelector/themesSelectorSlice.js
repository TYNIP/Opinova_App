import { createSlice } from '@reduxjs/toolkit';

const themesSlice = createSlice({
  name: 'themes',
  initialState: {
    selectedTheme: null,
    selectedSubtheme: null,
  },
  reducers: {
    selectTheme: (state, action) => {
      state.selectedTheme = action.payload;
      state.selectedSubtheme = null; // Reset subtheme when a new theme is selected
    },
    selectSubtheme: (state, action) => {
      state.selectedSubtheme = action.payload;
    },
  },
});

export const { selectTheme, selectSubtheme } = themesSlice.actions;
export const selectThemeState = (state) => state.themes;
export default themesSlice.reducer;