import React, { useState } from 'react'

export default function Usearray() {

  const [studentNames, setStudentName] = useState(["ranjith","Prabhu"]);

  const SetStudents = () => {
    setStudentName(names => [...names, "tamil", "vijay"])    
  }

  return (
    <div>
      <br></br>
      <h1>Use Array</h1>
      <button onClick={SetStudents}>SetStudentnames</button>
       <ul>
        { 
           studentNames.map( e => <li key = {e} > {e} </li> ) 
        }
       </ul>
    </div>
  )
}
