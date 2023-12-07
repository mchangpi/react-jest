// import { useState } from 'react';
import './css/output.css';

function App() {
  return (
    <div>
      <button aria-label='signin' className='border-4 m-2'>
        Sign In
        <svg/>
      </button>
      <button aria-label='signout' className='border-4 m-2'>
        Sign Out
        <svg/>
      </button>
    </div>
  );
}

export default App;
