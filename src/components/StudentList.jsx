import React from "react";
import "../styles/Student.css";
import { users } from "../data/student";
import { Link } from "react-router-dom";
const StudentList = ({ setcs, user }) => {
  const filteredStudents = users.filter((student) =>
    student.factions.some((faction) => user.factions.includes(faction))
  );
  console.log(filteredStudents);
  return (
    <section className="students-list">
      <p>Students List</p>
      <div className="filter-group"></div>
      <div className="students-table">
        <div className="single-student-header">
          <span className="f-n">Full Name</span>
          <span className="em">Email</span>
          <span className="course">Course</span>
          <span className="fa">Faction</span>
          <span className="l-p">Progress</span>
          <span className="date-e">Date Enrolled</span>
        </div>
        {filteredStudents.map((st, i) => {
          const {
            firstname,
            lastname,
            factions,
            email,
            course,
            learningprogress,
            dateenrolled,
            studentid,
          } = st;

          return (
            st.role !== "instructor" && (
              <div key={i} className="single-student">
                <span className="f-n" onClick={() => setcs(filteredStudents[i])}>
                  <Link
                    to={`/students/${studentid}`}
                  >{`${firstname}  ${lastname}`}</Link>
                </span>
                <span className="em">{email}</span>
                <span className="course">{course}</span>
                <span className="fa">{factions.map((f) => f)}</span>
                <span className="l-p">{learningprogress}</span>
                <span className="date-e">{dateenrolled}</span>
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};

export default StudentList;
