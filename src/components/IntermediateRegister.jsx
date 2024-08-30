import React from 'react'
import '../assets/CSSfile/intermediate.css'
import { useNavigate } from "react-router-dom";

function IntermediateRegister() {
    const nav = useNavigate()

  return (
    <>
    <h1 style={{fontSize:40,fontWeight:'900',textAlign:'center',width:'100%'}}>How do you want to continue?</h1>
    <div className='irfullpage'>
        <div className='irleft'>

            <img width={'250px'} src="https://dprakash.sirv.com/professor.png" alt="pic" />

            {/* <h1 className='irh1'>Welcome to mprezz!</h1> */}

            <div className='irwelcome'>
                <p>Choose 'Course Provider' if you're ready to share your expertise and help shape the future of education through your institute.</p>
            </div>

            
            <div className='irbtn' onClick={()=>{nav('/registerCourseCenter')}}>
               <h1>Course Provider</h1> 
            </div>
            
        </div>

        <div className='irright'>

        <img width={'250px'} src="https://dprakash.sirv.com/studentAvatar.png" alt="pic" />

        {/* <h1 className='irh2'>Welcome to mprezz!</h1> */}

            <div className='irwelcome'>
                <p>Choose 'Student' if you're ready to learn, grow, and achieve your educational goals and be the expert in your domain.</p>
            </div>

            <div className='irbtn' onClick={()=>{nav('/register')}}>
              <h1>Student</h1>  
            </div>
        </div>

    </div>
    </>
  )
}

export default IntermediateRegister