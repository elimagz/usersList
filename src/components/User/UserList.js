import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";

export default function UserList(props) {
  const removeUserHandler = (id) => {
    props.removeUser(id);
  };

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} onClick={() => {removeUserHandler(user.id)}}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
