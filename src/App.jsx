import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Header"; // Ensure the path is correct
import Dash from "./Components/Dash";
import Thankyou from "./Components/Thankyou";
import AllCourses from "./Components/AllCourses";
// import BackendNode from "./Components/BackendNode";
import CourseDetails from "./Components/CourseDetails"
import CoreJava from './Components/CoreJava'
import Testimonials from './Components/Testimonials'
import Partners from "./Components/Partners"
import Whyus from './Components/Whyus'
import Contact from "./Components/Contact";



function App() {
  return (
    <Router>
      <Nav /> {/* Navigation should be inside the Router */}
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/course/:name" element={<CourseDetails />} />
        {/* <Route path="/backend-node" element={<BackendNode />} /> */}
        <Route path="/Testimonials" element={<Testimonials/>}></Route>
        <Route path="/Partners" element={<Partners />} />
        <Route path="/Whyus" element={<Whyus />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/core-java" element={<CoreJava />} />
      </Routes>
    </Router>
  );
}

export default App;
