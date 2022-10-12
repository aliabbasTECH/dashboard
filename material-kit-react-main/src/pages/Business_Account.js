import { Button, Grid, TextFieldTypography , ButtonGroup, TextareaAutosize, TextField, } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import ButtonLeftlist from '../components/ButtonsTalash/buttonLeftlist'
import ButtonRightList from '../components/ButtonsTalash/buttonRightList'
import { DashboardSidebar } from '../components/dashboard-sidebar'
import { NewDashboardNavbar } from './Home/newNavbar';
import { useEffect, useState } from "react";
import { Box, margin } from '@mui/system'
import MathValidation from '../components/MathValidatiobn/MathValidation'


export default function Business_Account() {

   const [isSidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div>
    <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="//fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap" rel="stylesheet"
        />
    </Head>

    <NewDashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
    <div><h3 style={{"textAlign":"center","paddingLeft":"140px","marginBottom":"-29px","fontSize":"23px"}}>Customer Account</h3></div>
    <Grid container xs direction="row" > 

    <Grid item  xs={0} md={0}  lg={2}   >

    </Grid>

    <Grid item  xs > <ButtonLeftlist/> </Grid>

    <Grid item xs direction="column" sx={{display:"flex" ,alignItems: "center", mt:4,mr: 15, width:150}}>
    <Box  sx={{ 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height:"80%",
        margin: "5px 0px",
        width: "252px",
        }} >
        <TextField   color="warning"   
        sx={{ mt:1,boxShadow: 3 ,borderRadius:1 }} inputProps={{style:{padding:"6px 10px", fontSize:"14px" , borderColor:"orange" }}}  placeholder="Full Name"              
         />
        <TextField   color="warning"   
        
        sx={{ mt:1,boxShadow: 3 ,borderRadius:1 }} inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} placeholder="Land Line Number "      
         />
        <TextField   color="warning"   
        sx={{ mt:1,boxShadow: 3 ,borderRadius:1 }} inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} placeholder="Mobile No"             
         />
        <TextField   color="warning"   
        sx={{ mt:1,boxShadow: 3 ,borderRadius:1 }} inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} placeholder="Whatsapp No"            
         />
        <TextField   color="warning"   
        sx={{ mt:1,boxShadow: 3 ,borderRadius:1 }} inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} placeholder="Email Address"         
         />
        <TextField   color="warning"   
        sx={{ mt:1,boxShadow: 3 ,borderRadius:1 }} inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} placeholder="Facebook ID "           
         />
        <TextField   color="warning"   
        sx={{ mt:1,boxShadow: 3 ,borderRadius:1 }} inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} placeholder="Instagram ID"          
         />
        <TextField   color="warning"   
        sx={{ mt:1,boxShadow: 3 ,borderRadius:1 }} inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} placeholder="Country"               
         />
        <TextField   color="warning"   
        sx={{ mt:1,boxShadow: 3 ,borderRadius:1 }} inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} placeholder="Province / Estate "     
         />
        <TextField   color="warning"   
        sx={{ mt:1,boxShadow: 3 ,borderRadius:1 }} inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} placeholder="City "                 
         />
        <TextField   color="warning"   
        sx={{ mt:1,boxShadow: 3 ,borderRadius:1 }} inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} placeholder="UC/ VC/ Main Area "    
         />
        <TextField   color="warning"   
        inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}} sx={{ mt:1,boxShadow: 3 ,borderRadius:1, mb:2 }} placeholder="Nearest Famous Place "
         />
        <TextareaAutosize   minRows={3}   placeholder=" Street Address "   
         />
         <Box height={20} ></Box>
        <TextareaAutosize   minRows={4}   placeholder=" Google Maps Link  "  
        
         />
     </Box>
       
    </Grid>
    
    <Grid item xs  direction="column" sx={{display:"flex" ,alignItems: "center", mt:2 ,mr: 15,}}>
    
    <Box  sx={{ 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height:"140px",
                width: "100%",
                margin: "22px 0px",
             }} >

    <TextField   color="warning"  
         inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}  sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} placeholder="Business Name" />
    <TextField   color="warning" 
         inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}  sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} placeholder="Business Type" />
    <TextField   color="warning" 
         inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}  sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} placeholder="Plaza / Market Name" />
    <TextField   color="warning" 
         inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}  sx={{ mt:1,mb:1, boxShadow: 3 ,borderRadius:1 }} placeholder="Plaza / Market Name" />
     </Box>
    <div>
        <h3>
        Business Pic Slide Show
        </h3>
    </div>

    <img style={{width:"100%",height:"120px"}}  src="https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png" />
       
       <Box  sx={{ 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height:"130px",
                width: "100%",
                margin: "22px 0px",
                
             }} >
        <TextField   color="warning"  
         inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}   sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} placeholder="User ID" />
        <TextField   color="warning" 
         inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}  sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} placeholder="Password" />
        <TextField   color="warning" 
         inputProps={{style:{padding:"6px 10px", fontSize:"14px" }}}  sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} placeholder="Confirm Password" />
        
        </Box>

        <MathValidation/>
        
        <Box  sx={{ 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "183px",
                margin: "22px 0px",
                width: "100%",
                alignContent: "space-around",
             }} >
            <Button variant="contained"  sx={{backgroundColor:"#70B243"}}> Submit</Button>

            <Button variant="contained" sx={{backgroundColor:"#FFC619"}}>Customer Account</Button> 

            <Button variant="contained"  sx={{backgroundColor:"#F37825"}}> Talaash Agent Account</Button> 
          
            <Button variant="contained" 
               sx={{ 
                clipPath: "polygon(100% 0%, 100% 50%, 100% 100%, 18% 100%, 0 50%, 18% 0)",
                width:150,
                backgroundColor:"#040404",
                ml:5.4
               }}
           >Contained</Button>   
        </Box>
    </Grid>
    
    <Grid item xs > <ButtonRightList/>  </Grid>

    </Grid>
    
    <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />

    </div>
  )
}
