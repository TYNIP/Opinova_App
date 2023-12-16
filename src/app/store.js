import { configureStore } from '@reduxjs/toolkit';
import themesReducer from '../features/themeSelector/themesSelectorSlice';
import searchBarSlice from '../features/searchBar/searchBarSlice';

export const store = configureStore({
  reducer: {
    themes: themesReducer,
    search: searchBarSlice,
  },
});
