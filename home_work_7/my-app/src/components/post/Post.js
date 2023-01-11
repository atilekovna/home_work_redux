import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../store/postsSlice";

function Post({postInfo}) {

  const dispatch = useDispatch()

  const moreInfoFunc = () => {
    dispatch(getPost(postInfo.id))
  }

  return (
    <>
      <h2>{postInfo.title}</h2>
      <p>-----------------------------------------------------------</p>
      <button onClick={moreInfoFunc}>more info</button>
    </>
  );
}

export default Post;