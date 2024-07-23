import React, { useState } from "react";
import "../styles/Nav.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const Navbar = ({ randimg, setuser, setauth, user }) => {
  const [isMenu, setIsMenu] = useState(false);
  const { pathname } = useLocation();
  const { firstname, lastname, role } = user;
  const navigate = useNavigate();
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
              {user.role === "instructor" ? "Teach" : "Learn"}
              {!isMenu ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
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
            {user.role === "instructor" ? (
              <>
                <Link to="/students">
                  <li
                    className={pathname.includes(`/students`) ? "active" : ""}
                  >
                    My Students
                  </li>
                </Link>
                <Link>
                  <li> Lab Phase</li>
                </Link>
              </>
            ) : null}
          </ul>
        </div>

        <div className="nav-right">
          <img src={randimg} alt="user" className="user-img" />
          <div className="user-info">
            <span className="name">{lastname + " " + firstname}</span>
            <span className="role">{role}</span>
          </div>
          <button
            onClick={() => {
              setauth(false);
              setuser({});
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
