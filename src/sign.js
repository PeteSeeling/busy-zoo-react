import React from 'react';

export default function OpenSign(props){
  return (
    <div className='sign'>
      <div className={props.isOpen === 'open' ? 'open' : 'is-open'}>Zoo is Open</div>
      <div className={props.isOpen === 'closed' ? 'closed' : 'is-closed'}> Zoo is Closed</div> 
  
    </div>
  );
}