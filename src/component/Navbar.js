import React from 'react'
import {Link} from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack flexDirection="row" justifyContent="space-around" sx={{gap:{xs:"40px",sm:"100px"},mt:{ xs: 2, sm: 3, md: 4},justifyContent:"none"}} px="20px" >
        <Link to="/">
            <img src={Logo} alt="Logo"  style={{margin:"0px 20px",width:"48px",height:"48px"}}/>            
        </Link>
        <Stack style={{flexDirection:"row",gap:"40px",fontSize:"24px",alignItems:"flex-end"}}>
            <Link to="/" style={{textDecoration:"none",color:"#3a1212",borderBottom:"3px solid #ff2625"}}>Home</Link>
            <a href="#exercise" style={{color:"#3a1212",textDecoration:"none"}}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar