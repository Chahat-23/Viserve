import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import HomePage from './Components/HomePage/HomePage'
import VideoSection from './Components/VideoSection/VideoSection'
import Clients from './Components/Clients/Clients'

function App() {

  return (
    <>
      <Header/>
      <HomePage/>
      <VideoSection/>
      <Clients/>
    </>
  )
}

export default App
