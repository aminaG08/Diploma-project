import React from "react"
import './assets/styles/_index.scss'
import Header from "./assets/landing/sections/Header"
import About from "./assets/landing/sections/About"
import Statistics from "./assets/landing/sections/Statistics"
import Steps from "./assets/landing/sections/Steps"
import Causes from "./assets/landing/sections/Causes"
import Therapy from "./assets/landing/sections/Therapy"
import Stories from "./assets/landing/sections/Stories"

function App() {
  return (
    <>
      <Header />
      <About />
      <Statistics />
      <Steps />
      <Causes />
      <Therapy />
      <Stories />
    </>
  )
}

export default App
