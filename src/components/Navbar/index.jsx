import { Avatar, Popover } from "antd";
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import "./index.css";

export default function Navbar() {
  const [login, setLogin] = useState(false);
  

  const handleSignOut = () => {
    localStorage.setItem("userLogin", JSON.stringify({email:'', password:''}))
  }

  const content = (
    <div className="popover_content">
      <p>Dashboard</p>
      <p onClick={handleSignOut} >Sign Out</p>
    </div>
  );

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    const user1 = JSON.parse(localStorage.getItem("user"));
    console.log("User login", user, "user", user1);
    if(user && user.email){
      setLogin(true);
    } else {
      setLogin(false);
    }
    
  }, [localStorage.getItem("userLogin")]);

  useEffect(() => {
    window.addEventListener("storage", () => {
      // When storage changes refetch
      const user = JSON.parse(localStorage.getItem("userLogin"));
      const user1 = JSON.parse(localStorage.getItem("user"));
      console.log("User login", "event", user, "user", user1);
    });

    // return () => {
    //   // When the component unmounts remove the event listener
    //   window.removeEventListener("storage");
    // };
}, []);

  return (
    <div className="navbar_container">
      <div></div>
      <div className="user_action">
        {login ? (
          <Popover
            placement="bottomRight"
            content={content}
            trigger="click"
          >
            <Avatar
              size={45}
              style={{ backgroundColor: "black" }}
              icon={<UserOutlined />}
            />{" "}
          </Popover>
        ) : (

         <a href="/signup" > <button>Login</button></a>
        )}
      </div>
    </div>
  );
}
