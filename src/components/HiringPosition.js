import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './HiringPosition.css'

class HiringPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiringPostions: null,
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/oscarcuihang/react-checkbox/master/data/hiring_position.json";
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ hiringPostions: data }));
  }

  render() {
    return (
      <div className="HiringPosition">
        <p>招聘职位<Button><span className="Clear-botton">清空</span></Button></p>
      </div>
    );
  }
}

export default HiringPosition;
