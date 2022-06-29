import React,{useContext} from 'react'
import { Box,Typography } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'


// const LeftArrow = () => {
//     const { scrollPrev } = useContext(VisibilityContext);
//     console.log(scrollPrev);
  
//     return (
//       <Typography onClick={() => scrollPrev()} className="right-arrow">
//         <img src={LeftArrowIcon} alt="right-arrow" />
//       </Typography>
//     );
//   };
  
//   const RightArrow = () => {
//     const { scrollNext } = useContext(VisibilityContext);
  
//     return (
//       <Typography onClick={() => scrollNext()} className="left-arrow">
//         <img src={RightArrowIcon} alt="right-arrow" />
//       </Typography>
//     );
//   };

function LeftArrow() {
  const { isFirstItemVisible,scrollPrev } =  useContext(VisibilityContext);

  return (
          <Typography disabled={isFirstItemVisible} onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
            {/* {console.log(scrollPrev)} */}
          </Typography>
        );
}

function RightArrow() {
  const { isFirstItemVisible,scrollNext } = useContext(VisibilityContext);

  return (
          <Typography disabled={isFirstItemVisible} onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
          </Typography>
        );
}
const HorizontalScrollBar = ({data,bodyPart,setBodyPart})=>{
    return(
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>  
            {
                data.map((item)=><Box key={item.id || item}>
                    <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                </Box>)
            }
        </ScrollMenu>
    )
}

export default HorizontalScrollBar