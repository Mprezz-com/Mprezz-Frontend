import React, { useEffect, useState } from 'react';
import maincss from '../assets/CSSfile/mainpage.module.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import CourseCard from '../components/CourseCard';
import { url } from '../assets/constants';
import { useNavigate } from 'react-router-dom';
import GetCookie from '../hooks/GetCookie';
import ShimmerComponent from '../shimmer/Shimmer';

import { useSelector } from 'react-redux';

function Mainpage() {


  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nav = useNavigate()
  useEffect(()=>{
    const type = GetCookie('userType')
    const token = GetCookie('token')
    if(type=='CourseProvider' && (token!=null || token!=undefined)){
      nav('/courseCenter')
    }
    return ()=>{};
  },[])
  
  const [searchInput, setSearchInput] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [mode, setMode] = useState('');
  const [location, setLocation] = useState('');
  const [openCourse, setOpenCourse] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openMode, setOpenMode] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);

  //REdux
  var searchTerm = useSelector((state) => state.search.content);
  
  const [data,setData] = useState([])

  const [isLoading,setIsLoading] = useState(true)

  const fetchData = async()=>{
    const response = await fetch(`${url}courses/`)
    const value = await response.json()
    setIsLoading(false)
    console.log(value);
    setData(value['Data'])
    
  }

  useEffect(
    ()=>{fetchData();return ()=>{}},[]
  )

  const handleChangeCourse = (event) => {
    setCourse(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeMode = (event) => {
    setMode(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleCloseCourse = () => {
    setOpenCourse(false);
  };

  const handleOpenCourse = () => {
    setOpenCourse(true);
  };

  const handleClosePrice = () => {
    setOpenPrice(false);
  };

  const handleOpenPrice = () => {
    setOpenPrice(true);
  };

  const handleCloseMode = () => {
    setOpenMode(false);
  };

  const handleOpenMode = () => {
    setOpenMode(true);
  };

  const handleCloseLocation = () => {
    setOpenLocation(false);
  };

  const handleOpenLocation = () => {
    setOpenLocation(true);
  };

  const applyFilters = () => {
    let filteredData = data;
  
    if (course) {
      filteredData = filteredData.filter(item => item.course_name.includes(course));
    }
  
    if (price) {
      if (price === "10000") {
        filteredData = filteredData.filter(item => item.price <= 10000);
      } else if (price === "20000") {
        filteredData = filteredData.filter(item => item.price > 10000 && item.price <= 20000);
      } else {
        filteredData = filteredData.filter(item => item.price > 20000);
      }
    }
  
    if (mode) {
      filteredData = filteredData.filter(item => item.mode.includes(mode));
    }
  
    if (location) {
      filteredData = filteredData.filter(item => item.location.includes(location));
    }
  
    if (searchTerm != null || searchTerm != undefined) {
      console.log("paru da ",searchTerm,'--',typeof searchTerm)
      filteredData = filteredData.filter(item => 
        item.course_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.institution.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    return filteredData;
  };
  
  

  return (
    <>
      <div className={maincss.whole}>
        <div className={maincss.left}>
          <div className={maincss.innerleft}>
            <div className={maincss.st}>
              <span className={maincss.FilterName}>Filter</span>
              <hr className={maincss.hrTag}></hr>
              <div className={maincss.filters}>
                <FormControl className={maincss.summa}>
                  <InputLabel id="course-select-label"style={{height : '20px'}}>Courses</InputLabel>
                  <Select
                    labelId="course-select-label"
                    id="course-select"
                    open={openCourse}
                    onClose={handleCloseCourse}
                    onOpen={handleOpenCourse}
                    value={course}
                    label="Courses"
                    onChange={handleChangeCourse}
                    // sx={{ manWidth: "80px", height: 60 }} 
                  >
                    <MenuItem value="" >
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Web development">Web development</MenuItem>
                    <MenuItem value="Data Science">Data Science</MenuItem>
                    <MenuItem value="Machine Learning">Machine Learning</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className={maincss.summa}>
                  <InputLabel id="price-select-label">Price</InputLabel>
                  <Select
                    labelId="price-select-label"
                    id="price-select"
                    open={openPrice}
                    onClose={handleClosePrice}
                    onOpen={handleOpenPrice}
                    value={price}
                    label="Price"
                    onChange={handleChangePrice}
                    // MenuProps={{
                    //   PaperProps: {
                    //     style: {
                    //       width: 100, // Set the minimum width of the dropdown menu
                    //     },
                    //   },
                    // }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="10000">below 10000</MenuItem>
                    <MenuItem value="20000">10000-20000</MenuItem>
                    <MenuItem value="above">above 20000</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className={maincss.summa}>
                  <InputLabel id="mode-select-label">Mode</InputLabel>
                  <Select
                    labelId="mode-select-label"
                    id="mode-select"
                    open={openMode}
                    onClose={handleCloseMode}
                    onOpen={handleOpenMode}
                    value={mode}
                    label="Mode"
                    onChange={handleChangeMode}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Online">Online</MenuItem>
                    <MenuItem value="Offline">Offline</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className={maincss.summa}>
                  <InputLabel id="location-select-label">Location</InputLabel>
                  <Select
                    labelId="location-select-label"
                    id="location-select"
                    open={openLocation}
                    onClose={handleCloseLocation}
                    onOpen={handleOpenLocation}
                    value={location}
                    label="Location"
                    onChange={handleChangeLocation}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Chennai">Chennai</MenuItem>
                    <MenuItem value="Coimbatore">Coimbatore</MenuItem>
                    <MenuItem value="Trichy">Trichy</MenuItem>
                    <MenuItem value="Madurai">Madurai</MenuItem>
                    <MenuItem value="Salem">Salem</MenuItem>
                    <MenuItem value="Tirunelveli">Tirunelveli</MenuItem>
                    <MenuItem value="Tiruchirappalli">Tiruchirappalli</MenuItem>
                    <MenuItem value="Erode">Erode</MenuItem>
                    <MenuItem value="Vellore">Vellore</MenuItem>
                    <MenuItem value="Tiruppur">Tiruppur</MenuItem>
                    <MenuItem value="Thoothukudi">Thoothukudi</MenuItem>
                    <MenuItem value="Thanjavur">Thanjavur</MenuItem>
                    <MenuItem value="Kanyakumari">Kanyakumari</MenuItem>
                    <MenuItem value="Dindigul">Dindigul</MenuItem>
                    <MenuItem value="Ramanathapuram">Ramanathapuram</MenuItem>
                    <MenuItem value="Virudhunagar">Virudhunagar</MenuItem>
                    <MenuItem value="Karur">Karur</MenuItem>
                    <MenuItem value="Namakkal">Namakkal</MenuItem>
                    <MenuItem value="Sivaganga">Sivaganga</MenuItem>
                    <MenuItem value="Cuddalore">Cuddalore</MenuItem>
                    <MenuItem value="Nagapattinam">Nagapattinam</MenuItem>
                    <MenuItem value="Tiruvarur">Tiruvarur</MenuItem>
                    <MenuItem value="Theni">Theni</MenuItem>
                    <MenuItem value="Pudukkottai">Pudukkottai</MenuItem>
                    <MenuItem value="Krishnagiri">Krishnagiri</MenuItem>
                    <MenuItem value="Ariyalur">Ariyalur</MenuItem>
                    <MenuItem value="The Nilgiris">The Nilgiris</MenuItem>
                    <MenuItem value="Perambalur">Perambalur</MenuItem>
                    <MenuItem value="Tiruvallur">Tiruvallur</MenuItem>
                    <MenuItem value="Tiruvannamalai">Tiruvannamalai</MenuItem>
                    <MenuItem value="Kancheepuram">Kancheepuram</MenuItem>
                    <MenuItem value="Tirupathur">Tirupathur</MenuItem>
                    <MenuItem value="Ranipet">Ranipet</MenuItem>
                    <MenuItem value="Tenkasi">Tenkasi</MenuItem>
                    <MenuItem value="Viluppuram">Viluppuram</MenuItem>
                    <MenuItem value="Nagercoil">Nagercoil</MenuItem>
                    <MenuItem value="Hosur">Hosur</MenuItem>
                    <MenuItem value="Ambur">Ambur</MenuItem>
                    <MenuItem value="Arakkonam">Arakkonam</MenuItem>
                    <MenuItem value="Sankarankovil">Sankarankovil</MenuItem>
                    <MenuItem value="Karaikudi">Karaikudi</MenuItem>
                    <MenuItem value="Neyveli">Neyveli</MenuItem>
                    <MenuItem value="Udhagamandalam">Udhagamandalam</MenuItem>
                    <MenuItem value="Thiruthani">Thiruthani</MenuItem>
                    <MenuItem value="Aruppukkottai">Aruppukkottai</MenuItem>
                    <MenuItem value="Mayiladuthurai">Mayiladuthurai</MenuItem>
                    <MenuItem value="Salem district">Salem district</MenuItem>
                    <MenuItem value="Vaniyambadi">Vaniyambadi</MenuItem>
                    <MenuItem value="Pallavaram">Pallavaram</MenuItem>
                    <MenuItem value="Gudiyatham">Gudiyatham</MenuItem>
                    <MenuItem value="Kanchipuram district">Kanchipuram district</MenuItem>
                    <MenuItem value="Mettupalayam">Mettupalayam</MenuItem>
                    <MenuItem value="Sivagangai">Sivagangai</MenuItem>
                    <MenuItem value="Karaikal district">Karaikal district</MenuItem>
                    <MenuItem value="Thiruvarur district">Thiruvarur district</MenuItem>
                    <MenuItem value="Perundurai">Perundurai</MenuItem>
                    <MenuItem value="Ponneri">Ponneri</MenuItem>
                    <MenuItem value="Avadi">Avadi</MenuItem>
                    <MenuItem value="Tirupattur">Tirupattur</MenuItem>
                    <MenuItem value="Ulundurpettai">Ulundurpettai</MenuItem>
                    <MenuItem value="Thiruvallur district">Thiruvallur district</MenuItem>
                    <MenuItem value="Kumbakonam">Kumbakonam</MenuItem>
                    <MenuItem value="Thiruvannamalai district">Thiruvannamalai district</MenuItem>
                    <MenuItem value="Vriddhachalam">Vriddhachalam</MenuItem>
                    <MenuItem value="Villupuram district">Villupuram district</MenuItem>
                    <MenuItem value="Thiruporur">Thiruporur</MenuItem>
                    <MenuItem value="Kallakurichi district">Kallakurichi district</MenuItem>
                    <MenuItem value="Tindivanam">Tindivanam</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          </div>
        

        <div  className={maincss.right}>
        {/* <div style={mainrightstyle} className={maincss.right}> */}
          {
            (isLoading)?<><ShimmerComponent/> <ShimmerComponent/></>:
            
              applyFilters().map((index)=>{
                console.log(index,'===========================')
                return(<CourseCard data={index} redirect={1}/>)
              })
            
          }
                   
        </div>
        </div>
    </>
  );
}

export default Mainpage



