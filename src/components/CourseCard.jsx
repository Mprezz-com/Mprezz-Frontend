import { useNavigate } from "react-router-dom";
import maincss1 from '../assets/CSSfile/mainpage.module.css';


const CourseCard = ({data,redirect})=>{
    const nav = useNavigate()
    console.log(data,redirect)
    return(
        <div className={maincss1.card}>
            <div className={maincss1.card1}>
              <div className={maincss1.fields}>
                <span className={maincss1.topicName} style={{ fontWeight: 'bold', cursor:'pointer' }}  onClick={()=>{(redirect!=0)?nav(`/course/${data.id}`):nav(`/courseCenter/${data.id}`)}}>
                  {/* <a href={(redirect!=0)?nav(`/course/${data.id}`):nav(`/courseCenter/${data.id}`)} > */}
                  {data.course_name}
                   {/* </a>  */}
                </span>
                <div style={{ marginTop: '5%' }}>
                  <span>Mode</span><span>:</span><span>{data.mode}</span>
                </div>
                <div>
                  <span>Institute</span><span>:</span><span>{data.institution}</span>
                </div>
                <div>
                  <span>Location</span><span>:</span><span>{data.location}</span>
                </div>
              </div>
              <div className={maincss1.dateTag}>
                {data.start_date} - {data.end_date}
              </div>
              <div className={maincss1.price}>
                <span className={maincss1.orginalPrice}>₹ {data.price}</span>
                <div className={maincss1.btn} onClick={()=>{(redirect!=0)?nav(`/course/${data.id}`):nav(`/courseCenter/${data.id}`)}}>know more &gt;</div>
              </div>
            </div>
          </div>
    )
}

export default CourseCard;