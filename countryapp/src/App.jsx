/* eslint-disable no-unused-vars */
import React from "react"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Countries from "./components/countries"
import Header from "./components/header"
import Filter from "./components/filter"
import Country from "./components/country"
import {useParams} from 'react-router-dom'
function App() {

  const {name} = useParams()
  return (
    <Router>
      <Header />
      
      <Routes>
      <Route path="/" element={<React.Fragment><Countries /></React.Fragment>} />
      <Route path={`/countries/:${name}`} element = {<Country />}/>
      </Routes>
      
      
    </Router>
  )
}

export default App
