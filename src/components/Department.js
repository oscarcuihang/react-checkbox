import React, { Component } from 'react';
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import CommentIcon from '@material-ui/icons/Comment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function buildPositions(positions) {
  const positionChecks=[];
  let index = 0;
  positions.forEach((position)=>{
    positionChecks[index] = {
      positionName: position.position_name,
      positionCount: position.position_count,
      checked:false,
      index: index
    };
    index++;
  })
  return positionChecks
}

function flipAllPositionsChecked(positions, checked) {
  positions.forEach(function(position, index) {
    position.checked = checked;
  });
  return positions;
}

class Department extends Component {
  static propTypes = {
    department: PropTypes.shape({
      department_name: PropTypes.string,
      department_positions: PropTypes.arrayOf(PropTypes.shape({
        position_name: PropTypes.string,
        position_count: PropTypes.number,
      })),
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.handleDepartmentToggle = this.handleDepartmentToggle.bind(this);
  }

  state = {
    departmentChecked: false,
    positionsChecked: null,
  }

  componentWillMount() {
    const positionsChecked = buildPositions(this.props.department.department_positions);
    this.setState({positionsChecked: positionsChecked});
  }

  componentDidUpdate() {
    console.log(this.state.departmentChecked);
    console.log(this.state.positionsChecked);
  }

  departmentCount() {
    let count = 0;
    this.props.department.department_positions.forEach(position => count += position.position_count)
    return count;
  }

  handleDepartmentToggle = departmentChecked => event => {
    const newChecked = event.target.checked;
    let newCheckedPositions = null;
    if (newChecked === true) {
      newCheckedPositions = flipAllPositionsChecked(this.state.positionsChecked, true)
    } else {
      newCheckedPositions = flipAllPositionsChecked(this.state.positionsChecked, false)
    }

    this.setState({ 
      departmentChecked: event.target.checked,
      positionsChecked: newCheckedPositions
    });
  }

  handlePositionToggle = positionIndex => event => {
    let positionsChecked = this.state.positionsChecked;
    positionsChecked[positionIndex].checked = event.target.checked;
    this.setState({positionsChecked: positionsChecked});
  }

  render() {
    return (
      <div className="Department">
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.departmentChecked}
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              onChange={this.handleDepartmentToggle(this.props.department.department_name)}
            />
          }
          label={this.props.department.department_name}
          onChange={this.handleDepartmentToggle()}
        />
        {this.departmentCount()}

        <List>
          {this.state.positionsChecked.map(position => (
            <ListItem key={position.positionName} dense button onChange={this.handlePositionToggle(position.index)}>
              <Checkbox value={position.positionName} checked={position.checked}/>
              <ListItemText primary={position.positionName} />
              <ListItemSecondaryAction>{position.positionCount}</ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Department;
