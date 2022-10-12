// import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar,  Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Head from 'next/head';

const NewDashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#F47926",
  boxShadow: theme.shadows[3],
  justifyContent: "center",
  position:'static'
  
}));

export const NewDashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <div style={{display: "flex",
      justifyContent: "flex-end",}}>
    <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="//fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap"  rel="stylesheet" />

    </Head>
      <NewDashboardNavbarRoot
        sx={{ 
          width: {
            lg: '85%'
          },
          height:"75px"
        }}
        {...other}>
      <Toolbar
        disableGutters
        sx={{left: 0, px: 6}}
        backgroundColor={{  backgroundColor:"#ffff", }}
      >
          <IconButton onClick={onSidebarOpen} sx={{ display: {  xs: 'inline-flex',  lg: 'none' } }}>
           <MenuIcon fontSize="small" />
          </IconButton>
           {/* <div style={{display:'flex',alignItems:"flex-end",}}>
           <p style={{ fontSize:"40px",}} >Talash</p><p style={{ paddingBottom:"8px"}} >.com</p> 
           </div> */}
          <Box sx={{ flexGrow: 1 }} /> 
           <div style={{display:'flex',alignItems:"flex-end",fontFamily:"'Noto Nastaliq Urdu', serif" ,fontWeight:300}}>
           <p style={{ paddingBottom:"8px"}} > سب کی سب کیلیے </p><p style={{ fontSize:"38px" ,marginTop:"-20px" }}>تلاش </p> 
           </div>
      </Toolbar>
    </NewDashboardNavbarRoot>
    </div>
  );
}

NewDashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};



