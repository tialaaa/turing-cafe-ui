import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Container from '../Res_Container/Container';
import Reservation from '../Reservation/Reservation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: '',
    };
  }

  componentDidMount = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/reservations');

      if (!response.ok) {
        throw Error('Server error')
      };

      const data = await response.json();
      this.setState({ reservations: data });
      console.log(this.state)
    } catch (error) {
      this.setState({ error: error.message })
    };
  };

  addReservation = (newResy) => {
    this.setState({ reservations: [...this.state.reservations, newResy] });
  };

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Container reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
