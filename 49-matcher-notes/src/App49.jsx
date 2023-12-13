import './css/output.css';

function App() {
  // const [email, setEmail] = useState('milton@gmail.com');

  return (
    <div className="max-w-xs">
      <button className="m-2 w-1/2 border-2 p-2">Go Back</button>
      <form aria-label="form" className="flex flex-col ">
        <button className="m-2 rounded border-2 bg-stone-100 p-2">Save</button>
        <button className="m-2 rounded border-2 bg-stone-100 p-2">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default App;
