import React from 'react'
import '../assets/CSSfile/email.css'
import { useState,useEffect } from 'react';
import { url } from '../assets/constants';
import GetCookie from '../hooks/GetCookie';
import { useNavigate } from 'react-router-dom';

function EmailVerification() {

  const nav = useNavigate()

  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const token = GetCookie('token')

  useEffect(() => {
    if (timeLeft === 0) {
      setIsTimerRunning(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResendClick = async() => {
    if(isTimerRunning){
      alert(`wait ${timeLeft} seconds after completing the time click the resend button`)
    }else{
    setTimeLeft(60);
    setIsTimerRunning(true);
    // Your resend email logic here
      try{
        const res = await fetch(`${url}/resend_verification_mail/`,
          {
            headers:{'Authorization':`Bearer ${token}`}
          }
        );
        const body = await res.json()
        if(!res.ok()){
          if(body.message=='Email already verified'){
            alert(body.message)
            nav('')
          }
          alert(body.message)
        }
      }catch(e){
        console.log(e)
      }
    console.log('Resend email clicked');
    }
  };

  return (
    <div className='h-96'>
    <div className='vtemp'>
      <div className='vtemp1'>

        <div className='vtemp2'>
        <img className='emailverifyimg' src="https://dprakash.sirv.com/emailverification.png" alt="pic" />
        </div>

        <div className='vtemp3'>
          <p className='emailtitle'>Verify your Email address</p>
          <span>To complete your registration and activate your account, we need you to verify your email address. </span>
          <button className='ebtn' disabled={isTimerRunning} onClick={handleResendClick}>Resend</button>
          <p  className={isTimerRunning ? 'red-text' : ''}>Click on Resend: {timeLeft} seconds</p>
          <span>If you did not receive the email, please check your spam folder or click here to resend the verification email.</span>
        </div>

      </div>

    </div>
    </div>
  )
}

export default EmailVerification