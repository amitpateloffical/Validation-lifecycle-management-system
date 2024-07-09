import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import System from "./pages/System/System";
import Assesment from "./pages/Assesment/Assesment";
import Project from "./pages/Project/Project";
import Requirement from "./pages/Requirement/Requirement";
import Content from "./pages/Content/Content";
import Execution from "./pages/Execution/Execution";
import Report from "./components/Report/Report";
import Inventory from "./pages/Inventory/Inventory";
import Search from "./pages/Search/Search";
import Help from "./pages/Help/Help";
import SignUp from "./pages/SignUp/SignUp";
import MessageAdmin from "./pages/MessageAdmin/MessageAdmin";
import ForgotPasword from "./pages/ForgotPassword/ForgotPassword";
import Profile from "./pages/Profile/Profile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/contact-admin" element={<MessageAdmin />} />
        <Route path="/forgot-password" element={<ForgotPasword />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/system" element={<System />} />
          <Route path="/assesment" element={<Assesment />} />
          <Route path="/project" element={<Project />} />
          <Route path="/requirement" element={<Requirement />} />
          <Route path="/content" element={<Content />} />
          <Route path="/execution" element={<Execution />} />
          <Route path="/report" element={<Report />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/search" element={<Search />} />
          <Route path="/help" element={<Help />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
