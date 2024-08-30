import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import '../assets/CSSfile/newlogin.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SetCookie from '../hooks/setcookie.js';
import RemoveCookie from '../hooks/RemoveCookie.js'
import { url } from '../assets/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Shimmer } from 'react-shimmer';

function Newlogin() {
  const nav = useNavigate()
  const [email_id, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user_role, setUserType] = useState('Student');

  const [isLoading,setIsLoading] = useState(false)


  const handleLogin = async () => {
    setIsLoading(true)
    const response = await fetch(`${url}userLogin/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email_id, password, user_role })
    });
    console.log({ email_id, password, user_role });


    const data = await response.json();

    setIsLoading(false)
    //remove cookie
    RemoveCookie('id','token','userType');
    console.log(data);
    const { id, token } = data;

    // Set cookies
    SetCookie(id, token, user_role);

    if (data.message == 'Logged in Successfully') {
      toast(data.message);
      (user_role=='Student')?nav('/'):nav('/courseCenter')
    } else {
      toast(data.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email_id && !user_role) {
      toast('Please fill in your email address and role properly');
      return;
    }
    var response;

    if(user_role == 'Student'){
      response = await fetch(`${url}forgot_password_student/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email_id })
      });
    }
     else if(user_role == 'CourseProvider'){
      response = await fetch(`${url}forgot_password_student/course_center`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email_id })
      });
     }
    
    const data = await response.json();
    if (data) {
      toast('Password reset email sent');
    }else if (data.message == "user not found"){
      toast("Go to signup");
    }    
    else {
      toast('Failed to send password reset email');
    }
  };

  return (
    <div className='h-96'>
    <MDBContainer fluid className="logingradient-form flex-row align-items-center justify-content-center">
      <MDBRow className="w-screen pl-6">

      <MDBCol md='1' className="d-flex flex-column align-items-center justify-content-center mb-5">
        </MDBCol>

        <MDBCol md='4' className="d-flex flex-column align-items-center justify-content-center mb-5">
          <div className="text-center loginlogo-container">
            <img src="src/assets/Images/logo.jpg" alt="logo" />
            <h4 className="text-2xl font-bold mt-1 mb-3 pb-1">Welcome to Mprezz</h4>
          </div>
          <MDBInput wrapperClass='mb-3 logincustom-input' label='Email address' id='form1' type='email' value={email_id} onChange={(e) => setEmail(e.target.value)} />
          <MDBInput wrapperClass='mb-3 logincustom-input' label='Password' id='form2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          
          <select className="form-select mb-4 logincustom-input" value={user_role} onChange={(e) => setUserType(e.target.value)}>
            <option value="Student">Student</option>
            <option value="CourseProvider">CourseProvider</option>
          </select>

          <div className="text-center pt-1 mb-5 pb-1">
            {
              (!isLoading)?<MDBBtn className="mb-4 w-full logingradient-custom-2 logincustom-btn" onClick={handleLogin}>Sign in</MDBBtn>:
              <div>
                <Shimmer height={65} width={200}>
                </Shimmer>
                <h2 style={{position:'relative',top:-40,color:'black',zIndex:20,fontSize:17}}>SIGN IN</h2>
              </div>
            }
            
            <a className="text-muted" href="#!" onClick={handleForgotPassword}>Forgot password?</a>
          </div>
          <ToastContainer />
          <div className="d-flex flex-col gap-2 align-items-center justify-content-center lg:flex-row align-middle">
            <p>Don't have an account?</p>
            <MDBBtn outline className='mx-2' color='danger' onClick={()=> nav('/IntermediateRegister')}>Register</MDBBtn>
          </div>
        </MDBCol>

        <MDBCol md='1' className="d-flex flex-column align-items-center justify-content-center mb-5">
        </MDBCol>

        <MDBCol  className="logingradient-custom-2 flex flex-column justify-content-center h-screen d-none d-md-flex w-screen">
          <div className="text-white px-1 py-4 p-md-5 mx-md-2">
            <img src="src/assets/Images/loginimage.png" alt="hi" />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}

export default Newlogin;
