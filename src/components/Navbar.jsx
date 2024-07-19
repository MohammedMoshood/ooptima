import React, { useState } from "react";
import "../styles/Nav.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const Navbar = ({ setrole, setauth }) => {
  const [isMenu, setIsMenu] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);
  return (
    <nav>
      <div className="nav">
        <div className="nav-left">
          <img alt="" className="nav-logo" src={logo} />
          <ul>
            <Link to="/">
              <li className={pathname === "/" ? "active" : ""}>Dashboard</li>
            </Link>

            <li
              onClick={() => setIsMenu(!isMenu)}
              style={{ position: "relative" }}
            >
              Teach {!isMenu ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
              <div className={`drop-down ${!isMenu && "menu-closed"} `}>
                <ul>
                  <Link>
                    <li>Quiz</li>
                  </Link>
                  <Link>
                    <li>Projects</li>
                  </Link>
                  <Link>
                    <li style={{ border: "none" }}>Attendance</li>
                  </Link>
                </ul>
              </div>
            </li>

            <Link to="/students">
              <li className={pathname.includes(`/students`) ? "active" : ""}>
                {" "}
                My Students
              </li>
            </Link>
            <Link>
              <li> Lab Phase</li>
            </Link>
          </ul>
        </div>

        <div className="nav-right">
          <div className="user-info">
            <span className="name">Mohammed Moshood</span>
            <span className="role">Instructor</span>
          </div>
          <button
            onClick={() => {
              setauth(false);
              setrole("");
              navigate("/");
            }}
            className="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
