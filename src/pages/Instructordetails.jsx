import React from 'react';
// import './InstructorDetails.css';
import '../assets/CSSfile/Instructordetails.css'

const Instructordetails = () => {
    return (
        <div className='parent-intro' >
            <div className="form-container-into">
                <span>Instructor Details </span>
                <form className="form-intro">
                    <label>
                        Instructor Name
                        <input type="text" placeholder="Instructor Name" />
                    </label>
                    <label>
                        Gender
                        <select>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </label>
                    <label>
                        Email
                        <input type="email" placeholder="Email" />
                    </label>
                    <label>
                        Phone Number
                        <input type="tel" placeholder="Phone Number" />
                    </label>
                    <label>
                        Address
                        <div className="address-intro">
                            <select>
                                <option>Country</option>
                            </select>
                            <select>
                                <option>State</option>
                            </select>
                            <select>
                                <option>District</option>
                            </select>
                        </div>
                    </label>
                    <label>
                        Maximum Qualification
                        <input type="text" placeholder="Qualification" />
                    </label>
                    <label>
                        Expertise
                        <input type="text" placeholder="Expertise" />
                    </label>
                    <label>
                        Experience (in years)
                        <input type="text" placeholder="Experience" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
    );
}

export default Instructordetails;
