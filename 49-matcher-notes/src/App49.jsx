import { screen, render, within } from '@testing-library/react';
import './css/output.css';

function App() {
  // const [email, setEmail] = useState('milton@gmail.com');

  return (
    <form aria-label="form" className="flex max-w-xs flex-col ">
      <button className="m-2 rounded border-2 bg-stone-100 p-2">Save</button>
      <button className="m-2 rounded border-2 bg-stone-100 p-2">Cancel</button>
    </form>
  );
}

export default App;
