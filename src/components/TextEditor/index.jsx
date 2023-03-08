import React, { useEffect, useState } from "react";
import "./index.css";
export default function Text({ children, className, handleChange,  ...props }) {
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsEditable(!isEditable)
  }

  useEffect(() => {
 window.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsEditable(false)
 })
  },[])

  const InputTemplate = () => {
    return (
        <>
<input  autoFocus onChange={(e) => handleChange(e.target.value)}  defaultValue={children} />
        </>
    )
  }

  return (
    <>
      <div className="text_container">
        {
            isEditable ? <InputTemplate/> :  <p onClick={toggleEdit} className={className} {...props}>{children}</p>
        }
       
      </div>
    </>
  );
}
