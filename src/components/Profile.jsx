import React, { useEffect, useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import '../assets/CSSfile/profile.css'
import { red } from '@mui/material/colors';
import Typewriter from './Typewriter';
import { useParams } from 'react-router-dom';
import { url } from '../assets/constants';
import GetCookie from '../hooks/GetCookie';

export default function Profile() {

  const [data,setData] = useState({})

  const param = GetCookie('id'); 
  console.log(param,"param");

  const profiledetails = async()=>{
    const res = await fetch(`${url}profile/?id=${param}`);
    const profiledata = await res.json();
    console.log(profiledata,"profile");
    setData(profiledata.data)
  }

  useEffect(()=>{
    profiledetails();
    return ()=>{};
  },[])

  const getImageSrc = (gender) => {
    if (gender === 'male') {
      return "https://img.freepik.com/free-photo/3d-portrait-people_23-2150793997.jpg?ga=GA1.1.1664886461.1721480528&semt=ais_user";
    } else if (gender === 'female') {
      return "https://img.freepik.com/premium-vector/woman-glasses-is-sitting-with-book-her-hands_994744-20446.jpg?w=740";
    } else {
      return "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1722877879~exp=1722881479~hmac=84bf0232751d72514156735c02f18743949379429b5c5fb92c7a561d332b7204&w=740"; // Default image if gender is not specified
    }
  };

  return (
    <section style={{ backgroundColor: '#eee' ,marginTop:'2%'}}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-white rounded-3 p-3 mb-4 flex flex-row justify-content-center align-items-center">
              <MDBBreadcrumbItem className='text-2xl font-bold text-blue-700'>
              <Typewriter text="Profile" delay={100}/>
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={getImageSrc(data.gender)}
                  alt="avatar"
                  className="rounded-circle pictureprofile"
                //   style={{ marginLeft:"30%", width: '150px', marginBottom:'2%'}}
                  fluid />
                <p className="mb-2 text-2xl font-bold text-blue-700"><Typewriter text={data.name || ''} delay={100}/></p>
                <p className="mb-4 font-bold"><Typewriter text={data.current_role || ''} delay={100}/></p>
                <div className="d-flex justify-content-center mb-2">
                  {/* <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn> */}
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="envelope fa-lg" style={{color:'red'}} />
                    <MDBCardText> <a href="example@example.com">{data.email_id}</a> </MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow className='mb-3 mt-3'>
                  <MDBCol sm="3">
                    <MDBCardText>First Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.first_name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className='mb-3 mt-3'>
                  <MDBCol sm="3">
                    <MDBCardText>Last Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.last_name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className='mb-3 mt-3' >
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.email_id}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className='mb-3 mt-3'>
                  <MDBCol sm="3">
                    <MDBCardText>Date-of-Birth</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.dob}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className='mb-3 mt-3'>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.gender}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr/>
                <MDBRow className='mb-3 mt-3'>
                  <MDBCol sm="3">
                    <MDBCardText>City</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.city}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr/>
                <MDBRow className='mb-3 mt-3'>
                  <MDBCol sm="3">
                    <MDBCardText>Current Role</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.current_role}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className='mb-3 mt-3'>
                  <MDBCol sm="3">
                    <MDBCardText>Domain</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.domain}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className='mb-3 mt-3'>
                  <MDBCol sm="3">
                    <MDBCardText>Organisation</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.organization}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}