import React from 'react';
import Form from './Form';

import './Createdata.css'
export default function Createdate({onAddstepsCount}) {
  const saveEnteredData = (eneterdData)=>{
    const stepCountData = {
      ...eneterdData,
      id:Math.random().toString()
    }
    onAddstepsCount(stepCountData)
  }
  return (
    <div>
      <Form onSaveData={saveEnteredData}/>
    </div>
  )
}
