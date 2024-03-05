import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Components/LoginForm.css";
import "./Components/UserPage.css";
import LoginForm from "./Components/LoginForm";
import UserPage from "./Components/UserPage";

export default function App() {
  return (
   <UserPage/>
  );
}
