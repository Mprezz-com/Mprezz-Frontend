import React, { useState } from 'react'
import headcss from '../assets/CSSfile/header.module.css';
import GetCookie from '../hooks/GetCookie';
import RemoveCookie from '../hooks/RemoveCookie';
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons';
import { NavLink } from 'react-router-dom';


// Redux
import { useDispatch } from 'react-redux';
import SearchOption, { setSearchContent } from '../hooks/SearchOption';

function Header({sel}) {

  const token = GetCookie('token')
  const id = GetCookie('id')
  const type = GetCookie('userType')
  const nav = useNavigate()
  const logout = ()=>{
    console.log('in logout...')
    RemoveCookie('id','token','userType');
    nav('/login')
  }
  const redirect=(page)=>{
    console.log(page)
    if(page==1){
      console.log('nav')
      nav('myCourse/')
    }
    nav(`../${'profile'}/${id}`)
  }

  //Redux
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('')

  const handleEnter = (e) => {
    if (e.key === 'Enter'){
      dispatch(setSearchContent(searchInput))
      nav('/')
    }
  }

  return (
    <>
    <div className={headcss.header}>
    <div className={headcss.head}>
        <img onClick={()=>nav('/')} style={{cursor:'pointer'}} width={'70px'} height={'10px'} src="https://dprakash.sirv.com/logo.jpg" alt="logo" />
            
        {/* <input className = {headcss.searchbox}  type='text' placeholder='search here'></input> */}
        {/* Redux */}
        <input className = {headcss.searchbox}  type='text' placeholder='search here'
        onChange={(e) => setSearchInput(e.target.value)} onKeyUp={handleEnter}></input>

        {(token==undefined || token==null)?
        <div className='flex flex-row'>

          <div className={headcss.rightdivmain}>
            <div className='icon mr-3' onClick={()=>nav('/Institutionrequest')}>
            <box-icon type='solid' size='md' name='bank' color='#304DB5'></box-icon>
            </div>

            <div className='icon mr-3' onClick={()=>nav('/faculty')}>
            <img className='min-w-8 w-8' src="https://dprakash.sirv.com/faculty.jpg" alt="img" />
            </div>

          </div>
          

          <div className={headcss.rightDiv}>
            <Link to="/login">LOGIN</Link>
            <p>/</p>
            <Link to="/IntermediateRegister">SIGN-UP</Link>
          </div>

          <div className={headcss.lgsgbtn}>

          <button type="button" onClick={()=>{nav('/faculty')}} className={(sel==0)? 'border-b-2 border-blue-700 mr-4 font-bold':'mr-4 font-bold'}>
              Faculty
          </button>
          
          <button type="button" onClick={()=>{nav('/Institutionrequest')}} className={(sel==1)? 'border-b-2 border-blue-700 mr-4 font-bold':'mr-4 font-bold'}>
            Institute
          </button>

              <button type="button" onClick={()=>{nav('/login')}} class="btn btn-outline-primary me-2">
              Login
          </button>
          <button type="button" onClick={()=>{nav('/IntermediateRegister')}} class="btn btn-primary">
              Sign-up
          </button>
        </div>
        </div>:
        <div className={headcss.sidehead}>
            
            {type !="CourseProvider" ?
            <div className='icon' onClick={()=>nav('/myCourse')}>
              <box-icon name='cart' size="md" type='solid' color='#304DB5' ></box-icon>
              <p className={headcss.names} style={{marginTop:"0px"}} >My Lists</p>
              </div>:<div></div>}

            {type !="CourseProvider" ?
            <div className='icon' onClick={()=>{redirect(0)}}>
              <box-icon type='solid' size="md" color='#304DB5'  name='user'></box-icon>
              <p className={headcss.names} style={{marginTop:"0px"}} >Profile</p>
            </div>:<div></div>}
            
            
            <div className='icon' onClick={logout}>
              <box-icon name='door-open' size="md" color='#304DB5'  type='solid' ></box-icon>
              <p className={headcss.names} style={{marginTop:"0px"}}>Logout</p>
            </div>
        </div>}
    </div>
    <hr></hr>
    </div>
    </>
  )
}

export default Header

