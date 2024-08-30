import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Newlogin from "./components/Newlogin"
import Header from "./components/Header"
import Mainpage from "./pages/Mainpage"
import Registerpage from "./components/Registerpage"
import Coursepage from "./pages/Coursepage"
import Adminpage from "./components/Adminpage"
import Instructordetails from "./pages/Instructordetails"
import CourseForm from "./pages/CourseForm"
import CourseCenterRegister from "./pages/CourseCenterRegister";
import MainPageCourseCenter from "./pages/MainPageCourseCenter";
import IntermediateRegister from "./components/IntermediateRegister";
import CoursePageCourseCenter from "./pages/CoursePageCourseCenter";
import Profile from "./components/Profile";
import MyCourses from "./pages/MyCourses";
import EmailVerification from "./pages/EmailVerification";
import ShimmerComponent from "./shimmer/Shimmer";
import Facultyregister from "./pages/Facultyregister";
import Institutionrequest from "./pages/Institutionrequest";
import NewHeadder from "./components/NewHeadder";

const App = ()=>{
  return(
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/asd" element={<><Header/><Mainpage /></>}></Route>
        <Route path="IntermediateRegister" element={<IntermediateRegister />}></Route>
        <Route path="register" element={<Registerpage />}></Route>
        <Route path="EmailVerification" element={<EmailVerification />}></Route>
        <Route path="login" element={<><Newlogin/></>}></Route>
        <Route path="registerCourseCenter" element={<CourseCenterRegister/>}></Route>
        <Route path="course/:id" element={<><Header/><Coursepage /></>} > </Route>
        <Route path="register-course" element={<><Header/><CourseForm/></>}></Route>
        {/* <Route path="admin" element={<><Header/><Adminpage/></>}></Route> */}
        {/* <Route path="instructor" element={<><Header/><Instructordetails/></>}></Route> */}
        <Route path="courseCenter" element={<><Header/><MainPageCourseCenter/></>}></Route>
        <Route path="courseCenter/:id" element={<><Header/><CoursePageCourseCenter/></>}></Route>
        <Route path="profile/:id" element={<><Header/><Profile/></>}></Route>
        <Route path="myCourse" element={<><Header/><MyCourses/></>}></Route>
        <Route path="shimmer" element={<ShimmerComponent/>}></Route>
        <Route path="/" element={<><NewHeadder sel={0} /><Facultyregister/></>}></Route>
        <Route path="Institutionrequest" element={<><NewHeadder sel={1} /><Institutionrequest/></>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

