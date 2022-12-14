import { Input, TextField, Typography } from '@mui/material'
import { borderRadius, Box, display } from '@mui/system'
import React, { useState } from 'react'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { green } from '@mui/material/colors';
import $ from 'jquery';

export default function MathValidation() {

  const [usernum, setUsernum] = useState()
  const [check, setCheck]= useState(false)
  
  // var sign = ["+"]
  var num1 = Math.floor(Math.random() * 5) + 1;
  var num2 = Math.floor(Math.random() * 5) + 1;
  // var signpick = sign[Math.floor(Math.random()*sign.length)];
  var total
 
  
  function calculate(e){
    // if(signpick == "-"){total= num1-num2;}
    total= num1+num2;
    e == total? setCheck(true):setCheck(false)
    check?$(".divnum").css("border-color","orange"):$(".divnum").css({"border-color":"red"})
  }  
  
   

    return (
    <div >
     
   {check? 
   <CheckCircleOutlineRoundedIcon sx={{
        width:51,
        height:51,
        color: "green"
        
   }} />: <Box sx={{
       mt:1,mb:1,
       display:"flex"
     }}>
      
      <Box sx={{
        display:"flex"
      }}>
        <div className='divnum' style={myStyle}>
          <p>
            {num1}
          </p>
        </div>
        <div className='divnum' style={myStyle}>
          <p>
            +
          </p>
        </div>
        <div className='divnum' style={myStyle}>
          <p>
            {num2}
          </p>
        </div>
        <div className='divnum' style={{display:"flex", alignItems: "center", padding: "5px 10px" ,fontSize:25, }}>
          <p>
            =
          </p>
        </div>
      </Box>
      
      <TextField  
      inputProps={{
        maxlength: 1,
        style:{padding:"9px 9px", fontSize:"24px", boxShadow:3 } 
      }}
      sx={{  boxShadow: 1 ,borderRadius:1 }}
      onChange={(e)=>{calculate(e.target.value)}} /> 

     </Box>}
     



    </div>
  )
}


const myStyle = {
  color: "black",
  border: "3px solid orange",
  width:51,
  height:51,
  margin:"0px 5px" ,
  padding:2,
  fontFamily: "Sans-Serif",
  fontSize:28,
  textAlign:"center",
  borderRadius:10,
};