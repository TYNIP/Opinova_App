import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const calculateElapsedTime = (postDate) => {
    const now = new Date();
    const elapsedTime = Math.floor((now - postDate) / (1000 * 60 * 60)); // Convert milliseconds to hours
    return `${elapsedTime}h ago`;
  };

/* FETCH MOST POPULAR */
export const fetchMostPopularPosts = createAsyncThunk('posts/fetchMostPopularPosts', async () => {
    try {
      const baseUrl = 'https://www.reddit.com';
      const url = `${baseUrl}/top.json?limit=20`; //best 20
      const response = await fetch(url);
      const data = await response.json();
  
      const posts = data.data.children.map(child => ({
        id: child.data.id,
        title: child.data.title,
        body: child.data.selftext,
        time: calculateElapsedTime(new Date(child.data.created_utc * 1000)),
        user: child.data.author,
        comments: child.data.num_comments,
        likes: child.data.score,
        imageUrl: child.data.url_overridden_by_dest,
      }));
      return posts;
    } catch (error) {
      throw new Error('Failed to fetch most popular posts');
    }
  });

/* ASYNC THUNC FOR FETCHING */
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async({theme, subtheme, searchTerm})=>{
    try{
        const baseUrl = 'https://www.reddit.com';
        let url;
        if (searchTerm) {
            // Use the search endpoint
            url = `${baseUrl}/search.json?q=${searchTerm}`;
        } else if (subtheme) {
            // Use the subreddit endpoint for the subtheme
            url = `${baseUrl}/r/${theme}/search.json?q=${subtheme}`;
        } else {
            // Use the subreddit endpoint for the theme
            url = `${baseUrl}/r/${theme}.json`;
        }
        const response = await fetch(url);
        const data = await response.json();


        // Extract and format the posts data 
        const posts = data.data.children.map(child => {
            const postDate = new Date(child.data.created_utc * 1000); // Convert to milliseconds
            return {
              id: child.data.id,
              title: child.data.title,
              body: child.data.selftext,
              time: calculateElapsedTime(postDate),
              user: child.data.author,
              comments: child.data.num_comments,
              likes: child.data.score,
              imageUrl: child.data.url_overridden_by_dest, 
            };
          });

        return posts;
    } catch (error) {
        throw new Error(`Failed to fetch posts: ${error}`);
    }
});

/* POSTS SLICE */
const postsSLice = createSlice({
    name: 'posts',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchPosts.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        });
        builder.addCase(fetchMostPopularPosts.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchMostPopularPosts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchMostPopularPosts.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

export const selectPostsState = (state) => state.posts;
export default postsSLice.reducer;

