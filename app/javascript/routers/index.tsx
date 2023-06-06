import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import DashBoard from "../components/Dashboard";
import NewInvitation from "../components/NewInvitation";
import PrivateRoute from "./privateRoute";

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route
          path="/dashboard"
          element={<PrivateRoute component={DashBoard} />}
        />
        <Route
          path="/new-invitation"
          element={<PrivateRoute component={NewInvitation} />}
        />
      </Routes>
    </Router>
  );
}

export default Index;
