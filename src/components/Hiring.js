import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Department from './Department';
import './Hiring.css'

class Hiring extends Component {
  state = {
    hiringData: null,
    clearAll: false,
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
    return this.state.hiringData.departments.map((department, index) => 
      <Department
        key={department.department_name}
        department={department}
        onRef={ref => (this[`department${index}`] = ref)}
      />
    );
  }

  handleClearAll = value => () => {
    this.state.hiringData.departments.forEach((_, index) => 
      this[`department${index}`].handleClearAll()
    );
  }

  render() {
    return (
      <div className="Hiring">
        <p>招聘职位<span className="Clear-botton"><Button onClick={this.handleClearAll(null)}>清空</Button></span></p>
        <div ref='hiring'>{this.renderHiringPositions()}</div>
      </div>
    );
  }
}

export default Hiring;
