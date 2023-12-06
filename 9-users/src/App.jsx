import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
// import "./App.css";
import './css/output.css';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  console.log('users', users);

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr className="my-6" />
      <UserList users={users} />
    </div>
  );
}

export default App;
