import React, { useState } from 'react';
import ToolBar from "./components/ToolBar/ToolBar"
import UserForm from "./components/UserForm/UserForm"
import Users from "./components/Users/Users"
import { User } from './type';



const App = () => {

  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };


  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <UserForm onAddUser={addUser} />
          </div>
          <div className="col-6">
            <Users users={users} />
          </div>
        </div>
      </main>

    </>
  )
}

export default App
