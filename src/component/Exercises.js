import React,{useState,useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import { Typography,Stack,Box } from '@mui/material'
import ExerciseCard from './ExerciseCard'
import { fetchData } from '../utils/fetchData'
import { exerciseOptions } from '../utils/fetchData'

const Exercises = ({exercises,setExercises,bodyPart}) => {
  // console.log(exercises)
  const [currentPage,setCurrentPage] = useState(1);

  useEffect(()=>{
    const fetchExerciseData = async ()=>{
      let exercisesData =[];

      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
       
      }else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      setExercises(exercisesData);
    }
    fetchExerciseData();

  },[bodyPart])

  const exercisePerPage = 9;

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise);

  const paginate = (e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1800,behavior:"smooth"})
  }

  return (
    <Box id="exercises"
    sx={{
      mt:{lg:"110px"}
    }}
    mt="50px"
    p="20px"
    
    >
      <Typography variant="h3" mt="3rem" mb="5rem" ml="1rem">Showing Results</Typography>
     
      <Stack direction="row" gap="2rem" justifyContent="center" flexWrap="wrap">
      {
        currentExercises.map((exercise,index)=>(        
          
          <ExerciseCard  exercise={exercise} key={index} />
          
        ))
      }

    </Stack>
    <Stack>
      {
       
          <Pagination 
            count={Math.ceil(exercises.length/exercisePerPage)} 
            color="standard" 
            defaultPage={1}
            shape="rounded"
            page={currentPage}
            onChange={paginate}
            size="large"
          />
       
      }
    </Stack>
   

    </Box>
  )
}

export default Exercises