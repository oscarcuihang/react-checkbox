import React, { Component } from 'react';
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import './Department.css';

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
    open: true,
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  componentWillMount() {
    const positionsChecked = buildPositions(this.props.department.department_positions);
    this.setState({positionsChecked: positionsChecked});
  }

  departmentCount() {
    let count = 0;
    this.props.department.department_positions.forEach(position => count += position.position_count)
    return count;
  }

  handleClearAll() {
    const newCheckedPositions = flipAllPositionsChecked(this.state.positionsChecked, false)
    this.setState({ 
      departmentChecked: false,
      positionsChecked: newCheckedPositions,
    });
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
      positionsChecked: newCheckedPositions,
      open: true,
    });
  }

  handlePositionToggle = positionIndex => event => {
    let positionsChecked = this.state.positionsChecked;
    positionsChecked[positionIndex].checked = event.target.checked;
    this.setState({positionsChecked: positionsChecked});
  }
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  }
  render() {
    return (
      <div>
        <List>
          <ListItem key={this.props.department.department_name} dense button onClick={this.handleClick} onChange={this.handleDepartmentToggle(this.props.department.department_name)}>
            <Checkbox value={this.props.department.department_name} checked={this.state.departmentChecked} />
            <ListItemText primary={this.props.department.department_name} />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
            <ListItemSecondaryAction>{this.departmentCount()}</ListItemSecondaryAction>
          </ListItem>
        </List>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List style={{paddingLeft: "35px"}} className="Position-list">
            {this.state.positionsChecked.map(position => (
              <ListItem key={position.positionName} dense button onChange={this.handlePositionToggle(position.index)}>
                <Checkbox value={position.positionName} checked={position.checked} />
                <ListItemText primary={position.positionName} />
                <ListItemSecondaryAction>{position.positionCount}</ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </div>
    );
  }
}

export default Department;
