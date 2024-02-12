import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,Decrement } from '../Redux/Control'
 

const Couter = () => {
   
    
    const count = useSelector((state)=>state.Control)
    const Dispatch = useDispatch()
    

  return (
    <div> 

      <button onClick={()=>Dispatch(increment())}>Increment</button>
             <h1>{count}</h1>
      <button onClick={()=>Dispatch(Decrement())}>decrement</button>
          
      
    </div>
  )
}

export default Couter
