import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../redux/actions/actions";
import Users from "../components/user/Users";

function UsersPage(props) {

  const dispatch = useDispatch()
  const {users} = useSelector(state => state.usersReducer);
  const {user} = useSelector(state => state.userReducer);

  const getUsers = () => {
    dispatch(fetchUsersAction())
  }

  return (
    <div>
      <h1>User Page</h1>
      <button onClick={getUsers}>get user</button>
      <ul>
        {user.name ?
          <div className={"user-info"}>
            <h3>User information</h3>
            <p><span>name: </span>{user.name}</p>
            <p><span>username:</span> {user.username}</p>
            <p><span>phone: </span>{user.phone}</p>
            <p><span>email:</span> {user.email}</p>
            <p><span>website:</span> {user.website}</p>
            <p><span>company name:</span> {user.company.name}</p>
            <p><span>Address</span></p>
            <p><span>city:</span> {user.address.city}</p>
            <p><span>street:</span>{user.address.street}</p>
            <br/>
          </div> : ''
        }
      </ul>
      {users.map(user => <Users key={user.id} userInfo = {user}/>)}
    </div>
  );
}

export default UsersPage;