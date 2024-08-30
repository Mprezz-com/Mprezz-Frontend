import { useNavigate } from 'react-router-dom';
import '../assets/CSSfile/NewHeadder.css'

const NewHeadder = ({sel})=>{
    const nav = useNavigate()
    return (
        <div className="nwh-container">
            <img onClick={()=>nav('/')} style={{cursor:'pointer'}} width={'80px'} height={'80px'} src="https://dprakash.sirv.com/logo.jpg" alt="logo" />
            <div className='nwh-tab-container'>
                <div onClick={()=>nav('/')} className={(sel==0)?'nwh-tab-select':'nwh-tab'}>
                    <h1>Faculty</h1>
                </div>
                <div onClick={()=>nav('/Institutionrequest/')} className={(sel==1)?'nwh-tab-select':'nwh-tab'}>
                    <h1>Institute</h1>
                </div>
            </div>
        </div>
    )
}

export default NewHeadder;