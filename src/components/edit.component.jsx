import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeNICNumber = this.onChangeNICNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.setState = {
      person_name: '',
      business_name: '',
      nic_no: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/business/edit' + this.props.match.params.id)
      .then(response => {
        this.setState({
          person_name: response.data.person_name,
          business_name: response.data.business_name,
          nic_no: response.data.nic_no
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      nic_no: this.state.nic_no
    };

    axios
      .post(
        'http://localhost:4000/business/update' + this.state.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push('/index');
  }

  render() {
    return (
      <div>
        <p>Welcome to edit component!</p>
      </div>
    );
  }
}

export default Edit;
