import React, { useState } from 'react';
import UseRef from './comonents/UseRef';
import UseState from './comonents/UseState';
import ImageScrollList from './comonents/ImageScrollList';
import Corousel from './comonents/Corousel';
import { Tabs, Tab} from 'react-bootstrap';

const spd = ["images/spd1.jpg","images/spd2.jpg","images/spd3.jpg"];
const dt = ["images/dt1.jpg","images/dt2.jpg","images/dt3.jpg"];
const tf = ["images/tf1.jpg","images/tf2.jpg","images/tf3.jpg"];

const App = () => {
  const [key, setKey] = useState('spd');
  return (
    <div className="container">
      <div style={{textAlign:"center"}}><Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => { console.log(k); setKey(k) }}
        className="mb-3"
      >
        <Tab eventKey="spd" title="SPD">
        </Tab>
        <Tab eventKey="timeforce" title="TIME FORCE">
        </Tab>
        <Tab eventKey="dinothunder" title="DINO THUNDER">
        </Tab>
      </Tabs>
      </div>
      <Corousel items={ 
        key === "spd" ? spd :
        key === "timeforce" ? tf:
        dt
       }/>
    </div>
  )
}

export default App;
