
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import {useState} from 'react';
import sticker from './img/sticker.PNG'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Item = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  border: "2px solid black",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width:100,
  height:80
}));

function Home() { 
    const {state} = useLocation();
    const { music, travel,movie,fact,funny } = state; // Read values passed on state
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);
    
        // 👇️ or set to true
        // setIsActive(true);
      };
      const handleClick1 = () => {
        // 👇️ toggle
        setIsActive1(current => !current);
    
        // 👇️ or set to true
        // setIsActive(true);
      };
      const handleClick2 = () => {
        // 👇️ toggle
        setIsActive2(current => !current);
    
      };
      const handleClick3 = () => {
        // 👇️ toggle
        setIsActive3(current => !current);
    
  
      };
      const handleClick4 = () => {
        // 👇️ toggle
        setIsActive4(current => !current);
    
      };

    return(
<div className='center'>
<h1 className="title" style ={{padding:10}}>Zingo</h1>
    <Box sx={{ marginLeft:-5, flexGrow: 1 }}>
      <Grid container spacing={30}>
        <Grid sx = {{marginLeft:5}} item xs={6}>
          <Item         style={{
          backgroundColor: isActive ? 'orange' : '',
          color: isActive ? 'white' : '',
        }} onClick={handleClick}>{music}</Item>
        </Grid>
        <Grid sx = {{marginLeft:-10}} item xs={6}>
          <Item style={{
          backgroundColor: isActive1 ? 'orange' : '',
          color: isActive1 ? 'white' : '',
        }} onClick={handleClick1}>{travel}</Item>
        </Grid>


        <Grid item xs={1} sx={{visibility:'hidden',marginLeft:-9}}>
          <Item>Fillter</Item>
        </Grid>

        <Grid item sx = {{marginTop:-6}} xs={7} >
          <Item style={{
          backgroundColor: isActive2 ? 'orange' : '',
          color: isActive2 ? 'white' : '',
        }} onClick={handleClick2}>{funny}</Item>
        </Grid>

  

        <Grid item sx = {{marginTop:-20, marginLeft:5}} xs={6}>
          <Item style={{
          backgroundColor: isActive3 ? 'orange' : '',
          color: isActive3 ? 'white' : '',
        }} onClick={handleClick3}>{movie}</Item>
        </Grid>
        <Grid item sx = {{marginTop:-20,marginLeft:-10}} xs={6}>
          <Item style={{
          backgroundColor: isActive4 ? 'orange' : '',
          color: isActive4 ? 'white' : '',
        }} onClick={handleClick4}>{fact}</Item>
        </Grid>
      </Grid>
    </Box>
    <div>
      <Button style={{
          display: (isActive4&&isActive2&&isActive&&isActive3 && isActive1) ? 'block' : 'none',
          color: 'black',
          marginTop:40,
        }} variant="outlined" onClick={handleClickOpen}>
        Done
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ZINGO ZINGO ZINGO!!
        </DialogTitle>
        <DialogContent>
        <img src = {sticker}></img>
          <DialogContentText id="alert-dialog-description">
            YOU DID IT!! Yell out Zingo!! Always be yourself and things just come naturally!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
    </div>
    )
}
export default Home;