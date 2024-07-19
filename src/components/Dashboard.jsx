import React from "react";
import "../styles/Home.css";
import logomark from "../assets/logomark.png";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="course-tracker">
        <div className="mini-logo-div">
          <img alt="" className="mini-logo" src={logomark} />
        </div>
        <div className="resume-info">
          <div className="course-name">
            <span>Fundamentals of Cybersecurity</span>
          </div>
          <div className="elp">Faction CS04 | Expected Learning Progress - 10%</div>
        </div>
        <div className="resume">
          <Link to="/course/cs04" className="resume-button"> View</Link>
        </div>
      </div>
      <div className="course-tracker">
        <div className="mini-logo-div">
          <img alt="" className="mini-logo" src={logomark} />
        </div>
        <div className="resume-info">
          <div className="course-name">
            <span>Adanced Cybersecurity</span>
          </div>
          <div className="elp">Faction CS08 | Expected Learning Progress - 25%</div>
        </div>
        <div className="resume">
          <Link to="/course/cs08" className="resume-button"> View</Link>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
