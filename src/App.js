import logo from './logo.svg';
import './App.css';
import './App.css';

import { useState } from 'react';



function App() {

  const [lionSize, setLionSize] = useState(10);
  const [rhinoSize, setRhinoSize] = useState(10);
  const [open, setOpen] = useState(['open', 'closed']);

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

      




    </div>
    
  );

}
export default App;
