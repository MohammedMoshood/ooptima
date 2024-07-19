import React from "react";
import Navbar from "../../components/Navbar";
import StudentList from "../../components/StudentList";

const Students = ({ setcs }) => {
  return (
    <main>
      <StudentList setcs={setcs} />
    </main>
  );
};

export default Students;
