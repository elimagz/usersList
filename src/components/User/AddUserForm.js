import React, { useState } from "react";
import classes from "./AddUserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

export default function AddUserForm(props) {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState()

  const changeUsernameHandler = (event) => {
    setNameInput(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (nameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({title: 'Empty field', message: 'Please enter valid username and age'});
      return;
    }
    if (+ageInput < 1) {
      setError({title: 'Empty field', message: 'Please enter valid age  ( >0)'})
      return;
    }
    setNameInput("");
    setAgeInput("");
    props.addUserHandler(nameInput, ageInput);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      {error && <Modal title={error.title} message={error.message} closeModal={errorHandler}/>}
      <Card className={classes.input}>
        <form>
          <label>Username</label>
          <input
            type="text"
            onChange={changeUsernameHandler}
            value={nameInput}
          ></input>
          <label>Age</label>
          <input
            type="number"
            min="0"
            max="120"
            onChange={changeAgeHandler}
            value={ageInput}
          ></input>
          <Button type="submit" onClick={submitHandler}>
            Add user
          </Button>
        </form>
      </Card>
    </>
  );
}
