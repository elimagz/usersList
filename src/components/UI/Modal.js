import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Modal.module.css";

export default function Modal(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.closeModal}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.closeModal}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
