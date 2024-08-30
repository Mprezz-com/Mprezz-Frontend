import React, { useState } from 'react';
import '../assets/CSSfile/registerpage.css';
import Cookies from 'js-cookie';
import { url } from '../assets/constants';
import { useNavigate } from "react-router-dom";
import RemoveCookie from '../hooks/RemoveCookie';
import SetCookie from '../hooks/setcookie';
import { Shimmer } from 'react-shimmer';

function CourseCenterRegister() {
  const nav = useNavigate();

  const [isLoading,setIsLoading] = useState(false);

  const [institutionName, setInstitutionName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [institutionAge, setInstitutionAge] = useState('');
  const [gender, setGender] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [currentRole, setCurrentRole] = useState('');
  const [domain, setDomain] = useState(['']);
  const [organization, setOrganization] = useState('');
  const [fields, setFields] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [BusinessName,setBusinessName] = useState('');
  const [BusinessType,setBusinessType] = useState('');
  const [Account,setAccount] = useState('')
  const [IFSC,setIFSC] = useState('')
  const [BenificiaryName, setBenifeciaryName] = useState('')

  const handleArrayChange = (e, index) => {
    const { value } = e.target;
    const updatedArray = [...domain];
    updatedArray[index] = value;
    setDomain(updatedArray);
  };

  const addField = () => {
    setDomain([...domain, '']);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(institutionAge, institutionName, emailId, phoneNumber, location, address);

    if (!institutionName || !ownerName || !password || !confirmPassword || !institutionAge || !emailId || !phoneNumber || !address || !location || !BusinessName || !BusinessType || !Account || !IFSC || !BenificiaryName) {
      setErrorMessage('Personal, contact and account details are mandatory.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please try again.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    const userData = {
      institution_name: institutionName,
      owner_name: ownerName,
      password,
      institution_age: institutionAge,
      gender,
      email_id: emailId,
      phone_number: phoneNumber,
      address,
      location,
      domain,
    };

    const accountData = {
      business_name : BusinessName,
      business_type : BusinessType,
      account_number: Account,
      ifsc_code : IFSC,
      beneficiary_name : BenificiaryName
    }
    try {
      setIsLoading(true)
      const res = await fetch(`${url}courseCenterCreation/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'user':userData,'account':accountData}),
      });
      const message = await res.json();
      console.log(message);
      setIsLoading(false)
      if (!res.ok) {
        setErrorMessage(message['message']);
        alert(message['message'])
        return;
      }
      RemoveCookie('id','token','userType')
      console.log("success", message['token']);
      SetCookie(message['id'],message['token'],'CourseProvider')
      nav("/");
    } catch (err) {
      setIsLoading(false)
      console.error('Error:', err)
    }

    setInstitutionName('');
    setOwnerName('');
    setPassword('');
    setConfirmPassword('');
    setInstitutionAge('');
    setGender('');
    setEmailId('');
    setPhoneNumber('');
    setAddress('');
    setLocation('');
    setCurrentRole('');
    setDomain(['']);
    setOrganization('');
    setFields('');
    setBusinessName('');
    setBusinessType('')
    setAccount('')
    setIFSC('')
    setBenifeciaryName('')
  };

  return (
    <div className="form-container">
      <div className='formcontainer1'>
        <div className='design'><img src="/src/assets/Images/frame4.jpg" alt="img" /></div>
        <h1 className='title'>Course Center Registration</h1>
        <div className='personaldetails'>
          <div className='innerregister'>
            <h2>Personal Details</h2>
            <div className="doublerow">
              <div className='form-row'>
                <label htmlFor="institutionName">Institution Name</label>
                <input 
                  type="text" 
                  id="institutionName" 
                  name="institutionName" 
                  placeholder="Institution Name" 
                  value={institutionName} 
                  onChange={(e) => setInstitutionName(e.target.value)} 
                />
              </div>
              <div className='form-row'>
                <label className='doublefield' htmlFor="ownerName">Owner Name</label>
                <input 
                  type="text" 
                  id="ownerName" 
                  name="ownerName" 
                  placeholder="Owner Name" 
                  value={ownerName} 
                  onChange={(e) => setOwnerName(e.target.value)} 
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
              <label htmlFor="institutionAge" style={{marginTop:'6px'}}>Institution Age</label>
              <input 
                type="text" 
                id="institutionAge" 
                name="institutionAge" 
                placeholder='Enter age in years'
                value={institutionAge} 
                onChange={(e) => setInstitutionAge(e.target.value)} 
              />
            </div>
          </div>
        </div>
        <div className='contact'>
          <div className='innerregister'>
            <h2>Contact Details</h2>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email" 
                value={emailId} 
                onChange={(e) => setEmailId(e.target.value)} 
              />
            </div>
            <div className="form-row">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber" 
                placeholder="Phone Number" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
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
              <label htmlFor="city">Location</label>
              <input 
                type="text" 
                id="city" 
                name="city" 
                placeholder="Location" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
              />
            </div>
          </div>
        </div>
        <div className='prof'>   
          <div className='innerregister'> 
            <h2>Professional Details</h2>
            <span className='courseForm-fields' style={{marginBottom:0}}>Domain</span>
            {domain.map((desc, index) => (
              <div className='courseForm-listData' key={index}>
                <span onClick={() => { let arr = [...domain]; arr.splice(index, 1); setDomain(arr) }} style={{ marginBottom: 0 }}>x</span>
                <input type='text' className="courseForm-textarea"
                  name="description"
                  value={desc}
                  onChange={(e) => handleArrayChange(e, index)}
                  placeholder=""
                />
              </div>
            ))}
            <button type="button" className="courseForm-button add-more" onClick={addField}>+Add more points</button>
          </div>
        </div>
        <div className='prof'>
            <div className='innerregister'>
              <h2>Account details</h2>
              <div className="form-row">
                <label htmlFor="Business Name">Business Name</label>
                <input 
                  type="text" 
                  id="Business Name" 
                  name="Business Name" 
                  placeholder="Business Name" 
                  value={BusinessName}
                  onChange={(e) => setBusinessName(e.target.value)} 
                />
              </div>
              <div className="form-row">
                <label htmlFor="Business Type">Business Type</label>
                <input 
                  type="text" 
                  id="Business Type" 
                  name="Business Type" 
                  placeholder="Business Type" 
                  value={BusinessType} 
                  onChange={(e) => setBusinessType(e.target.value)} 
                />
              </div>
              <div className="form-row">
                <label htmlFor="Account Number">Account Number</label>
                <input 
                  type="text" 
                  id="Account Number" 
                  name="Account Number" 
                  placeholder="Account Number" 
                  value={Account}
                  onChange={(e) => setAccount(e.target.value)} 
                />
              </div>
              <div className="form-row">
                <label htmlFor="IFSC Code">IFSC Code</label>
                <input 
                  type="text" 
                  id="IFSC Code" 
                  name="IFSC Code" 
                  placeholder="IFSC Code" 
                  value={IFSC}
                  onChange={(e) => setIFSC(e.target.value)} 
                />
              </div>
              <div className="form-row">
                <label htmlFor="Benificiary Name">Benificiary Name</label>
                <input 
                  type="text" 
                  id="Benificiary Name" 
                  name="Benificiary Name" 
                  placeholder="Benificiary Name" 
                  value={BenificiaryName}
                  onChange={(e) => setBenifeciaryName(e.target.value)} 
                />
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
            <button className="submit" onClick={handleSubmit}>Register</button>
        }
        <div className='design1'><img src="/src/assets/Images/frame5.jpg" alt="img" /></div>
      </div>
    </div>
  );
}

export default CourseCenterRegister;
