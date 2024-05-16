import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Sandbox from './Sandbox'

import './styles/index.css'
import "./styles/styles.css"
import "./styles/tailwind-pre-build.css"

function App() {
  return (
    <Router>
      <Sandbox />
    </Router>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
