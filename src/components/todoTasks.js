// import React, { useState } from 'react'
import React from 'react'
import { FaEraser } from "react-icons/fa";

export default function todoTasks(props) {

   // const [complete, setComplete] = useState(false);

   const { tasks, handleComplete, handleRemove, handleRemoveAll } = props

   return (
      <ul className='todo'>
         {tasks.map((task, index) =>
            <li key={index}>
               <div className='checkAndTask'>
                  <label className='checkContainer'>
                     {/* <input type="checkbox" onClick={() => [handleComplete(index), setComplete(!complete)]} /> */}
                     <input type="checkbox" onClick={() => handleComplete(index)} />
                     <span className='checkmark'> </span>
                  </label>
                  <span className={tasks[index].completed ? 'false' : 'true'} >{task.task}</span>
               </div>
               {/* <button className='trash' onClick={() => handleUpdate(index)}> <FaEraser style={{ fontSize: '16px' }} /></button> */}
               <button className='trash' onClick={() => handleRemove(index)}> <FaEraser style={{ fontSize: '16px' }} /></button>
               {/* <button className='trash' onClick={tasks[index].completed ? () => handleRemove(index) : <span class="popuptext" id="myPopup">Popup text...</span>}> <FaEraser style={{ fontSize: '16px' }} /></button> */}
            </li>
         )}
         {/* {tasks.length > 1 && <p> <button className='deleteAll' onClick={() => handleRemoveAll()}> <i><FaEraser /></i> Delete All </button></p>} */}
         {tasks.length > 0 && <hr className='endLine' />}
         {/* {tasks.length > 1 && <button class="button-49" onClick={() => handleRemoveAll()}> <i><FaEraser style={{ fontSize: '16px' }} /></i> Just Delete Completed Task</button>} */}
         {tasks.length > 1 && <button class="button-49" onClick={() => handleRemoveAll()}> Delete All <i><FaEraser style={{ fontSize: '16px' }} /></i></button>}

      </ul>
   )
}
