import React from 'react'
import {Box,Button,Stack,Typography} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
import { Block } from '@mui/icons-material'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:"212px",xs:"70px"},
        ml:{sm:"50px"}
    }}>
        <Typography color="#ff2626" fontWeight="600" fontSize="2rem">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} mt={3} sx={{
            fontSize:{lg:"44px",xs:"40px"}
        }}>
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="1.5rem" lineHeight="2.5rem" mt={3} mb={5}>
            Check out the most effective Exercises
        </Typography>
        <Button variant="contained"  href="#exercises" sx={{backgroundColor:"#ff2626",p:2}}>
            Explore Exercises
        </Button>
        <Typography fontWeight="600" color="#ff2625" sx={{opacity:"0.1",display:{lg:"block",sm:"none"}}} fontSize="200px" mt={4}>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="Banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner