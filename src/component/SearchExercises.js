import {useState,useEffect} from 'react'
import {Box,Button,Stack,Typography,TextField} from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
    const [input,setInput] = useState('');
    
    const [bodyParts,setBodyParts] = useState([]);
    // console.log(input);

    useEffect(()=>{
        console.log("calling useefeect")

        const fetchExercisesData = async ()=>{
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
            console.log(bodyPartsData);
            setBodyParts(['all',...bodyPartsData]);
            
        }
        fetchExercisesData(); 
        console.log(bodyParts)

    },[])

    const handleInput = async ()=>{
       
        if(input){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
            //console.log(exercisesData);
            const searchedData = exercisesData.filter((exercise)=>exercise.name.toLowerCase().includes(input) 
            || exercise.equipment.toLowerCase().includes(input)
            || exercise.bodyPart.toLowerCase().includes(input)
            || exercise.target.toLowerCase().includes(input)
            
            )
            setInput('');
            setExercises(searchedData);
            // console.log(exercises);
        }
        

    }
  return (
    <Stack alignItems="center" justifyContent="center" mt="2.5rem">
        <Typography fontWeight={700} sx={{fontSize : {lg:"44px",xs:"30px"}}} textAlign="center" >
            Awesome exercises you <br/>should know
        </Typography>
        <Box position="relative"> 
            <TextField
            sx={{
                input:{fontWeight:"700",border:"none",borderRadius:"4px"},
                backgroundColor:"#fff",
                width:{lg:"60vw",sm:"340px"},
                borderRadius:"40px"
            }}
            type="text"
            height="76px"
            value={input}
            onChange={(e)=>{setInput(e.target.value.toLowerCase())}}
            placeholder="Search for Exercises"
            />
            <Button className="search-btn"
            sx={{
                bgcolor:"#ff2626",
                color:"#fff",
                width:{lg:"170px",xs:"80px"},
                fontSize:{lg:"20px",xs:"14px"},
                height:"56px",
                position:"absolute",
                right:"0"
            }}
            onClick={handleInput}
            >
                Search
            </Button>
        </Box>
        <Box sx={{position:"relative",width:"100%",p:"20px"}}>
            <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>

    </Stack>
  )
}

export default SearchExercises