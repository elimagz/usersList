import React, { useState } from "react";
import AddUserForm from "./components/User/AddUserForm";
import UserList from "./components/User/UserList";

const DUMB_USER_DATA = [
  { id: Math.random(), name: "Max", age: 30 },
  { id: Math.random(), name: "Eli", age: 31 },
];

function App() {
  const [usersList, setUsersList] = useState(DUMB_USER_DATA);

  const addUser = (name, age) => {
    setUsersList( prevUsersList => {
      return [...prevUsersList, { id: Math.random().toString(), name: name, age: age }];
    });
  };

  const removeUser = (id) => {
    setUsersList( prevUsersList => {
      return prevUsersList.filter(user => user.id !== id);
    });
  }

  return (
    <div>
      <AddUserForm addUserHandler={addUser} />
      <UserList users={usersList} removeUser={removeUser}/>
    </div>
  );
}

export default App;
