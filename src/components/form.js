import React from 'react'
import { FaPlus } from "react-icons/fa";

const Form = (props) => {

   const { formInput, handleChange, handleSubmit } = props

   return (

      <form className='formInput' onSubmit={handleSubmit}>
         <label htmlFor="taskInput"> </label>
         <input required type="text" placeholder='Write your task' value={formInput} onChange={handleChange} />
         <button className='addButton' type='submit' alt="Add Task"> <FaPlus style={{ fontSize: '14px' }} /> </button>
         {/* {tasks.length > 0 && <button className='addButton' type='submit' alt="Add Task"> <FaPlus style={{ fontSize: '24px' }} /> </button>} */}
      </form>
   )
}

export default Form