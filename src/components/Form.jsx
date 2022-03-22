import React from 'react'
import './form.css'
import { useState } from 'react'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'
export default function Form({onSaveData}) {
  const[activity,setActivity] = useState("")
  const[count,setCount] = useState("")
  const[date,setDate]=useState("")
 //* function to run when user enter the form
  const handleActivityChange = (event)=>{
    setActivity(event.target.value)
  }
  const handleStepsChange = (event)=>{
    setCount(event.target.value)
  }
  const handleDateChange = (event)=>{
    setDate(event.target.value)
  }
   //* form submit function
   const handleClick = (event)=>{
    event.preventDefault()
    const stepCountData = {
      activity,
      steps : count,
      date : new Date(date)
    }
    onSaveData(stepCountData);
    setActivity("")
    setCount("")
    setDate("")
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <div className="form_control">
       
          <div className="input_control">
            <label>Activity</label>
            
            <input type="text" value = {activity} onChange={handleActivityChange} />
          </div>
          <div className="input_control">
            <label>Steps</label>
            <input type="number" value = {count} min="1000" step="500" onChange={handleStepsChange}/>
          </div>
          <div className="input_control">
            <label>Date</label>
            <input type="date"  value = {date}min = "2022-01-01" max = "2022-12-31" onChange={handleDateChange}/>
          </div>
          <div className="form_action">
            <button>Add Count</button>
          </div>
        </div>
      </form>
      
    </div>
  )
}
