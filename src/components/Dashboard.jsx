import React from "react";
import "../styles/Home.css";
import logomark from "../assets/logomark.png";
import { Link } from "react-router-dom";

const courses = [
  {
    faction: "CS08",
    title: "Fundamentals of Cybersecurity",
    elp: "15",
  },
  {
    faction: "CS06",
    title: "Intermediate Cybersecurity",
    elp: "23",
  },
  {
    faction: "CS04",
    title: "Advanced Cybersecurity",
    elp: "44",
  },
];
const Dashboard = ({ user }) => {
  const filteredCourses = courses.filter((course) =>
    user.factions.includes(course.faction)
  );
  return (
    <section className="dashboard">
      {filteredCourses.map((course,i) => {
        const { elp, faction, title } = course;
        return (
          <div key={i} className="course-tracker">
            <div className="mini-logo-div">
              <img alt="" className="mini-logo" src={logomark} />
            </div>
            <div className="resume-info">
              <div className="course-name">
                <span>{title}</span>
              </div>
              <div className="elp">
                Faction {faction} | Expected Learning Progress - {elp}%
              </div>
            </div>
            <div className="resume">
              <Link to={`/course/${faction}`} className="resume-button">
                {user.role === "instructor" ? "View" : "Resume"}
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Dashboard;
