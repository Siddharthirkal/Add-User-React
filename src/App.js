import React, { Fragment, useState } from "react";

import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const adduserHandler = (uName, uAge, uCollegename) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge,collegename: uCollegename, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={adduserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
