import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrappers from "../Helpers/Wrappers";

const AddUser = (props) => {
  const [entredUsername, setEntredUsername] = useState("");
  const [entredAge, setEntredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (entredUsername.trim().length === 0 || entredAge.trim().length === 0) {
      setError({
        title: "Invaid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+entredAge < 1) {
      setError({
        title: "Invaid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    props.onAddUser(entredUsername, entredAge);
    setEntredUsername("");
    setEntredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEntredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEntredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrappers>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={entredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={entredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrappers>
  );
};

export default AddUser;
