import React, { useState } from 'react';
import '../assets/CSSfile/registerpage.css';
import SetCookie from '../hooks/setcookie.js';
import RemoveCookie from '../hooks/RemoveCookie.js'
import { url } from '../assets/constants';
import { useNavigate } from 'react-router-dom';
import { Shimmer } from 'react-shimmer';


function Registerpage() {

  const [isLoading,setIsLoading] = useState(false)

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [email_id, setEmail_id] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [address, setAddress] = useState('');
  const [current_role, setcurrent_role] = useState('');
  const [domain, setDomain] = useState('');
  const [organization, setOrganization] = useState('');
  const [fields, setFields] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [city,setcity]=useState('');

  const nav=useNavigate();

  const handlesubmit= async(event)=>{

    event.preventDefault();

    if (!first_name || !last_name || !password || !confirmPassword || !dateOfBirth || !gender || !email_id || !phone_number || !address || !city) {
      setErrorMessage('Personal details and contact details are mandatory.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please try again.');
      setTimeout(() => setErrorPass(''), 5000);
      return;
    }

    const formData = {
      first_name,
      last_name,
      password,
      dateOfBirth,
      gender,
      city,
      email_id,
      phone_number,
      address,
      current_role,
      domain,
      organization,
      fields
    };

    console.log(formData)

    try{
      setIsLoading(true)
    const res = await fetch(`${url}studentSignUp/`,{
      method:'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify(formData)
    })

    const data = await res.json();
    setIsLoading(false)
    if (!res.ok) {
      alert(data.message)
      throw new Error('response was not ok');
    }
    
    const { id, token } = data;
    console.log("success")
    //remove cookie
    RemoveCookie('id','token','userType');


    // Set cookies
    SetCookie(id, token,'Student');
    nav('/EmailVerification')
    

  }catch(err){
    console.error('Error:', err);
  }

    setFirst_name('');
    setLast_name('');
    setPassword('');
    setConfirmPassword('');
    setdateOfBirth('');
    setGender('');
    setEmail_id('');
    setPhone_number('');
    setAddress('');
    setcity('');
    setcurrent_role('');
    setDomain('');
    setOrganization('');
    setFields('');
  }


  return (
    <div className="form-container">
      <div className='formcontainer1'>
        <div className='design'><img src="src/assets/Images/frame4.jpg" alt="img" /></div>
        <h1 className='title'>Student Registration</h1>
        <div className='personaldetails'>
          <div className='innerregister'>
            <h2>Personal Details</h2>
            <div className="doublerow">
              <div className='form-row'>
                <label htmlFor="first_name">First Name</label>
                <input 
                  type="text" 
                  id="first_name" 
                  name="first_name" 
                  placeholder="First Name" 
                  value={first_name} 
                  onChange={(e) => setFirst_name(e.target.value)} 
                />
              </div>
              <div className='form-row'>
                <label className='doublefield' htmlFor="last_name">Last Name</label>
                <input 
                  type="text" 
                  id="last_name" 
                  name="last_name" 
                  placeholder="Last Name" 
                  value={last_name} 
                  onChange={(e) => setLast_name(e.target.value)} 
                />
              </div>
            </div>
            <div className="doublerow">
              <div className='form-row'>
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className='form-row'>
                <label className='doublefield' htmlFor="confirmPassword">Confirm Password</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  placeholder="Confirm Password" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                />
              </div>
            </div>
            
            {errorPass && <div className="error">{errorPass}</div>}

            <div className="form-row">
              <label htmlFor="dateOfBirth" style={{marginTop:'6px'}}>Date of Birth</label>
              <input 
                type="date" 
                id="dateOfBirth" 
                name="dateOfBirth" 
                value={dateOfBirth} 
                onChange={(e) => setdateOfBirth(e.target.value)} 
              />
            </div>
            <div className="form-row">
              <label htmlFor="gender">Gender</label>
              <select 
                id="gender" 
                className="dropdown" 
                value={gender} 
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>
        <div className='contact'>
          <div className='innerregister'>
            <h2>Contact Details</h2>
            <div className="form-row">
              <label htmlFor="email_id">Email</label>
              <input 
                type="email_id" 
                id="email_id" 
                name="email_id" 
                placeholder="Email" 
                value={email_id} 
                onChange={(e) => setEmail_id(e.target.value)} 
              />
            </div>
            <div className="form-row">
              <label htmlFor="phone_number">Phone Number</label>
              <input 
                type="tel" 
                id="phone_number" 
                name="phone_number" 
                placeholder="Phone Number" 
                value={phone_number} 
                onChange={(e) => setPhone_number(e.target.value)} 
              />
            </div>
            <div className="form-row">
              <label htmlFor="address">Address</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                placeholder="Address" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
              />
            </div>
            <div className="form-row">
              <label htmlFor="city">City</label>
              <input 
                type="text" 
                id="city" 
                name="city" 
                placeholder="City" 
                value={city} 
                onChange={(e) => setcity(e.target.value)} 
              />
          </div>
          </div>
        </div>
        <div className='prof'>   
          <div className='innerregister'> 
            <h2>Professional Details</h2>
            <div className="doublerow">
              <div className='form-row'>
                <label htmlFor="currentcurrent_role">Current Role</label>
                <input 
                  type="text"  
                  name="current_role" 
                  placeholder="Current Role" 
                  value={current_role} 
                  onChange={(e) => setcurrent_role(e.target.value)} 
                />
              </div>
              <div className='form-row'>
                <label htmlFor="domain" className='doublefield'>Domain Name</label>
                <input 
                  type="text" 
                  id="domain" 
                  name="domain" 
                  placeholder="Domain" 
                  value={domain} 
                  onChange={(e) => setDomain(e.target.value)} 
                />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="organizationName">Organization Name</label>
              <input 
                type="text" 
                id="organizationName" 
                name="organizationName" 
                placeholder="Organization Name" 
                value={organization} 
                onChange={(e) => setOrganization(e.target.value)} 
              />
            </div>
            <div className="form-row">
              <label htmlFor="certification">Course fields</label>
              <select 
                id="certification" 
                className="dropdown" 
                value={fields} 
                onChange={(e) => setFields(e.target.value)}
              >
                <option value="" disabled>Select</option>
                <option value="Web development">Web development</option>
                <option value="Data Science">Data Science</option>
                <option value="Machine Learning">Machine Learning</option>
              </select>
            </div>
          </div>
        </div>
        
        {errorMessage && <div className="error">{errorMessage}</div>}
        {
          (isLoading)?
            <div className='shimmer-btn'>
              <Shimmer width={270} height={60}></Shimmer>
              <h2 style={{position:'relative',top:-40,color:'black',zIndex:20,fontSize:19,left:100}}>Register</h2>
            </div>:
            <button className="submit" onClick={handlesubmit}>Register</button>
        }
        <div className='design1'><img src="src/assets/Images/frame5.jpg" alt="img" /></div>
      </div>
      
      </div>
  );
}

export default Registerpage;


