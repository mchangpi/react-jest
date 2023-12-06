import { useState } from 'react';

function UserForm({ onUserAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('name', name, ', email', email);

    onUserAdd({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-4 flex flex-col items-start justify-center gap-2">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-4"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-4"
        ></input>
        <button className="bg-stone-200 p-2">Add User</button>
      </div>
    </form>
  );
}

export default UserForm;
