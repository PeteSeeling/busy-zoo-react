
import './App.css';
import './App.css';

import OpenSign from './sign';

import { useState } from 'react';



function App() {

  const [lionSize, setLionSize] = useState(10);
  const [rhinoSize, setRhinoSize] = useState(10);
  const [isOpen, setOpen] = useState(['open', 'closed']);

  return (
    <div className='App'>
      <div className='animal-container'>
        <div className='animal-fight'>
          <img src="lion.jpg" width={lionSize * 10} />
          <div className='buttons' id='lion'>
            <button onClick={() => setLionSize(lionSize + 1)}>Lion Bigger</button>
            <button onClick={() => setRhinoSize(rhinoSize - 1)}>Rhino Smaller</button>
          </div>
        </div>

        <div className='animal-fight'>
          <img src="rhino.jpg" width={rhinoSize * 10} />
          <div className='buttons'>
            <button onClick={() => setLionSize(lionSize - 1)}>Lion Smaller</button>
            <button onClick={() => setRhinoSize(rhinoSize + 1)}>Rhino Bigger</button>
          </div>
        </div>
      </div>

      <OpenSign isOpen={isOpen} />
      <div className='buttons'>
        <button onClick={() => setOpen('open')}>Closed</button>
        <button onClick={() => setOpen('closed')}>Open</button>

      </div>






      




    </div>
    
  );

}
export default App;
