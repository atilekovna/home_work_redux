import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getPosts, deleteAll } from "../store/postsSlice";
import Post from "../components/post/Post";

function PostsPage(props) {

  const dispatch = useDispatch()
  const {posts, post} = useSelector(state => state.postsReducer);


  const getPostsFunc = () => {
    dispatch(getPosts())
  }

  const deleteAllFunc = () => {
    dispatch(deleteAll())
  }

  return (
    <div className="posts">
      <button className="get_posts" onClick={getPostsFunc}>get posts</button>
      <button onClick={deleteAllFunc}>delete all</button>
      <h1>{post.title}</h1>
      <p>{post.id}</p>
      <p>{post.body}</p>
      <hr/>

      {posts.map(post => <Post key={post.id} postInfo={post}/>)}
    </div>
  );
}

export default PostsPage;
