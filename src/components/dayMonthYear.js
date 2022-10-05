import React from 'react'
import moment from 'moment/moment'

export default function dayMonthYear() {

   return (
      <div className='dayHeading'>
         <p className='dayMonthYear'>{moment().format('L')} </p>
         <p className='dayMonthYear'>{moment().format('dddd')} </p>
      </div>
   )
}
