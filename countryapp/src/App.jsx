/* eslint-disable no-unused-vars */
import React from "react"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Countries from "./components/countries"
import Header from "./components/header"
import Filter from "./components/filter"

function App() {
  return (
    <>
      <Header/>
      <Filter/>
      <Countries/>
    </>
  )
}

export default App
