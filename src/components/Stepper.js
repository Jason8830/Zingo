
import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";


function Stepper() { 
    const [music, setMusic] = useState(0);
    const [travel, setTravel] = useState(0);
    const [movie, setMovie] = useState(0);
    const [fact, setFact] = useState(0);
    const [funny, setFunny] = useState(0);
    const navigate = useNavigate();
    
    return(
<>
<div className = 'center'>
    <h1 className="title" style ={{padding:10}}>Zingo</h1>
    <div className = 'container'>


    <TextField
          id="music"
          label="Favorite Music Artist"
          type="search"
          variant="filled"
          sx = {{marginBottom:7}}
          onChange = {(e)=>{setMusic(e.target.value)}}
        />
            <TextField
          id="travel"
          label="Top Place to Travel"
          type="search"
          variant="filled"
          sx = {{marginBottom:7}}
          onChange = {(e)=>{setTravel(e.target.value)}}
        />
            <TextField
          id="movie"
          label="Favorite Movie"
          type="search"
          variant="filled"
          sx = {{marginBottom:7}}
          onChange = {(e)=>{setMovie(e.target.value)}}
        />
            <TextField
          id="fact"
          label="Achievements"
          type="search"
          variant="filled"
          onChange = {(e)=>{setFact(e.target.value)}}
          sx = {{marginBottom:7}}
        />
            <TextField
          id="funny"
          label="Funny/Random"
          type="search"
          onChange = {(e)=>{setFunny(e.target.value)}}
          variant="filled"
          sx = {{marginBottom:4}}
        />
        </div>

    <button className = 'submit' style ={{padding:10}} onClick = {()=>navigate('/home', { state: { music: music, travel: travel,movie:movie,fact:fact,funny:funny } })}>Submit</button>
    </div>
</>
    )
}
export default Stepper;