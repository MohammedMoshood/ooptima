import React from "react";
import StudentList from "../../components/StudentList";

const Students = ({ setcs }) => {
  return (
    <main>
      <StudentList setcs={setcs} />
    </main>
  );
};

export default Students;
