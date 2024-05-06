import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import Course from "./Pages/Courses";
import "./App.css";
import CoursePage from "./Pages/CoursePage";
import About from "./Pages/About";
import Amount from "./Pages/Amount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/contact" element={<h1>Contact No:+8478935848</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/amount" element={<Amount />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
