import React, { useState } from 'react';
import '../assets/CSSfile/CourseForm.css'
import { url } from '../assets/constants';

const CourseForm = () => {
  const [formData, setFormData] = useState({
    course_name: '',
    domain: '',
    mode: 'Offline',
    start_date: '',
    end_date: '',
    price: '',
    discount: '',
    instituteID: '',
    location: '',
    certification: '',
    no_of_seats: '',
    description: [''],
    expectations: [''],
    requirements: ['']
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleArrayChange = (e, index, key) => {
    const { value } = e.target;
    const updatedArray = [...formData[key]];
    updatedArray[index] = value;
    setFormData({
      ...formData,
      [key]: updatedArray
    });
  };

  const addField = (key) => {
    console.log('before ',formData.requirements)
    setFormData({
      ...formData,
      [key]: [...formData[key], '']
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    try {
        const res = await fetch(`${url}courses/`,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(formData)
          })
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
  };

  const [requirements,setrequirements] = useState(formData.requirements)
  const [description,setDescription] = useState(formData.description)
  const [expectations,setexpectations] = useState(formData.expectations)

  return (
    <div>
        <div className='courseForm-design'></div>
       
        <div className="courseForm-container">
        <h1 className='courseForm-pageHead'>Course Details</h1>
        <form onSubmit={handleSubmit}>
            <div className="courseForm-row">
            <label className="courseForm-label">
                <span className='courseForm-fields'>Course Name</span>
                <input className="courseForm-input" type="text" name="course_name" value={formData.course_name} onChange={handleChange} />
            </label>
            <label className="courseForm-label">
                <span className='courseForm-fields'>Domain</span>
                <input className="courseForm-input" type="text" name="domain" value={formData.domain} onChange={handleChange} />
            </label>
            </div>
            <div className="courseForm-row">
            <label className="courseForm-label">
                <span className='courseForm-fields'>Mode</span>
                <select className="courseForm-select" name="mode" value={formData.mode} onChange={handleChange}>
                <option value="Offline">Offline</option>
                <option value="Online">Online</option>
                </select>
            </label>
            </div>
            <div className="courseForm-row">
            <label className="courseForm-label">
                <span className='courseForm-fields'>Start Date</span>
                <input className="courseForm-input" type="date" name="start_date" value={formData.start_date} onChange={handleChange} />
            </label>
            <label className="courseForm-label">
                <span className='courseForm-fields'>End Date</span>
                <input className="courseForm-input" type="date" name="end_date" value={formData.end_date} onChange={handleChange} />
            </label>
            </div>
            <div className="courseForm-row">
            <label className="courseForm-label">
                <span className='courseForm-fields'>Price</span>
                <input className="courseForm-input" type="number" name="price" value={formData.price} onChange={handleChange} />
            </label>
            <label className="courseForm-label">
                <span className='courseForm-fields'>Percentage Discount</span>
                <input className="courseForm-input" type="number" name="discount" value={formData.discount} onChange={handleChange} />
            </label>
            </div>
            {/* <div className="courseForm-row">
            <label className="courseForm-label">
                <span className='courseForm-fields'>Institute</span>
                <input className="courseForm-input" type="text" name="instituteName" value={formData.instituteName} onChange={handleChange} />
            </label>
            </div> */}
            <div className="courseForm-row">
            <label className="courseForm-label">
                <span className='courseForm-fields'>Location</span>
                <input className="courseForm-input" type="text" name="location" value={formData.location} onChange={handleChange} />
            </label>
            </div>
            <div className="courseForm-row">
            <label className="courseForm-label">
                <span className='courseForm-fields'>Certification</span>
                <div>
                    <input className="courseForm-input courseForm-radio-btn" type="radio" name="certification" value="Yes" checked={formData.certification === 'Yes'} onChange={handleChange} />  
                    <span>Yes</span>
                </div>
                <div style={{marginTop:10}}>
                    <input className="courseForm-input courseForm-radio-btn" type="radio" name="certification" value="No" checked={formData.certification === 'No'} onChange={handleChange} />
                    <span>No</span>
                </div>
            </label>
            </div>
            <div className="courseForm-row">
            <label className="courseForm-label">
                <span className='courseForm-fields'>Seats</span>
                <input className="courseForm-input" type="number" name="no_of_seats" value={formData.no_of_seats} onChange={handleChange} />
            </label>
            </div>
            <div className="courseForm-row">
            <label className="courseForm-label">
                <span className='courseForm-fields' style={{marginBottom:0}}>Description</span>
                {formData.description.map((desc, index) => (
                <div className='courseForm-listData'>
                    <span onClick={()=>{let arr = formData.description;arr.splice(index, 1);setFormData({...formData,['description']:arr})}} style={{marginBottom:0}}>x</span>
                    <textarea className="courseForm-textarea"
                        key={index}
                        name="description"
                        value={desc}
                        onChange={(e) => handleArrayChange(e, index, 'description')}
                        courseForm-rows="2"
                        placeholder="Give the sentence at least 100 words"
                    />
                </div>
                ))}
                <button type="button" className="courseForm-button add-more" onClick={() => addField('description')}>+Add more points</button>
            </label>
            </div>
            <div className="courseForm-row">
            <label className="courseForm-label">
                <span className='courseForm-fields' style={{marginBottom:0}}>What will students learn in your course?</span>
                {formData.expectations.map((point, index) => (
                    <div className='courseForm-listData'>
                    <span onClick={()=>{let arr = formData.expectations;arr.splice(index, 1);setFormData({...formData,['expectations']:arr})}} style={{marginBottom:0}}>x</span>
                    <textarea className="courseForm-textarea"
                        key={index}
                        name="expectations"
                        value={point}
                        onChange={(e) => handleArrayChange(e, index, 'expectations')}
                        courseForm-rows="2"
                        placeholder="Give the sentence at least 100 words"
                    />
                    </div>
                ))}
                <button type="button" className="courseForm-button add-more" onClick={() => addField('expectations')}>+Add more points</button>
            </label>
            </div>
            <div className="courseForm-row">
            <label className="courseForm-label">
                <span className='courseForm-fields' style={{marginBottom:0}}>What are the requirements or requirements for taking your course?</span>
                {formData.requirements.map((req, index) => (
                    <div className='courseForm-listData'>
                        <span onClick={()=>{let arr = formData.requirements;console.log(index,arr,formData);arr.splice(index,1);setFormData({...formData,['requirements']:arr})}} style={{marginBottom:0}}>x</span>
                        <textarea className="courseForm-textarea"
                            key={index}
                            name="requirements"
                            value={req}
                            onChange={(e) => handleArrayChange(e, index, 'requirements')}
                            courseForm-rows="2"
                            placeholder="Give the sentence at least 100 words"
                        />
                    </div>
                ))}
                <button type="button" className="courseForm-button add-more" onClick={() => {addField('requirements');console.log(formData.requirements)}}>+Add more points</button>
            </label>
            </div>
            <button className='courseForm-button' style={{padding: '10px 20px'}} type="submit">Next</button>
        </form>
        </div>
    </div>
  );
};

export default CourseForm;