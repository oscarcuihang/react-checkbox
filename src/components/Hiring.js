import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Department from './Department';
import './Hiring.css'

class Hiring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiringData: null,
    };
    this.renderHiringPositions = this.renderHiringPositions.bind(this);
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/oscarcuihang/react-checkbox/master/data/hiring_position.json";
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ hiringData: data }));
  }

  renderHiringPositions() {
    if (this.state.hiringData === null) {
      return null;
    }
    // return <Department />
    return this.state.hiringData.departments.map(department => 
      <Department key={department.department_name} department={department}/>
    );
    // return this.state.hiringData.departments.map(department => console.log(department));
  }

  render() {
    return (
      <div className="Hiring">
        <p>招聘职位<Button><span className="Clear-botton">清空</span></Button></p>
        {this.renderHiringPositions()}
      </div>
    );
  }
}

export default Hiring;
