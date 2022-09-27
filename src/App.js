import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button class="big-button">dt</button>
        <button class="big-button">push</button>
        <button class="big-button">me</button>
        <button class="big-button">dt</button>
        <button class="big-button">push</button>
        <button class="big-button">me</button>
      </header> */}
    <div className='vertical-center'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={30}>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>


        <Grid item xs={1} sx={{visibility: 'hidden',marginRight:-10}}>
          <Item>xs=6</Item>
        </Grid>

        <Grid item xs={6} sx={{}}>
          <Item>xs=6</Item>
        </Grid>

  

        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
      </Grid>
    </Box>
    </div>


    </div>
  );
}

export default App;
