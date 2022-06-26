import React from 'react';
import Animals from './animal';

export default function AnimalList(props) {
  return (
    <div className='animal-list'>
      {props.animalsArray.map((animal)=>
        <Animals key={animal} animal={animal} />)}
    </div>
  );
}