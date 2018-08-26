import React, { Component } from 'react';
import SideNav from './components/SideNav'
import Grid from '@material-ui/core/Grid';
import './App.css'

class App extends Component {
  render() {
    return (

      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} className='App-navbar-color'>
            <SideNav />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
