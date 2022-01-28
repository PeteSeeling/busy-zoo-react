import React from 'react';

export default function OpenSign(props){
  return (
    <div className='sign'>
      <div className={props.isOpen === 'open' ? 'open' : 'is-open'}>Open The Zoo</div>
      <div className={props.isOpen === 'closed' ? 'closed' : 'is-closed'}> Close The Zoo</div> 
  
    </div>
  );
}