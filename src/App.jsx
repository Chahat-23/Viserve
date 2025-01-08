import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import HomePage from './Components/HomePage/HomePage'
import VideoSection from './Components/VideoSection/VideoSection'

function App() {

  return (
    <>
      <Header/>
      <HomePage/>
      <VideoSection/>
    </>
  )
}

export default App
