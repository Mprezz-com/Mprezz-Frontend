import { useEffect, useState } from 'react'
import courseCSS from "../assets/CSSfile/coursepage.module.css"
import { useNavigate, useParams } from 'react-router-dom';
import { url } from '../assets/constants';
import GetCookie from '../hooks/GetCookie';

function CoursePageCourseCenter() {
  const nav = useNavigate();
  const param = useParams().id
  console.log(param)
  const stsrc = 'src/assets/Images/star1.png';
  const stars = Array(5).fill(stsrc);
  const [data,setData] = useState(null)
  const [students,setStudents] = useState([])
  const token = GetCookie('token')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fet = async()=>{
    try {
      const res = await fetch(`${url}getEnrolledStudents/${param}/`,{
        method:'GET',
        headers:{'Authorization':`Bearer ${token}`}
      })
      const val = await res.json()
	  console.log('fetched ',val)
      setData(val.data)
      setStudents(val.students_list)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fet()
    return ()=>{}
  },[])
  
  if (data==null)return <h1>Loading...</h1>
  return (
		<div className={courseCSS.fullpage}>
			<div className={courseCSS.titlebox}>
				<div className={courseCSS.titlebox1}>
					
					{/* <div className={courseCSS.companypic}>
						<img
							className={courseCSS.companypic1}
							src="src/assets/Images/mugavari.jpg"
							alt="img"
						/>
					</div> */}

					<div className={courseCSS.titright}>
						<div className={courseCSS.ctop}>
							<div className={courseCSS.inctop}>
								<span className={courseCSS.titname}>{data.course_name}</span>
								<span>
									Created by <a href="#">{data.institution}</a>
								</span>
								<span>
									{data.no_of_seats - data.filled_seats} Seats Available
								</span>
								<span>
									{data.start_date} - {data.end_date}
								</span>
								<span className={courseCSS.rating}>
									4.4
									<div>
										{stars.map((star, index) => (
											<img
												key={index}
												src={star}
												alt="StarImage"
											/>
										))}
									</div>
								</span>
							</div>
						</div>

						<div className={courseCSS.pricebox}>
							<p className={courseCSS.pricers}>
								<strong>Rs:{data.price}/-</strong>
							</p>
							<div>
								no of registrations : {students.length}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={courseCSS.below}>
				<div className={courseCSS.cleft}>
					<div className={courseCSS.include}>
						<h2>Courses Includes:</h2>
						<ul>
							{data.expectations.map((e, index) => {
								return <li key={index}>{e}</li>
							})}
						</ul>
					</div>
				</div>

				<div className={courseCSS.cright}>
					<div className={courseCSS.desc}>
						<h2>Description:</h2>
						<ul>
							{data.description.map((e, index) => (
								<li key={index}>{e}</li>
							))}
						</ul>
					</div>

					<div className={courseCSS.learn}>
						<h2>Prerequisites</h2>
						<ul>
							{data.requirements.map((e, index) => (
								<li key={index}>{e}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className={courseCSS.studContainer}>
				<h1 className={courseCSS.studTitle}>Enrolled Students :</h1>
				{
					(students.length==0)? <h1 className={courseCSS.zeroData}>No enrollments right now.</h1>:
					students.map((e)=>{
						return(
							<div className={courseCSS.studCard}>
								<div className={courseCSS.studCardComp}>
									<h1 onClick={()=>nav(`/profile/${e.id}`)} style={{color:'#304DB5',cursor:'pointer',fontSize:20,fontWeight:'600'}}>{e.name}</h1>
									<h1>organization : <span style={{fontWeight:'600'}}>{e.organization}</span></h1>
								</div>
								<div className={courseCSS.studCardComp} style={{paddingTop:'2%'}}>
									<h1>{e.email_id}</h1>
									<h1>{e.phone_number}</h1>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
	
}

export default CoursePageCourseCenter
