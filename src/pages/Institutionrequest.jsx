import React, { useState } from 'react'
import '../assets/CSSfile/Institutionrequest.css'
import { url } from '../assets/constants';
import { toast, ToastContainer } from 'react-toastify';

export default function Institutionrequest() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [weblink, setWeblink] = useState('');
    const [Institution,setInstitution]=useState();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async()=>{
        if (!name || !email || !gender || !address || !Institution || !phoneNumber || !district) {
            toast('All details are mandatory.');
            setTimeout(() => setErrorMessage(''), 5000);
            return;
          }
        setIsLoading(true)
        const fet = await fetch(`${url}faculties/institure_request/`,{
            method:'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "institute_name": Institution,
                "address": address,
                "name": name,
                "gender": gender.toLowerCase(),
                "phone_number": phoneNumber,
                "email_id":email,
                "district":district,
                "website_link":weblink
            })
        });

        const data = await fet.json();
        if(!fet.ok){
            console.log(data)
            toast(data['message'])
            // setTimeout(() => setErrorMessage(''), 5000);
            return;
        }
        toast("We have received your request and we will contact you soon.")
        // setTimeout(() => setErrorMessage(''), 5000);

        setInstitution("");
        setAddress('')
        setDistrict('')
        setName('')
        setEmail('')
        setPhoneNumber('')
        setWeblink('')
        setGender('')

        setIsLoading(false)
    }

  return (
    <div className='inreq'>
        <div className='inreqinner'>
            <div className='inreqtitle'>
            <img width={"100px"} src="https://dprakash.sirv.com/logo.jpg" alt="logo" />
            <p>Looking for Innovative Minds with Proven Experience? Join Us and Make an Impact!</p>
            </div>
            <div className='inreqcard'>
                <form>
                    <label>Institution Name
                        <input
                        type="text" 
                        className='inreqfield'
                        placeholder='Institution Name'
                        value={Institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        />
                    </label>

                    <label>Address
                        <input
                        type="text" 
                        placeholder='Address'
                        className='inreqfield'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>
                    
                    <label>District
                        <input
                        type="text" 
                        placeholder='District'
                        className='inreqfield'
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        />
                    </label>

                    <label>Website Link
                        <input
                        type="text" 
                        placeholder='Website Link'
                        className='inreqfield'
                        value={weblink}
                        onChange={(e) => setWeblink(e.target.value)}
                        />
                    </label> 
                    
                    <span className='instruction'>Please provide the details of the single point of contact who will communicate with us.</span>
                    <label>Name
                        <input
                        type="text" 
                        placeholder='Name'
                        className='inreqfield'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <label>Email Address
                        <input
                        type="text" 
                        placeholder='Email Address'
                        className='inreqfield'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>                              
                                        
                    {/* <label>Pincode
                        <input
                        type="text" 
                        className='inreqfield'
                        placeholder='Pincode'
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        />
                    </label> */}
                    
                    
                    <label>Phone Number
                        <input
                        type="text" 
                        placeholder='Phone Number'
                        className='inreqfield'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </label>

                    <label>Gender
                        <select className='inreqfield' value={gender} onChange={(e)=>setGender(e.target.value)}>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>

                    <div className="inreqbtn">
                        {(isLoading)?<div className='inreqsubdisabled' style={{cursor:'disabled'}}>Submit</div>:
                        <div className='inreqsub' style={{cursor:'pointer'}} onClick={()=>handleSubmit()}>Submit</div>
                        }
                    </div>

                
                </form>
                <ToastContainer />
            </div>
        </div>
        {/* <div className='design1'><img src="src/assets/Images/frame5.jpg" alt="img" /></div> */}
    </div>
  )
}
