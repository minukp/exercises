import React from 'react'
import { Typography,Stack,Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import Equipment from '../assets/icons/equipment.png'


const Detail = ({exerciseDetail}) => {
    // console.log(exerciseDetail);
    const {bodyPart,equipment,gifUrl,id,name,target} = exerciseDetail;
    const extraDetail = [
        {
            icon:BodyPartImage,
            name:bodyPart
        },
        {
            icon:TargetImage,
            name:target
        },
        {
            icon:Equipment,
            name:equipment
        }

    ]
  return (
    <Stack gap="60px" sx={{flexDirection:{lg:"row"},p:"20px",justifyContent:"center"}} >
        <img src={gifUrl} alt={name} loading="lazy" className='detail-image'/>
        <Stack sx={{gap:{lg:"35px",xs:"20px"}}}>
            <Typography variant="h3" sx={{textTransform:"capitalize",}}>{name}</Typography> 
            <Typography>
                Exercises keep you strong. {name} is one of the best exerices to target your {target}. It will help ypu improve your mood and gain energy.
            </Typography>
            {
                extraDetail.map((item,index)=>{
                    return(
                        <Stack key={index} gap="24px" direction="row" alignItems="center">
                            <Button sx={{backgroundColor:"#fff2db",borderRadius:"50%",width:"100px",height:"100px"}}>
                                <img src={item.icon} alt={item.name} style={{width:"50px",height:"50px"}} />
                            </Button>
                           
                            <Typography textTransform="capitalize" variant="h5">{item.name}</Typography>
                        </Stack>
                    )

                 
                }
                )
                   
            }

        </Stack>

    </Stack>
  )
}

export default Detail