import { useState } from 'react';
import './css/output.css';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div className='space-x-2 space-y-2'>
      <a href='/'>Link</a>
      <button>Button</button>
      <footer>Contact Info</footer>
      <h1>Heading</h1>
      <header>Banner</header>
      <img alt='desc'></img>
      <input type='checkbox'></input>
      <input type='number' min="1" max="5" className='border-2'></input>
      <input type='radio'></input>
      <input type='text'></input>
      <li>List item</li>
      <ul>List group</ul>
    </div>
  );
}

export default App;
