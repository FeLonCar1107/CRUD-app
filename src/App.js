import React from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Error from "./components/Error"
import Container from "./components/Container";
import Title from "./components/Title";

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Felipe', username: 'felipe1107' },
    { id: uuidv4(), name: 'Isabella', username: 'isabellaliza' },
    { id: uuidv4(), name: 'Sebastian', username: 'sebasm99' },
  ]

  //State
  const [users, setUsers] = useState(usersData)

  //Add Users
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Delete Users
  const deteleUser = (id) => {
    const arrayFiltrado = (users.filter(user => user.id !== id));
    setUsers(arrayFiltrado)
  }

  //Edit Users 
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState ({
    id: null, name: '', username: ''
  })

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <Container className="container">
      <Title>CRUD App with React Hooks</Title>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <Error>
                <EditUserForm
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
                </Error>
              </div>
            ): (
              <div>
                <h2>Add user</h2>
                <Error>
                <AddUserForm addUser={addUser}/>
                </Error>
              </div>
            )
          }
          
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <Error>
          <UserTable 
          users={users} 
          deteleUser={deteleUser}
          setEditing={setEditing}
          editRow={editRow}
          />
          </Error>
        </div>
      </div>
    </Container>
  );
}

export default App;
