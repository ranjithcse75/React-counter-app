import React, { useState } from 'react'

export default function Counter() {

  const initialCount = 0;

  const [count, setCount] =useState(initialCount);

  const IncrementCount =  ()  => {
       setCount(count + 1);
  }

  const DecrementCount = () => {
    setCount(count - 1);
  }

return (
  <>
   <br></br>
      <h1>---------Counter App ----------</h1>
  <h1>{count}</h1>
  <button onClick={IncrementCount}>IncrementCount</button>
  <button onClick={DecrementCount}>DecrementCount</button>
  <button onClick={()=>setCount(initialCount)}>Reset</button>
  </>
  )
}
