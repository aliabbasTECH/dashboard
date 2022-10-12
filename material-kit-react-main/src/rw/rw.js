// this project is for Nextjs with ReactJs

import React,{useState} from 'react'
import {Button, Checkbox, Radio} from '@mui/material';//for next
import {FavoriteBorder,Favorite,} from '@mui/icons-material';//fro next



export default function AllButtonsAndCheckboxes() {
   const [name , setName]=useState([]) //for checkboxes
   const [color , setColor]=useState("primary")

   function funcbutton(e){
          setColor("secondary")
   }

     function getValue(e){
        let data=name;
        data.push(e.target.value)
        alert(data)
     }

     function radioFunction(e){
          alert(e)
     }

  return (
    <>
    <div>AllButtonsAndCheckboxes</div>
    <Button color={color} onClick={funcbutton()} >Button</Button>
    <Checkbox color='primary' values="ali"  onChange={(e)=>{getValue(e)}} ></Checkbox>
    <Checkbox color='primary' values="ali" indeterminate onChange={(e)=>{getValue(e)}} ></Checkbox>
    <Checkbox 
    color='primary' 
    values="ali" 
    onSubmit={(e)=>{getValue(e)}}
    icon={<FavoriteBorder/>}
    checkedIcon={<Favorite/>}
    ></Checkbox>

    <Radio
    color="primary"
    value ="male"
    onChange={(e)=>{radioFunction(e)}}
    />
    <Radio
    color="secondary"
    value ="female"
    onChange={(e)=>{radioFunction(e)}}
    />


    </>
  )
}
