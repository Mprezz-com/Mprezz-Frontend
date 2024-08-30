import React from 'react';
import '../assets/CSSfile/adminpage.css'

function Adminpage() {
  return (
    
    <div className="formcontainer">

      <div className='design-c'></div>

      <div className='coursedetail'>
        
        <h2>Course Details</h2>
        <div className="formrow">
          <label>Course Name</label>
          <input type="text" id="CourseName" placeholder="Course Name" />
          <label style={{marginLeft:'19px',width:'10%'}} >Domain</label>
          <input type="text" id="domain" placeholder="Domain" />
        </div>

        <div className="formrow">
          <label>Mode</label>
          <select style={{width:'15%'}} id="dropdown">
              <option value="" disabled selected hidden>Select</option>
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
          </select>
        </div>

        <div className="formrow">
          <label style={{marginTop:'6px'}}>Duration</label>
          <input type="date" id="st-date"/>
          <input type="date" id="fi-date"/>
        </div>

      </div>
      
    </div>
  );
}

export default Adminpage;
