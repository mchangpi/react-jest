// import { useState } from 'react';
import './css/output.css';

function App() {
  return (
    <div className='space-x-2 space-y-2'>
      <label htmlFor='email' >EmailAddress</label>
      <input id='email' className='border-4'/>

      <label htmlFor='search'>SearchBox</label>
      <input id='search' className='border-4'/>

    </div>
  );
}

export default App;
