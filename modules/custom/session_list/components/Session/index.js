import React from 'react';


const Session = ({ title, speaker, experience }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div><strong>{speaker}</strong></div>
      <p>{experience}</p>
    </div>
  )
}

export default Session;
