import { useEffect, useState } from 'react'
import axios from 'axios'
import logo from '../assets/Images/logo.jpg'
import courseCSS from "../assets/CSSfile/coursepage.module.css"
import { useNavigate, useParams } from 'react-router-dom';
import { url } from '../assets/constants';
import { orderProductRoute,enrollStudentRoute } from '../../utils/api_routes';
import GetCookie from '../hooks/GetCookie';

function Coursepage() {
  const nav = useNavigate();
  const param = useParams().id
  console.log(param)
  const stsrc = 'https://dprakash.sirv.com/star1.png';
  const stars = Array(5).fill(stsrc);
  const [data,setData] = useState(null)
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fet = async()=>{
    try {
      const res = await fetch(`${url}getCourse/${param}`)
      const val = await res.json()
	  console.log('fetched--------------- ',val)
      setData(val.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fet()
    return ()=>{}
  },[])
  
  if (data==null)return <h1>Loading...</h1>
  const loadRazorpay = (url) => {
		return new Promise((resolve) => {
			const script = document.createElement("script")
			script.src = url
			script.async = true
			script.onload = () => resolve(true)
			script.onerror = () => resolve(false)
			document.body.appendChild(script)
		})
	}
	const token = GetCookie('token')
	const createNewOrder = async (amount) => {
		try {
			const order = await axios.post(orderProductRoute, {
				amount: amount,
				currency: "INR",
				receipt: "order_rcptid_11",
				course_center_id:  data.institution_id
			},{
				headers:{'Authorization':`Bearer ${token}`}
			})
			return new Promise((resolve) => {
				resolve(order.data)
			})
		} catch (err) {
			console.log("Error occurred:", err)
		}
	}

	const handlePayment = async (amount) => {
		try {
			const res = await loadRazorpay(
				"https://checkout.razorpay.com/v1/checkout.js"
			)
			if (await res) {
				const order = await createNewOrder(amount)
				if (order) {
					const options = {
						key: import.meta.env.VITE_RAZORPAY_API_KEY,
						amount: order.amount,
						currency: order.currency,
						name: "Mprezz",
						description: "Web Development Course",
						image: logo,
						order_id: order.id,
						handler: async function (response) {
							const res = await fetch(enrollStudentRoute,{
								method:'POST',
								headers:{
									'Authorization':`Bearer ${token}`,
									'Content-Type': 'application/json'
								},
								body:JSON.stringify({'payment_id':response.razorpay_payment_id,'course_id':param})
							})
							const data = await res.json()

							console.log("Payment inserted successfully", data)
						},
						theme: {
							color: "#696cff",	
						},
					}
					const razorpay = new window.Razorpay(options)
					razorpay.open()
				}
			} else {
				alert("Razorpay SDK is not loaded, are you offline?")
			}
		} catch (err) {
			console.log("Error occurred", err)
		}
	}

	const handleClick = async (amount) => {
		if(token==undefined || token==null){
			nav('/login')
		}
		await handlePayment(amount)
	}

  return (
		<div className={courseCSS.fullpage}>
			<div className={courseCSS.titlebox}>
				<div className={courseCSS.titlebox1}>
					{/* <div className={courseCSS.companypic}>
						<img
							className={courseCSS.companypic1}
							src="https://drive.google.com/thumbnail?id=1gwtQc9XweoUB9yrGjZ1H1dteE8D4rWxL"
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
							<div
								className={courseCSS.pricebox1}
								onClick={() => handleClick(data.price)}>
								Buy
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
		</div>
	)
	
}

export default Coursepage
