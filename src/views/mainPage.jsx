import React from 'react';
import Room from '../components/room';
import '../App.css';

import Grid from '@mui/material/Grid';

const Catalog = () => {
  return (
    <div style={{marginTop:'10vh'}}>
      <Grid container spacing={2}>
        {[...Array(7)].map((_, i) => (
          <Grid item xs={8} sm={2} md={3} key={i}>
            <Room/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Catalog;