import React from "react";
import "../styles/SStudent.css";
import dummy from "../assets/dummy.jpg";
import dummy1 from "../assets/dummy1.jpg";
import dummy2 from "../assets/dummy2.jpg";
import dummy3 from "../assets/dummy3.jpg";
import dummy4 from "../assets/dummy4.jpg";
import dummy5 from "../assets/dummy5.jpg";

const SingleStudent = ({ cs }) => {
  const dummyarray = [dummy, dummy1, dummy2, dummy3, dummy4, dummy5];
  const randimg = dummyarray[Math.floor(Math.random() * dummyarray.length)];
  const {
    firstname,
    lastname,
    course,
    factions,
    dateenrolled,
    expirydate,
    learningprogress,
    email,
    phone,
    address,
    dateofbirth,
    education,
    averagequizscore,
    averageprojectscore,
    averagepivscore,
    gender,
    absencenumber,
    sessionsattendedtotal,
    typeofstudy,
  } = cs;
  return (
    <section className="sstudent">
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p style={{ fontSize: "12px", color: "#afafaf" }}>
          Students/Students Profile
        </p>
        <strong>{firstname + " " + lastname}</strong>
      </div>

      <div className="bottom-profile">
        <div className="side-info">
          <img src={randimg} alt="student" />
          <b>{firstname + " " + lastname}</b>
          <p style={{ fontSize: "12px", color: "#afafaf" }}>{course}</p>
          <div className="bottom-info">
            <div className="single-info">
              <b>Faction</b>
              <p style={{ color: "#afafaf" }}>{factions[0]}</p>
            </div>
            <div className="single-info">
              <b>Subscription Date</b>
              <p style={{ color: "#afafaf" }}>{dateenrolled}</p>
            </div>
            <div className="single-info">
              <b>Expiry Date</b>
              <p style={{ color: "#afafaf" }}>{expirydate}</p>
            </div>
          </div>
        </div>
        <div className="side-overview">
          <div
          //   style={{ padding: "10px 0", borderBottom: "1px solid #232323" }}
          >
            <b style={{ padding: "10px 0", borderBottom: "1px solid #232323" }}>
              Overview
            </b>
          </div>

          <div className="bottom-overview">
            <div className="info-card">
              <p>Average Quiz Score</p>
              <p style={{ fontSize: "12px", color: "#afafaf" }}>
                Based on Assessments Done
              </p>
              <b style={{ fontSize: "24px" }}>{averagequizscore}</b>
            </div>
            <div className="info-card">
              <p>Average Project Score</p>
              <p style={{ fontSize: "12px", color: "#afafaf" }}>
                Based on Projects Completed
              </p>
              <b style={{ fontSize: "24px" }}>{averageprojectscore}</b>
            </div>
            <div className="info-card">
              <p>Average PIV Score</p>
              <p style={{ fontSize: "12px", color: "#afafaf" }}>
                Based on validated personal individual evaluations
              </p>
              <b style={{ fontSize: "24px" }}>{averagepivscore}</b>
            </div>
            <div className="session-card">
              <p>Sessions attended total</p>
              <b>{sessionsattendedtotal}</b>
            </div>
            <div className="session-card">
              <p>Absence Number</p>
              <b>{absencenumber}</b>
            </div>
            <div className="session-card">
              <p>Learning Progress</p>
              <b>{learningprogress}</b>
            </div>
            <div className="session-card">
              <p>Courses Completed</p>
              <b>0</b>
            </div>
          </div>
          <div className="student-profile">
            <div>
              <b>Personal Information</b>
            </div>
            <div className="p-info">
              <div className="info-group">
                <span>Gender</span>
                <span style={{ color: "#afafaf" }}>{gender}</span>
              </div>
              <div className="info-group">
                <span>Phone</span>
                <span style={{ color: "#afafaf" }}>{phone}</span>
              </div>
              <div className="info-group">
                <span>Email</span>
                <span style={{ color: "#afafaf" }}>{email}</span>
              </div>
              <div className="info-group">
                <span>Adrress</span>
                <span style={{ color: "#afafaf" }}>{address}</span>
              </div>
              <div className="info-group">
                <span>Current or Last Educational Background</span>
                <span style={{ color: "#afafaf" }}>{education}</span>
              </div>
              <div className="info-group">
                <span>Type of Study</span>
                <span style={{ color: "#afafaf" }}>{typeofstudy}</span>
              </div>
              <div className="info-group">
                <span>Date of birth</span>
                <span style={{ color: "#afafaf" }}>{dateofbirth}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleStudent;
