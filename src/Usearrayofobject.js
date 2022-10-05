import React, { useState } from 'react'

export default function Usearrayofobject() {

    const [studentNames, setStudentNames] = useState([{id:1, name:"ranjith"}]);

    const SetStudentsnew = () => {
        setStudentNames(names => [...names, {id:studentNames.length + 1, name:"vijay"}])    
      }
    
 return (
    <div>
      <br></br>
      <h1>Use Array of Object</h1>
      <button onClick={SetStudentsnew}>SetStudentnames</button>
       <ul>
        { 
           studentNames.map( e => <li key = { e.id } > { e.name } </li> ) 
        }
       </ul>
    </div>
  )
}
