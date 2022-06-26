import './App.css';
import OpenSign from './sign';
import AnimalList from './animallist';
import { useState } from 'react';

function App() {
  const [lionSize, setLionSize] = useState(10);
  const [rhinoSize, setRhinoSize] = useState(10);
  const [isOpen, setOpen] = useState(['open', 'closed']);
  const [animalsArray, setAnimalsArray] = useState(['lion', 'rhino', 'bear', 'elephant']);

  return (
    <div className='App'>
      <div className='animal-container'>

        <div className='animal-fight'>
          <img src="lion.jpg" width={lionSize * 10} />
          <div className='buttons' id='lion'>
            <button onClick={() => setLionSize(lionSize + 1)}>Lion Wins</button>
            <button onClick={() => setRhinoSize(rhinoSize - 1)}>Rhino Loses</button>
          </div>
        </div>

        <div className='animal-fight'>
          <img src="rhino.jpg" width={rhinoSize * 10} />
          <div className='buttons'>
            <button onClick={() => setLionSize(lionSize - 1)}>Lion Loses</button>
            <button onClick={() => setRhinoSize(rhinoSize + 1)}>Rhino Wins</button>
          </div>
        </div>
      </div>

      <OpenSign isOpen={isOpen} />
      <div className='buttons'>
        <button onClick={() => setOpen('open')}>Close The Zoo</button>
        <button onClick={() => setOpen('closed')}>Open The Zoo</button>
      </div>

      <AnimalList animalsArray={animalsArray} />
      <div className='buttons' id='animals-array'>
        <button onClick={() => setAnimalsArray([...animalsArray, 'lion'])}>Lion</button>
        <button onClick={() => setAnimalsArray([...animalsArray, 'rhino'])}>Rhino</button>
        <button onClick={() => setAnimalsArray([...animalsArray, 'bear'])}>Bear</button>
        <button onClick={() => setAnimalsArray([...animalsArray, 'elephant'])}>Elephant</button>
      </div>
    </div>
  );
}
export default App;
