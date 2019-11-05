import React, { Component } from 'react';

class TableRow extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>{this.props.obj.person_name}</td>

        <td>{this.props.obj.business_name}</td>

        <td>{this.props.obj.nic_no}</td>

        <td>
          <button className='btn btn-primary'>Edit</button>
        </td>

        <td>
          <button className='btn btn-danger'>Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
