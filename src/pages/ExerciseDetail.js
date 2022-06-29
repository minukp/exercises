import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions,fetchData,youtubeOptions } from '../utils/fetchData';
import {Box} from '@mui/material'
import Detail from '../component/Detail';
import ExerciseVideos from '../component/ExerciseVideos';
import SimilarExercises from '../component/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail] = useState({});
  const [exerciseVideos,setExerciseVideos] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [targetExercises, setTargetExercises] = useState([]);

  const {id} = useParams();

  useEffect(()=>{
    const fetchExerciseData = async ()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeAPI = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);
      const exerciseVideosData = await fetchData(`${youtubeAPI}/search?query=${exerciseDetailData.name}`,youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
      const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
      setTargetExercises(targetMuscleExerciseData);
      const equipmentMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);     
      setEquipmentExercises(equipmentMuscleExerciseData);
    }
    fetchExerciseData();
  },[id])
  
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExerciseData={targetMuscleExerciseData} equipmentMuscleExerciseData={equipmentMuscleExerciseData} />
    </Box>
  )
}

export default ExerciseDetail