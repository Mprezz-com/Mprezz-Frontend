import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
import "../assets/CSSfile/facultyregister.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Facultyregister() {
  // State variables for each input field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('');
  const [position, setPosition] = useState('');
  const [institution, setInstitution] = useState('');
  const [place, setPlace] = useState('');
  const [experience, setExperience] = useState('');
  const [address, setAddress] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [district, setDistrict] = useState('');
  const [country, setCountry] = useState('');
  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cvLink, setCvLink] = useState('');

  const handleSubmit = async() => {
    // Add form validation and submission logic here
    event.preventDefault();

    if (!firstName || !lastName || !email|| !qualification || !position || !institution || !place || !experience || !address || !pinCode || !district || !country || !code ||!phoneNumber ||!cvLink) {
      toast('All details are mandatory.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    toast("Successfully registered");
  };

  return (
    <MDBContainer fluid className='h-custom'>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12' className='mx-6 mt-10'>
          <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>
            <MDBCardBody className='p-0 bgcol'>
              <MDBRow>
                <MDBCol md='6' className='p-5 bg-white'>
                  <h3 className="fw-normal mb-5 text-2xl font-bold" style={{ color: '#4835d4' }}>General Information</h3>

                  <MDBRow>
                    <MDBCol md='6'>
                      <MDBInput
                        wrapperClass='mb-4'
                        label='First Name'
                        size='lg'
                        id='form1'
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md='6'>
                      <MDBInput
                        wrapperClass='mb-4'
                        label='Last Name'
                        size='lg'
                        id='form2'
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass='mb-4'
                    label='Your Email'
                    size='lg'
                    id='form8'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <MDBInput
                    wrapperClass='mb-4'
                    label='Qualification'
                    size='lg'
                    id='form8'
                    type='text'
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                  />

                  <MDBInput
                    wrapperClass='mb-4'
                    label='Position'
                    size='lg'
                    id='form3'
                    type='text'
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  />

                  <MDBInput
                    wrapperClass='mb-4'
                    label='Institution'
                    size='lg'
                    id='form8'
                    type='text'
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                  />

                  <MDBRow>
                    <MDBCol md='6'>
                      <MDBInput
                        wrapperClass='mb-4'
                        label='Place'
                        size='lg'
                        id='form4'
                        type='text'
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md='6'>
                      <select
                        className='form-select mb-4'
                        size='lg'
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                      >
                        <option value="">Experience</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">more than 10</option>
                        <option value="20">more than 20</option>
                      </select>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>

                <MDBCol md='6' className='bg-indigo p-5 rightside'>
                  <h3 className="fw-normal mb-5 text-white text-2xl font-bold" style={{ color: '#4835d4' }}>Contact Details</h3>

                  <MDBInput
                    wrapperClass='mb-4'
                    labelClass='text-white'
                    label='Address'
                    size='lg'
                    id='form5'
                    type='text'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  {/* <MDBInput
                    wrapperClass='mb-4'
                    labelClass='text-white'
                    label='Additional Information'
                    size='lg'
                    id='form6'
                    type='text'
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                  /> */}

                  <MDBRow>
                    <MDBCol md='5'>
                      <MDBInput
                        wrapperClass='mb-4'
                        labelClass='text-white'
                        label='Pin Code'
                        size='lg'
                        id='form6'
                        type='text'
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md='7'>
                      <MDBInput
                        wrapperClass='mb-4'
                        labelClass='text-white'
                        label='District'
                        size='lg'
                        id='form7'
                        type='text'
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass='mb-4'
                    labelClass='text-white'
                    label='Country'
                    size='lg'
                    id='form8'
                    type='text'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />

                  <MDBRow>
                    <MDBCol md='5'>
                      <MDBInput
                        wrapperClass='mb-4'
                        labelClass='text-white'
                        label='Code +'
                        size='lg'
                        id='form9'
                        type='text'
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md='7'>
                      <MDBInput
                        wrapperClass='mb-4'
                        labelClass='text-white'
                        label='Phone Number'
                        size='lg'
                        id='form10'
                        type='text'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass='mb-4'
                    labelClass='text-white'
                    label='CV drive link'
                    size='lg'
                    id='form8'
                    type='text'
                    value={cvLink}
                    onChange={(e) => setCvLink(e.target.value)}
                  />

                  <MDBBtn color='light' size='lg' onClick={handleSubmit}>Register</MDBBtn>
                  <ToastContainer />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Facultyregister;
