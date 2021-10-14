import React from 'react';
import UseRef from './comonents/UseRef';
import UseState from './comonents/UseState';

const App = () => {
  return (
    <div className="container">
       <div className="row">
          <h3>USE STATE</h3>
          <UseState/>
       </div>
       <div className="row">
         <h3>USE REF</h3>
         <UseRef/>
       </div>
    </div>
  )
}

export default App;
