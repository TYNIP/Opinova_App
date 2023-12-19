import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPostComments = createAsyncThunk('postComments/fetchPostComments', async (postId) => {
  try {
    const baseUrl = 'https://www.reddit.com';
    const url = `${baseUrl}/comments/${postId}.json`;
    const response = await fetch(url);
    const data = await response.json();

    // Extract and format the post and comments data from the Reddit API response
    const post = extractPost(data[0].data.children[0]);
    const comments = extractComments(data[1].data.children);

    // Log the extracted data
    console.log('Extracted post:', post);
    console.log('Extracted comments:', comments);
    console.log('ayudaaaaaaaaaa');

    return { post, comments };
  } catch (error) {
    throw new Error('Failed to fetch post comments');
  }
});

const extractPost = (postData) => {
  return {
    id: postData.data.id,
    title: postData.data.title,
    body: postData.data.selftext,
    time: calculateElapsedTime(new Date(postData.data.created_utc * 1000)),
    user: postData.data.author,
    likes: postData.data.score,
    imageUrl: postData.data.url_overridden_by_dest,
  };
};

const extractComments = (commentsData) => {
  return commentsData.map((commentData) => ({
    id: commentData.data.id,
    body: commentData.data.body,
    user: commentData.data.author,
    time: calculateElapsedTime(new Date(commentData.data.created_utc * 1000)),
  }));
};

const calculateElapsedTime = (commentDate) => {
  const now = new Date();
  const elapsedTime = Math.floor((now - commentDate) / (1000 * 60 * 60)); // Convert milliseconds to hours
  return `${elapsedTime}h ago`;
};

const postCommentsSlice = createSlice({
  name: 'postComments',
  initialState: {
    data: { post: {}, comments: [] },
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostComments.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchPostComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchPostComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const selectPostCommentsState = (state) => state.postComments;

export default postCommentsSlice.reducer;