import React from "react";
import TraineeDashboard from "../components/TraineeDashboard";
import TrainerDashboard from "../components/TrainerDashboard";

const Dashboard = () => {
  return (
    <div className="">
      {/* Add logic to render Trainee Dahboard when user is trainee or trainer dashboard when user is trainer */}
      
      {/* <TraineeDashboard /> */}
      <TrainerDashboard />
    </div>
  );
};

export default Dashboard;
