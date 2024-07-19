import "./App.css";
import Course from "./pages/Instructor/Course";
import Home from "./pages/Instructor/Home";
import { Route, Routes } from "react-router";
import Students from "./pages/Instructor/Students";
import Login from "./pages/Login";
import Student from "./pages/Instructor/Student";
import { useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [currentStudent, setCurrentStudent] = useState(defaultProp);
  const [isauth, setIsAuth] = useState(false);
  const [role, setRole] = useState("");

  return (
    <div className="App">
      {isauth && role === "instructor" ? (
        <>
          <Navbar setauth={setIsAuth} setrole={setRole} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:courseId" element={<Course />} />
            <Route
              path="/students"
              element={<Students setcs={setCurrentStudent} />}
            />
            <Route
              path="/students/:studentId"
              element={<Student cs={currentStudent} />}
            />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<Login setauth={setIsAuth} setrole={setRole} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;

const defaultProp = {
  firstname: "Moshood",
  lastname: "Mohammed",
  faction: "CS04",
  studentid: "CSO4-001",
  email: "waleopeyemi8@gmail.com",
  phone: "+2347049698931",
  course: "Advanced Cybersecurity",
  learningprogress: "10%",
  dateenrolled: "2024-01-01",
  dateofbirth: "1995-08-20",
  address: "10, Awolowo Road, Lagos",
  password: "password123",
  gender: "Male",
  education: "Crescent University",
  typeofstudy: "Bsc Network Security",
  expirydate: "2025-01-01",
  averagequizscore: "85%",
  averageprojectscore: "90%",
  averagepivscore: "88%",
  sessionsattendedtotal: "11/11",
  absencenumber: "0",
};
