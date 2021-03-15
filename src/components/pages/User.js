import React from "react";
import { USERS } from "../../USERS";

const User = (props) => {
  console.log(props.match.params);
  const user = USERS.filter((user) => user.id === +props.match.params.id)[0];
  console.log(user);
  return (
    <>
      <h1>User</h1>
      <div>
        Name: {user.first_name} {user.last_name}
      </div>
      <div>City: {user.city}</div>
    </>
  );
};

export default User;
