import React from "react";
import Dashboard from "../../components/Dashboard";

const Home = ({user}) => {
  return (
    <main>
      <Dashboard user={user}/>
    </main>
  );
};

export default Home;
