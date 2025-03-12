import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Header"; // Ensure correct path
import Dash from "./Components/Dash";
import Thankyou from "./Components/Thankyou";
import AllCourses from "./Components/AllCourses";
import CourseDetails from "./Components/CourseDetails";
import Testimonials from "./Components/Testimonials";
import Partners from "./Components/Partners";
import Whyus from "./Components/Whyus";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/course/:name" element={<CourseDetails />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/why-us" element={<Whyus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
