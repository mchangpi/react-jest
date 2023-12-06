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
      <div className="m-4 flex items-center justify-start gap-2">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-4"
        ></input>
      </div>
      <div className="m-4 flex items-center justify-start gap-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-4"
        ></input>
      </div>
      <button className="mx-4 bg-stone-200 p-2">Add User</button>
    </form>
  );
}

export default UserForm;
