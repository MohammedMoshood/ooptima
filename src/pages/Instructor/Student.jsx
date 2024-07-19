import React from "react";
import Navbar from "../../components/Navbar";
import SingleStudent from "../../components/SingleStudent";

const Student = ({cs}) => {
  return (
    <main>
      <SingleStudent cs={cs} />
    </main>
  );
};

export default Student;
