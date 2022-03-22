import React, { useState } from 'react'
import './MonthSelector.css'
export default function MonthSelector({onChangeFilter,selected}) {
 
  const handleSelectMonth = (event)=>{
    onChangeFilter(event.target.value)
  }
  return (
    <div>
      <div className="select_month">
        <label>Select Month</label>
        <select value = {selected} onChange={handleSelectMonth}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>



        </select>
      </div>
    </div>
  )
}
