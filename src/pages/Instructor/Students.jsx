import React from "react";
import StudentList from "../../components/StudentList";

const Students = ({ setcs , user }) => {
  return (
    <main>
      <StudentList user={user} setcs={setcs} />
    </main>
  );
};

export default Students;
