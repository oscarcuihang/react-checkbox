import React, { Component } from 'react';
import HiringPosition from './HiringPosition'
import './SideNav.css'

class SideNav extends Component {
  render() {
    return (
      <div className="SideNav">
        <HiringPosition />
      </div>
    );
  }
}

export default SideNav;
