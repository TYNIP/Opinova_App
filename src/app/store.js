import { configureStore } from '@reduxjs/toolkit';
import themesReducer from '../features/themeSelector/themesSelectorSlice';
import searchBarReducer from '../features/searchBar/searchBarSlice';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    themes: themesReducer,
    search: searchBarReducer,
    posts: postsReducer,
  },
});
