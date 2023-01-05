import React from 'react';
import { Table, Container } from "react-bootstrap";
import { useSelector } from "react-redux";



function UsersListPage() {

  const {users} = useSelector(state => state.usersListReducer);


  return (
    <Container>

      <h1 className="my-5">Users list</h1>

      <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id} >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          )}
        </tbody>
      </Table>

    </Container>
  );
}

export default UsersListPage;