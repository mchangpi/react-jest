import { useState } from 'react';
import './css/output.css';

function App() {
  const [email, setEmail] = useState('milton@gmail.com');

  return (
    <form className="flex max-w-xs flex-col space-x-2 space-y-4">
      <h4>Enter Data</h4>

      <div data-testid="image wrapper">
        <img alt="data" src="./data.jpg" />
      </div>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2"
      ></input>

      <label htmlFor="color">Color</label>
      <input id="color" placeholder="Red" className="border-2 p-2" />

      <button
        title="Click and Submit"
        className="rounded border-2 bg-stone-100 p-2"
      >
        Submit
      </button>
    </form>
  );
}

export default App;
