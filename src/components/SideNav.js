import React, { Component } from 'react';
import Hiring from './Hiring'
import './SideNav.css'

class SideNav extends Component {
  render() {
    return (
      <div className="SideNav">
        <Hiring />
      </div>
    );
  }
}

export default SideNav;
