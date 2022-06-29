import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Footer from './component/Footer'

const App = () => {
  return (
    <Box width="400px" m="auto" sx={{width:{xl:"1488px"}}}>
        <Navbar />             
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>        
        <Footer/>
    </Box>
  )
}

export default App