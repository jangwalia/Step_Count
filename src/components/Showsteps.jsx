import React, { useState } from 'react'
import './Showsteps.css'
import MonthSelector from './MonthSelector'
import EachItem from './EachItem'
export default function Showsteps({steps}) {
  const[month,setMonth] = useState("January")
  const selectedMonth = (givenMonth)=>{
    setMonth(givenMonth)
    
  }
  const filteredMonth = steps.filter(step => {
   
    return step.date.toLocaleString('en-us', { month: 'long' }) === month
  })
  let filteredData = <p>No Activity for this month</p>
  if(filteredMonth.length > 0){
    filteredData =  filteredMonth.map(step => <EachItem key={step.id} activity={step.activity} steps={step.steps} date={step.date}/>)
    
  }
  return (
    <div className='step_data'>
       <MonthSelector selected={month} onChangeFilter={selectedMonth}/>
      {filteredData}
    </div>
  )
}
