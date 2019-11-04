import React, { Component } from 'react';

class Create extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Business</h3>

        <form>
          <div className='form-group'>
            <label>Add Person Name : </label>
            <input type='text' name='' id='' className='form-control' />
          </div>

          <div className='form-group'>
            <label>Add Business Name : </label>
            <input type='text' name='' id='' className='form-control' />
          </div>

          <div className='form-group'>
            <label>Add NIC No : </label>
            <input type='text' name='' id='' className='form-control' />
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
