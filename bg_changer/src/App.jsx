import { useState } from 'react';

function App() {
  const [color, setColor] = useState('red');

  return (
    <div className="w-full h-screen duration-200 flex justify-center items-center"
      style={{ backgroundColor: color }} >
      <button 
        className="p-2 bg-white rounded shadow-lg"
        onClick={() => setColor('blue')}>
        Change to Blue
      </button>
      <br/>
      <button className='p-2 bg-white rounded shadow-lg'
      onClick={()=>setColor('green')}>change to red</button>
    </div>
  );
}

export default App;
