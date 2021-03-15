import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  console.log(users);
  return (
    <>
      <h1>User List</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`users/${user.id}`}>{user.first_name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default UserList;
