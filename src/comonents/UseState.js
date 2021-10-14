import React, { useState } from 'react';

const UseState = () => {
  const [mail, setMail] = useState('');
  const [mailHistory, setMailHistory] = useState([]);
  return (
    <div>
      <input
        onChange={(e) => {
          setMail(e.target.value);
          setMailHistory([...mailHistory, mail]);
        }}
      />
      <br />
      {mail}
      <h3>History</h3>
      <br />
      {mailHistory.map((mailItem) => { return <div>{mailItem}</div> })}
    </div>
  )
}

export default UseState;
