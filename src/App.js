import { MainPage } from './pages/MainPage';

import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
       <MainPage />
    </Router>
  );
}