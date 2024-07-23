import "./App.css";
import Course from "./pages/Instructor/Course";
import Home from "./pages/Instructor/Home";
import { Route, Routes } from "react-router";
import Students from "./pages/Instructor/Students";
import Login from "./pages/Login";
import Student from "./pages/Instructor/Student";
import { useState } from "react";
import Navbar from "./components/Navbar";
import dummy from "./assets/dummy.jpg";
import dummy1 from "./assets/dummy1.jpg";
import dummy2 from "./assets/dummy2.jpg";
import dummy3 from "./assets/dummy3.jpg";
import dummy4 from "./assets/dummy4.jpg";
import dummy5 from "./assets/dummy5.jpg";
import Modal from "./components/Modal";
function App() {
  const [currentStudent, setCurrentStudent] = useState(defaultProp);
  const [isauth, setIsAuth] = useState(false);
  const [isModal, setIsModal] = useState(true);
  const [user, setUser] = useState({});
  const dummyarray = [dummy, dummy1, dummy2, dummy3, dummy4, dummy5];
  const randimg = dummyarray[Math.floor(Math.random() * dummyarray.length)];

  return (
    <div className="App">
      {isauth && user ? (
        <>
          {isModal && <Modal setModal={setIsModal} user={user} />}

          <Navbar
            randimg={randimg}
            user={user}
            setauth={setIsAuth}
            setuser={setUser}
          />
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/course/:courseId" element={<Course user={user} />} />
            <Route
              path="/students"
              element={<Students user={user} setcs={setCurrentStudent} />}
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
            element={<Login setModal={setIsModal} setauth={setIsAuth} setuser={setUser} />}
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
