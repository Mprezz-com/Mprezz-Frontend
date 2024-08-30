import { useEffect, useState } from 'react'
import myCourseCss from '../assets/CSSfile/myCourses.module.css'
import { url } from '../assets/constants'
import GetCookie from '../hooks/GetCookie'

function MyCourses(){
    const [data,setData] = useState([])
    const token = GetCookie('token')
    const fet = async()=>{
        const res = await fetch(`${url}studentEnrolledCourses/`,{
            method:'GET',
            headers:{'Authorization':`Bearer ${token}`}
        })
        const val = await res.json()
        console.log(val)
        setData(val.data)
    }
    useEffect(()=>{
        fet();
        return()=>{}
    },[])
    return(
        <div className={myCourseCss.fullpage}>
            <h1 className={myCourseCss.title}>My Courses</h1>
            <div className={myCourseCss.cardContainer}>
                {  (data.length==0)?<>No data to show...</>:
                    data.map((val)=>{

                        return(
                            <div className={myCourseCss.card}>
                                <div className={myCourseCss.cardTitleContainer}>
                                    <h1><span className={myCourseCss.cardTitle}>{val.course_name},</span>by {val.institution}</h1>
                                </div>
                                <div className={myCourseCss.dataContainer}>
                                    <table>
                                        <tr>
                                            <td className={myCourseCss.tdl}>Location :</td>
                                            <td className={myCourseCss.tdr}>{val.location}</td>
                                        </tr>
                                        <tr>
                                            <td className={myCourseCss.tdl}>Mode :</td>
                                            <td className={myCourseCss.tdr}>{val.mode}</td>
                                        </tr>
                                        <tr>
                                            <td className={myCourseCss.tdl}>Duration :</td>
                                            <td className={myCourseCss.tdr}>{val.start_date} to {val.end_date}</td>
                                        </tr>
                                    </table>
                                    {/* <h1>Mode: Offline</h1>
                                    <h1>Location: Coimbatore</h1>
                                    <h1>Duration: </h1> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyCourses