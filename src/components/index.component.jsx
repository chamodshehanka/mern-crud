import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './tablerow';

class Index extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { business: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/business')
      .then(res => {
        this.setState({ business: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.business.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align='center'>Business List</h3>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Person Name</th>
              <th>Business Name</th>
              <th>NIC No</th>
              <th colSpan='2'>Action</th>
            </tr>
          </thead>

          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}

export default Index;
