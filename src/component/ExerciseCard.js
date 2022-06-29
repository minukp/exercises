import React from 'react'
import {Link} from 'react-router-dom'
import {Button,Stack,Typography} from '@mui/material'


const ExerciseCard = ({exercise}) => {
  return (

    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
        <img src={exercise.gifUrl}  alt={exercise.name} loading="lazy"/>
        <Stack direction="row">
            <Button sx={{textTransform:"capitalize",ml:"40px",fontSize:"14px",color:"#fff",backgroundColor:"#ffa9a9",borderRadius:"20px"}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{textTransform:"capitalize",ml:"40px",fontSize:"14px",color:"#fff",backgroundColor:"#fcc757",borderRadius:"20px"}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml="21px" fontWeight="600" fontSize="1rem" color="#000" textTransform="capitalize" pb="10px">{exercise.name}</Typography>
    </Link>
  )
}

export default ExerciseCard