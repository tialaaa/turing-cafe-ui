import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
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
          onChange={event => this.handleChange(event)} required/>

        <button className='button-make-resy'>Make Reservation</button>
      </form>
    )
  };
}

export default Form;