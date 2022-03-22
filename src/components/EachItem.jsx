import React from 'react'
import Moment from 'react-moment';
import './EachItem.css'
export default function EachItem({activity,steps,date}) {
  

  return (
    
    <div className='eachEntry'>
      <div className="dateFormat">
        <Moment format="YYYY MMM DD" withTitle>{date}</Moment>
        <div className="activityStyle">
        {activity}
      </div>
    </div>
    <div className="stepsStyle">
        {steps}
      </div>
     
    </div>
  )
}
