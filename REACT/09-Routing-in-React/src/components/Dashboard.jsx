import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {Outlet} from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      <h1>Dashboard Page</h1>
      <button onClick={handleClick}>Move to Home Page</button>
      <div>
        <ul id="list">
          <li id="content">
            <NavLink to="/dashboard/courses">Courses</NavLink>
          </li>
          <li id="content">
            <NavLink to="/dashboard/mock-tests">Mock-Tests</NavLink>
          </li>
          <li id="content">
              <NavLink to="/dashboard/reports">Reports</NavLink>
          </li>
          <li id="content">
              <NavLink to="/dashboard">Home</NavLink>
          </li>
        </ul>
    

      </div>
       <Outlet />
    </>
  );
};

export default Dashboard;
