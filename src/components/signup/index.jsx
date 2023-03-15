import { message } from "antd";
import React, { useState } from "react";
import "./index.css";

export default function Signup() {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(activeTab == 'signin'){
      localStorage.setItem("user", JSON.stringify({email, password}))
      message.success("Account Created Successfuly!")
    } else {
     const user = JSON.parse(localStorage.getItem('user'))
     console.log("User", user);
     if(user?.email == email && user?.password == password){
      localStorage.setItem("userLogin", JSON.stringify({email, password}))
      message.success("User Log In Successfully!")
     }
    }
  }

  return (
    <div className="signup_page">
      <div className="signup_container">
        <div className="tabs">
          <div
            className={`${activeTab == "login" ? "active_tab" : ""}`}
            onClick={() => toggleTab("login")}
          >
            <p>Log In</p>
          </div>
          <div
            className={`${activeTab == "signin" ? "active_tab" : ""}`}
            onClick={() => toggleTab("signin")}
          >
            <p>Sign In</p>
          </div>
        </div>

        <div className="form"  >
         <form action="" className="form" onSubmit={handleSubmit}>
          <input autoComplete="on" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
          <input autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required/>

         {
          activeTab == 'login' ?  <input type='submit' value='Log In'  /> :  <input type='submit' value='Sign In'  />
         }
    </form>
        </div>
      </div>
    </div>
  );
}
