import { useState } from "react"
import "../assets/CSSfile/registerpage.css"
import { url } from "../assets/constants"
import { useNavigate } from "react-router-dom"
import RemoveCookie from "../hooks/RemoveCookie"
import SetCookie from "../hooks/setcookie"
import { Shimmer } from "react-shimmer"

import Select from "react-select"
import { Country, State, City } from "country-state-city"
import { createLinkedAccount } from "../../utils/api_routes"
import { tailspin } from 'ldrs'
import { toast, ToastContainer } from "react-toastify"
tailspin.register()


function CourseCenterRegister() {
	const nav = useNavigate()

	const [isLoading, setIsLoading] = useState(false)

	const [institutionName, setInstitutionName] = useState("")
	const [ownerName, setOwnerName] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [institutionAge, setInstitutionAge] = useState("")
	const [gender, setGender] = useState("")
	const [emailId, setEmailId] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")
	const [address, setAddress] = useState("")
	const [location, setLocation] = useState("")
	const [currentRole, setCurrentRole] = useState("")
	const [domain, setDomain] = useState([""])
	const [organization, setOrganization] = useState("")
	const [fields, setFields] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [errorPass, setErrorPass] = useState("")
	const [BusinessName, setBusinessName] = useState("")
	const [BusinessType, setBusinessType] = useState("")
	const [Account, setAccount] = useState("")
	const [IFSC, setIFSC] = useState("")
	const [BenificiaryName, setBenifeciaryName] = useState("")
	const [category, setCategory] = useState("")
	const [pan, setPan] = useState("")

	const [selectedCountry, setSelectedCountry] = useState(null)
	const [countryCode, setCountryCode] = useState(null)
	const [selectedState, setSelectedState] = useState(null)
	const [stateCode, setStateCode] = useState(null)
	const [selectedCity, setSelectedCity] = useState(null)
  const [postalCode, setPostalCode] = useState(null)

  const [isAccepted, setIsAccepted] = useState(false)

	//handling
	const countryOptions = Country.getAllCountries().map((country) => ({
		label: country.name,
		value: country.isoCode,
	}))

	const stateOptions = State.getStatesOfCountry(countryCode).map((state) => ({
		label: state.name,
		value: state.isoCode,
	}))

	const cityOptions = City.getCitiesOfState(countryCode, stateCode).map(
		(city) => ({
			label: city.name,
		})
	)

  // handling the pan code 
  const handlingPanChange = (e) => {
    const value = e.target.value.toUpperCase(); 
    setPan(value);

    // const panRegex = /^[a-zA-Z]{5}\d{4}[a-zA-Z]{1}$/;
    // const validFourthChar = "CHFTBJGL";

    // if (!panRegex.test(value)) {
    //   setErrorMessage("PAN must be a 10-digit alphanumeric code.");
    // } else if (!validFourthChar.includes(value[3])) {
    //   setErrorMessage("The 4th digit must be one of 'C', 'H', 'F', 'A', 'T', 'B', 'J', 'G', 'L'.");
    // } else {
    //   setErrorMessage("");
    // }

  }

  const validatePan = (value) => {
    const panRegex = /^[a-zA-Z]{5}\d{4}[a-zA-Z]{1}$/;
    const validFourthChar = "CHFTBJGL";

    if (!panRegex.test(value)) {
      setErrorMessage("PAN must be a 10-digit alphanumeric code.");
    } else if (!validFourthChar.includes(value[3])) {
      setErrorMessage("Pan Number Format is not Correct");
    } else {
      setErrorMessage("");
    }
  };

	const handleArrayChange = (e, index) => {
		const { value } = e.target
		const updatedArray = [...domain]
		updatedArray[index] = value
		setDomain(updatedArray)
	}

	const addField = () => {
		setDomain([...domain, ""])
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (!isAccepted) {
				setErrorMessage("Please accept the terms and conditions.");
				return;
		}


		console.log(
			institutionAge,
			institutionName,
			emailId,
			phoneNumber,
			location,
			address
		)

		if (
			!institutionName ||
			!ownerName ||
			!password ||
			!confirmPassword ||
			!institutionAge ||
			!emailId ||
			!phoneNumber ||
			!address ||
			!location ||
			!BusinessName ||
			!BusinessType ||
			!Account ||
			!IFSC ||
			!BenificiaryName ||
			!category ||
			!selectedCity ||
			!selectedCountry ||
			!selectedState ||
			!pan
		) {
			setErrorMessage("Personal, contact and account details are mandatory.")
			setTimeout(() => setErrorMessage(""), 5000)
			return
		}

		if (password !== confirmPassword) {
			setErrorMessage("Passwords do not match. Please try again.")
			setTimeout(() => setErrorMessage(""), 5000)
			return
		}

    validatePan(pan);
    
		const userData = {
      institution_name: institutionName,
			owner_name: ownerName,
			password,
			institution_age: institutionAge,
			gender,
			email_id: emailId,
			phone_number: phoneNumber,
			address,
			location,
			domain,
		}
    

    const linked_account_payload = {
      email: emailId,
      phone: phoneNumber,
      type: "route",
      legal_business_name: BusinessName,
      business_type: "partnership",
      contact_name: BenificiaryName,
      profile: {
        category: "education",
        subcategory: category,
        addresses: {
          registered: {
            street1: address,
            street2: location,
            city: selectedCity,
            state: selectedState,
            postal_code: postalCode,
            country: selectedCountry,
          },
        },
      },
      legal_info: {
        pan: pan,
      },
      tnc_accepted: true, // Change according to popup reply
      settlements: {
        account_number: Account ,
        ifsc_code: IFSC,
      },
    }

    setIsLoading(true)
    const data = await fetch(`${createLinkedAccount}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(linked_account_payload),
    })

    const msg = await data.json()
    const linked_account_id = msg.linked_account_id
    const product_id = msg.product_id

	
	if (!data.ok || (!linked_account_id && !product_id)) {
		setErrorMessage(msg["message"])
		alert(msg["message"])
		setIsLoading(false)
		return
	}

    const accountData = {
      business_name: BusinessName,
      business_type: BusinessType,
      account_number: Account,
      ifsc_code: IFSC,
      beneficiary_name: BenificiaryName,
      linked_account_id: linked_account_id,
      product_config_id: product_id,
    }

		try {
			const res = await fetch(`${url}courseCenterCreation/`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ user: userData, account: accountData }),
			})

			const message = await res.json()

			if (!res.ok) {
				setErrorMessage(message["message"])
				alert(message["message"])
				setIsLoading(false)
				return
			}

			setIsLoading(false)
			RemoveCookie("id", "token", "userType")
			console.log("success", message["token"])
			SetCookie(message["id"], message["token"], "CourseProvider")

			setInstitutionName("")
			setOwnerName("")
			setPassword("")
			setConfirmPassword("")
			setInstitutionAge("")
			setGender("")
			setEmailId("")
			setPhoneNumber("")
			setAddress("")
			setLocation("")
			setCurrentRole("")
			setDomain([""])
			setOrganization("")
			setFields("")
			setBusinessName("")
			setBusinessType("")
			setAccount("")
			setIFSC("")
			setBenifeciaryName("")

			toast.success(
				"Please check your mail inbox to complete your registration!"
			)

			setTimeout(()=>{
				nav("/login")
			}, 3000)
			
		} catch (err) {
			setIsLoading(false)
			setErrorMessage(String(err))
			console.error("Error:", err)
		}
	}

	return (
		<div className="form-container">
			<div className="formcontainer1">
				<div className="design">
					<img
						src="https://dprakash.sirv.com/frame4.jpg"
						alt="img"
					/>
				</div>
				<h1 className="title">Course Center Registration</h1>
				<div className="personaldetails">
					<div className="innerregister">
						<h2>Personal Details</h2>
						<div className="doublerow">
							<div className="form-row">
								<label htmlFor="institutionName">Institution Name</label>
								<input
									type="text"
									id="institutionName"
									name="institutionName"
									placeholder="Institution Name"
									value={institutionName}
									onChange={(e) => setInstitutionName(e.target.value)}
								/>
							</div>
							<div className="form-row">
								<label
									className="doublefield"
									htmlFor="ownerName">
									Owner Name
								</label>
								<input
									type="text"
									id="ownerName"
									name="ownerName"
									placeholder="Owner Name"
									value={ownerName}
									onChange={(e) => setOwnerName(e.target.value)}
								/>
							</div>
						</div>
						<div className="doublerow">
							<div className="form-row">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									id="password"
									name="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className="form-row">
								<label
									className="doublefield"
									htmlFor="confirmPassword">
									Confirm Password
								</label>
								<input
									type="password"
									id="confirmPassword"
									name="confirmPassword"
									placeholder="Confirm Password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</div>
						</div>

						{errorPass && <div className="error">{errorPass}</div>}

						<div className="form-row">
							<label
								htmlFor="institutionAge"
								style={{ marginTop: "6px" }}>
								Institution Age
							</label>
							<input
								type="text"
								id="institutionAge"
								name="institutionAge"
								placeholder="Enter age in years"
								value={institutionAge}
								onChange={(e) => setInstitutionAge(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="contact">
					<div className="innerregister">
						<h2>Contact Details</h2>
						<div className="form-row">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email"
								value={emailId}
								onChange={(e) => setEmailId(e.target.value)}
							/>
						</div>
						<div className="form-row">
							<label htmlFor="phoneNumber">Phone Number</label>
							<input
								type="tel"
								id="phoneNumber"
								name="phoneNumber"
								placeholder="Phone Number"
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>
						</div>
						<div className="form-row">
							<label htmlFor="address">Street1</label>
							<input
								type="text"
								id="address"
								name="address"
								placeholder="Address"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
						</div>
						{/* add -> street1 , loc -> street2 */}
						<div className="form-row">
							<label htmlFor="city">Street2</label>
							<input
								type="text"
								id="street2"
								name="street2"
								placeholder="Street2"
								value={location}
								onChange={(e) => setLocation(e.target.value)}
							/>
						</div>

						{/* // guhan */}
						<div className="form-row">
							<label htmlFor="country">Country</label>
							<Select
								id="country"
								name="country"
								options={countryOptions}
								placeholder="Select a country"
								value={selectedCountry}
								onChange={(option) => {
									setSelectedCountry(option)
									console.log(option)
									setCountryCode(option.value)
								}}
								className="form-control"
							/>
						</div>

						<div className="form-row">
							<label htmlFor="state">State</label>
							<Select
								id="state"
								name="state"
								options={stateOptions}
								placeholder="Select a state"
								value={selectedState}
								onChange={(option) => {
									setSelectedState(option)
									console.log(option)
									setStateCode(option.value)
								}}
								className="form-control"
							/>
						</div>

						<div className="form-row">
							<label htmlFor="city">City</label>
							<Select
								id="city"
								name="city"
								options={cityOptions}
								placeholder="Select a city"
								value={selectedCity}
								onChange={(option) => {
									setSelectedCity(option)
									console.log(option)
								}}
								className="form-control"
							/>
						</div>

						<div className="form-row">
							<label htmlFor="city">Postal Code</label>
							<input
								type="text"
								id="pin_code"
								name="pin_code"
								placeholder="Postal_Code"
								value={postalCode}
								onChange={(e) => setPostalCode(e.target.value)}
								maxLength={6}
							/>
						</div>
					</div>
				</div>
				<div className="prof">
					<div className="innerregister">
						<h2>Professional Details</h2>
						<span
							className="courseForm-fields"
							style={{ marginBottom: 0 }}>
							Domain
						</span>
						{domain.map((desc, index) => (
							<div
								className="courseForm-listData"
								key={index}>
								<span
									onClick={() => {
										let arr = [...domain]
										arr.splice(index, 1)
										setDomain(arr)
									}}
									style={{ marginBottom: 0 }}>
									x
								</span>
								<input
									type="text"
									className="courseForm-textarea"
									name="description"
									value={desc}
									onChange={(e) => handleArrayChange(e, index)}
									placeholder=""
								/>
							</div>
						))}
						<button
							type="button"
							className="courseForm-button add-more"
							onClick={addField}>
							+Add more points
						</button>
					</div>
				</div>
				<div className="prof">
					<div className="innerregister">
						<h2>Account details</h2>
						<div className="form-row">
							<label htmlFor="Business Name">Business Name</label>
							<input
								type="text"
								id="Business Name"
								name="Business Name"
								placeholder="Business Name"
								value={BusinessName}
								onChange={(e) => setBusinessName(e.target.value)}
							/>
						</div>
						<div className="form-row">
							<label htmlFor="Business Type">Business Type</label>
							<select
								id="Business Type"
								name="Business Type"
								className="form-control"
								value={BusinessType}
								onChange={(e) => setBusinessType(e.target.value)}>
								<option
									value=""
									disabled>
									Select a Business Type
								</option>
								<option value="llp">LLP</option>
								<option value="ngo">NGO</option>
								<option value="other">Other</option>
								<option value="individual">Individual</option>
								<option value="partnership">Partnership</option>
								<option value="proprietorship">Proprietorship</option>
								<option value="public_limited">Public Limited</option>
								<option value="private_limited">Private Limited</option>
								<option value="trust_society">Trust, Society</option>
								<option value="not_yet_registered">Not Yet Registered</option>
								<option value="educational_institutes">
									Educational Institutes
								</option>
							</select>
						</div>
						<div className="form-row">
							<label htmlFor="Account Number">Account Number</label>
							<input
								type="text"
								id="Account Number"
								name="Account Number"
								placeholder="Account Number"
								value={Account}
								onChange={(e) => setAccount(e.target.value)}
							/>
						</div>
						<div className="form-row">
							<label htmlFor="IFSC Code">IFSC Code</label>
							<input
								type="text"
								id="IFSC Code"
								name="IFSC Code"
								placeholder="IFSC Code"
								value={IFSC}
								onChange={(e) => setIFSC(e.target.value)}
							/>
						</div>
						<div className="form-row">
							<label htmlFor="Benificiary Name">Benificiary Name</label>
							<input
								type="text"
								id="Benificiary Name"
								name="Benificiary Name"
								placeholder="Benificiary Name"
								value={BenificiaryName}
								onChange={(e) => setBenifeciaryName(e.target.value)}
							/>
						</div>

						<div className="form-row">
							<label htmlFor="Category">Category</label>
							<select
								id="Category"
								name="Category"
								className="form-control"
								value={category}
								onChange={(event) => {
									setCategory(event.target.value)
									console.log(event.target.value)
								}}>
								<option
									value=""
									disabled>
									Select a Category
								</option>
								<option value="college">College</option>
								<option value="schools">Schools</option>
								<option value="university">University</option>
								<option value="professional_courses">
									Professional Courses
								</option>
								<option value="distance_learning">Distance Learning</option>
								<option value="day_care">Day Care</option>
								<option value="coaching">Coaching</option>
								<option value="elearning">eLearning</option>
								<option value="vocational_and_trade_schools">
									Vocational and Trade Schools
								</option>
								<option value="sporting_clubs">Sporting Clubs</option>
								<option value="dance_halls_studios_and_schools">
									Dance Halls, Studios, and Schools
								</option>
								<option value="correspondence_schools">
									Correspondence Schools
								</option>
							</select>
						</div>
						<div className="form-row">
							<label htmlFor="pan">PAN Number</label>
							<input
								type="text"
								id="pan"
								name="pan"
								placeholder="PAN NUMBER"
								value={pan}
								onChange={handlingPanChange}
								maxLength={10}
							/>
						</div>
						<div className="checkbox-container">
							<input
								type="checkbox"
								id="terms"
								checked={isAccepted}
								onChange={(event) => setIsAccepted(event.target.checked)}
							/>
							<label htmlFor="terms">
								I am accepting the terms and conditions
							</label>
						</div>
					</div>
				</div>

				{errorMessage && <div className="error">{errorMessage}</div>}

				{isLoading ? (
					<div className="submit">
						<l-tailspin
							size="25"
							stroke="5"
							speed="0.9"
							color="white"></l-tailspin>
					</div>
				) : (
					<button
						className="submit"
						onClick={handleSubmit}>
						Register
					</button>
				)}

				<div className="design1">
					<img
						src="https://dprakash.sirv.com/frame5.jpg"
						alt="img"
					/>
				</div>
			</div>
			<ToastContainer/>
		</div>
	)
}

export default CourseCenterRegister
