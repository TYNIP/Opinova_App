import { configureStore } from '@reduxjs/toolkit';
import themesReducer from '../features/themeSelector/themesSelectorSlice';
import searchBarReducer from '../features/searchBar/searchBarSlice';
import postsReducer from '../features/posts/postsSlice';
import postCommentsReducer from '../features/comments/postCommentsSlice';

export const store = configureStore({
  reducer: {
    themes: themesReducer,
    search: searchBarReducer,
    posts: postsReducer,
    postComments: postCommentsReducer,
  },
});
