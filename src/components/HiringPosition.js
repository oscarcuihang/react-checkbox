import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './HiringPosition.css'

class HiringPosition extends Component {
  render() {
    return (
      <div className="HiringPosition">
        <p>招聘职位<Button><span className="Clear-botton">清空</span></Button></p>
      </div>
    );
  }
}

export default HiringPosition;
