import './App.css';
import { useState } from 'react';
import Createdata from './Createdata';
import Showsteps from './Showsteps';
import data from '../data/steps'
//* main Root component
function App() {
  //setting steps to state
  const[steps,setSteps] = useState(data.data)
  const handleSubmitStepdata = (stepdata)=>{
    setSteps(prev => {
      return[stepdata, ...prev]
    })
  }
  return (
  <div>
    <div className="App">
     <h1>Step Counter Record</h1>
    </div>
      <Createdata onAddstepsCount = {handleSubmitStepdata}/>
      <Showsteps steps={steps}/>
    </div>
    
  );
}

export default App;
