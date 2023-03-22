import React from "react";
import "./index.css";
import {DeploymentUnitOutlined, DesktopOutlined, DownloadOutlined} from '@ant-design/icons'

export default function Home() {
  return (
    <div className="home_container">
      <div className="hero_section">
        <div className="title">
          <h1>
            Online <br /> Question Paper Generator
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            nemo et odio maxime voluptatum at velit officiis reprehenderit.
            Quidem eligendi recusandae culpa dolorum nisi ullam, quaerat
            repudiandae tempora id reprehenderit.
          </p>
          <a href="/build"><button>Start Now</button></a>
        </div>
        <div>
          <img src="heroimage.svg" alt="" />
        </div>
      </div>
      <div className="feature">
        <div className="heading">
           <h1> Features We are offering</h1>
        </div>
        <div className="boxes">
          <div>
          <DeploymentUnitOutlined className="icon" style={{ fontSize: '100px' }}/>
          <p>
            Create Online Question Paper without worring about fees.
          </p>
          </div>
          <div>
          <DesktopOutlined className="icon"  style={{ fontSize: '100px' }}/>
          <p>
             Get Personalised Question Paper Tempalate For Your School
          </p>
          </div>
          <div>
          <DownloadOutlined  className="icon"  style={{ fontSize: '100px' }}/>
          <p>
            Download All Qusetion Free of cost
          </p>
          </div>
        </div>
      </div>
      <div className="footer">
       <div className="form">
          <input type="text" placeholder="Enter Your Name" />
          <input type="text" placeholder="Enter Your Email" />
          <textarea rows="7" cols="50" placeholder="Enter Message" ></textarea>
          <button>Send Message</button>
       </div>
       <div>

       </div>
      </div>
    </div>
  );
}
