import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getPosts = createAsyncThunk(
  'getPosts',
  async function (info, {dispatch, rejectWithValue}) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    dispatch(postsData(posts))

  }
)

export const getPost = createAsyncThunk(
  'getPost',
  async function (info, {dispatch, rejectWithValue}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${info}`);
    const post = await response.json();

    dispatch(moreInfo(post))

  }
)

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState: {
    posts: [],
    post: {}
  },
  reducers: {
    postsData: (state, action) => {
      state.posts = action.payload;
    },
    deleteAll: (state) => {
      state.posts = [];
      state.post = {}
    },
    moreInfo: (state, action) => {
      state.post = action.payload
    }
  }
})


export const {postsData, deleteAll, moreInfo} = postsSlice.actions;
export default postsSlice.reducer;
