import React from 'react';
import Animals from './animal';

export default function AnimalList(props) {
  return (
    <div className='animal-list'>
      {props.animalsArray.map((animal, i)=>
        <Animals key={animal, i} animal={animal} />)}
    </div>
  );
}