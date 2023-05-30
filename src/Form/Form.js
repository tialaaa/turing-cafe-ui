import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(addReservation) {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  submitResy = event => {
    event.preventDefault();

    if (!this.state.name || !this.state.date || !this.state.time || !this.state.number) {
      return alert('Please fill out all input fields.')
    };

    const newResy = {
      id: Date.now(),
      ...this.state
    };
    this.props.addReservation(newResy);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' })
  };
  
  render() {
    return (
      <form>
        <input type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)} required/>
        <input type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)} required/>
        <input type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)} required/>
        <input type='number'
          placeholder='Number of guests'
          name='number'
          value={this.state.number}
          onChange={event => this.setState({ number: parseInt(event.target.value)})}
          required/>

        <button className='button-make-resy'
          onClick={event => this.submitResy(event)}>Make Reservation
        </button>
      </form>
    )
  };
}

export default Form;