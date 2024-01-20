import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <Navbar isUserLoggedIn={false} />
      <Outlet />
    </React.Fragment>
  );
};

export default App;
