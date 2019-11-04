import React, { Component } from 'react';

class Create extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeNICNumber = this.onChangeNICNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      nic_no: ''
    };
  }

  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }

  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    });
  }

  onChangeNICNumber(e) {
    this.setState({
      nic_no: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // something
    console.log(this.state.person_name);

    this.setState({
      state: {
        person_name: '',
        business_name: '',
        nic_no: ''
      }
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Business</h3>

        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Add Person Name : </label>
            <input
              type='text'
              className='form-control'
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>

          <div className='form-group'>
            <label>Add Business Name : </label>
            <input
              type='text'
              className='form-control'
              value={this.state.business_name}
              onChange={this.onChangeBusinessName}
            />
          </div>

          <div className='form-group'>
            <label>Add NIC No : </label>
            <input
              type='text'
              className='form-control'
              value={this.state.nic_no}
              onChange={this.onChangeNICNumber}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Register Business
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
