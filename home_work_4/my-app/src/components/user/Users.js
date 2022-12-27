import React from 'react';
import { useDispatch } from "react-redux";
import { fetchUserAction } from "../../redux/actions/actions";

function Users({userInfo}) {

  const dispatch = useDispatch()

  const getUserInfo = () => {
    dispatch(fetchUserAction(userInfo.id))
  }

  return (
    <ul>
      <li>{userInfo.name}</li>
      <button onClick={getUserInfo}>get information</button>
      <p>------------------------</p>
    </ul>
  );
}

export default Users;
