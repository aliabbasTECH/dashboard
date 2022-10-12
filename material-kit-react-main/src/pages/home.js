import React from 'react'
// import imam from '../icons/sermon.png'

import { NewDashboardNavbar  } from "./Home/newNavbar";
import { DashboardSidebar } from '../components/dashboard-sidebar';
import { Grid, ThemeProvider ,Button,ButtonGroup, Box, Avatar,} from '@mui/material';
import { useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';

import { styled } from '@mui/material/styles';


import ButtonLeftlist from '../components/ButtonsTalash/buttonLeftlist'
import ButtonRightList from '../components/ButtonsTalash/buttonRightList';

export default function Home(props) {

  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);


  return (
  <div >
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="//fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap"
          rel="stylesheet"
        />
      </Head>

  <HomeLayoutRoot>
        
  </HomeLayoutRoot>
  <NewDashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
  {/* <Box sx={{
        height: 150,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    /> */}
  <Grid item container direction="column" xs sx={{ justifyContent:"flex-end", }}> 
    <Grid container xs direction="row" > 
    <Grid item xs={0} md={0}  lg={2}   >

    </Grid>
    {/* button list 1 */}
    <Grid item xs spacing={2}  >
      <ButtonLeftlist/>
    </Grid> 
    {/* button list center 2 */}
      <Grid item xs spacing={2} sx={{}} >
        <div className="" style={{textAlign:"center",}}>
          <ButtonGroup
             orientation="vertical"
             sx={{width:270 ,mt:8 }}
            >
              <Button 
              variant="contained"   
              sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#F57A27",'&:hover': { backgroundColor: '#F57A27', opacity: [0.9, 0.8, 0.7],} ,fontFamily:"monospace" , fontSize:20, borderRadius:0 }}>
                Search</Button>
              <Button 
              variant="contained"   
              sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#4071CA",'&:hover': { backgroundColor: '#4071CA', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"monospace" , fontSize:20 }}>
                Enter Your Data</Button>
              <Button 
              variant="contained"   
              sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#70B244",'&:hover': { backgroundColor: '#70B244', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"monospace" , fontSize:20 }}>
                Login</Button>
              <Button 
              variant="contained"   
              sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#F8C200",'&:hover': { backgroundColor: '#F8C200', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"monospace" , fontSize:20 }}>
                Signup</Button>
              
              <Button 
              variant="contained"   
              sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#A6A6A6",'&:hover': { backgroundColor: '#A6A6A6', opacity: [0.9, 0.8, 0.7],} , fontFamily:"monospace" , fontSize:20, }}>
                Subscription Plans</Button>
              <Button 
              variant="contained"   
              sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#5D9EDB",'&:hover': { backgroundColor: '#5D9EDB', opacity: [0.9, 0.8, 0.7],} ,fontFamily:"monospace" , fontSize:20 , borderRadius: 0, }}>
                Contact us</Button>
          </ButtonGroup>
        </div>
      </Grid>

      <Grid item xs spacing={2}>
        <ButtonRightList/>
      </Grid>

    </Grid>
  </Grid>
  
  <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />

    </div>
  )
}

const HomeLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
 
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));





