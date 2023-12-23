import React from "react";
import "./App.css";
import Dashboard from "./screens/Dashboard";
import { NavigationBar, SideBar } from "./common/components";

const App = () => {
  return (
    <div>
      <NavigationBar header={"Your boards"}/>
      <Dashboard />
    </div>
  );
};

export default App;
