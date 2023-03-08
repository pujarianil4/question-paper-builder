import React, { useState } from 'react'
import Text from '../TextEditor';
import './styles/template1.css';


export default function Template1() {
  const defaultPaper = {
    Society: "Education",
    collegeName: "R.C Patel, Shirpur",
    department: "Department of Computer",
    subject: "Javascript",
    base: {
      0: "Duration: 1 hour",
      1: "Marks: 20",
    }
  }
  const [paper, setpaper] = useState(defaultPaper)

  const handleEdit = (text, key, sub) => {

   const newData = {
    ...paper,
   }
  if(key === 'base'){
    const b = {
      ...paper.base,
    }
    b[sub] = text
    newData[key] = b
  } else {
    newData[key] = text
  }

   console.log("Input", text, key, newData.base[0], newData);
   setpaper(newData)
  }

  return (
    <div className='paper_parent'>
    <div className='papar_container' >
       <div className='paper_info'>
    
          <Text className="h1 center" handleChange={(text) => handleEdit(text,'collegeName' )} >{paper.collegeName}</Text>
          <Text className="department" handleChange={(text) => handleEdit(text,'department' )} >{paper.department}</Text>
          <Text className="subject" handleChange={(text) => handleEdit(text,'subject' )} >{paper.subject}</Text>
          <div className='base'>
            {
              Object.values(paper.base).map((text, i) =>  <Text key={i} handleChange={(text) => handleEdit(text, 'base', i )}>{text}</Text> )
            }
          </div>

       </div>
    </div>
    </div>
  )
}
