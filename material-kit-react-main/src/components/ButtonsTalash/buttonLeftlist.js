
import { Button,ButtonGroup, Box, Avatar,} from '@mui/material';

import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { GiBlockHouse,GiTeacher, GiWantedReward } from "react-icons/gi";
import { SiHappycow } from "react-icons/si";
import { FaChalkboardTeacher ,FaQuran } from "react-icons/fa";
import Person3SharpIcon from '@mui/icons-material/Person3Sharp';






export default function ButtonLeftlist() {
  return (
    
   
        <div className=" " style={{}}>
          <ButtonGroup
            orientation="vertical"
            sx={{width:170 , ml:2 }} 
          >
           <Button 
           endIcon={<BusinessIcon/>} variant="contained"  
           sx={{ boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m:1 ,pt:1, backgroundColor:"#FFC294",'&:hover': { backgroundColor: '#FFC294', opacity: [0.9, 0.8, 0.7],}  ,borderRadius: 0,  fontFamily:"'Noto Nastaliq Urdu', serif;" }}>کاروبر</Button>
           
           
           <Button endIcon={<EngineeringIcon/>} variant="contained"   
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#89CAFF",'&:hover': { backgroundColor: '#89CAFF', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>  کاریگر</Button>

           <Button 
             endIcon={<HomeRepairServiceIcon/>}variant="contained"   
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#588539",'&:hover': { backgroundColor: '#588539', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>مزدورہیلپر</Button>
           
           <Button 
            endIcon={<GiBlockHouse/>}  variant="contained"   
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#AFBBCB",'&:hover': { backgroundColor: '#AFBBCB', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
            گھریلوسامان</Button>
           
           <Button 
           endIcon={<SiHappycow/>}
           variant="contained"   
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#FFC106",'&:hover': { backgroundColor: '#FFC106', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
            مالمویشی</Button>
           <Button 
           endIcon={<Person3SharpIcon/>}
           variant="contained"   
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#06B354",'&:hover': { backgroundColor: '#06B354', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
            عالم ومفتی</Button>
           <Button 
           endIcon={<FaChalkboardTeacher/>} variant="contained"   
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#0773C0",'&:hover': { backgroundColor: '#0773C0', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;" }}>
            امام حافظ و قاری</Button>
           <Button 
           endIcon={<GiTeacher></GiTeacher>}
           variant="contained"   
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#8446B2",'&:hover': { backgroundColor: '#8446B2', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;",}}>
            اساتزہکرام</Button>
            <Button
            endIcon={<GiWantedReward />} 
           variant="contained"   
           sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#C70F0F",'&:hover': { backgroundColor: '#C70F0F', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"'Noto Nastaliq Urdu', serif;",borderRadius: 0, }}>
            تلاش گمشدہ</Button>
           
         </ButtonGroup>    
        </div>
     
  )
}
