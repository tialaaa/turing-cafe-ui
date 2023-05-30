import React from 'react';
// import PropTypes from 'prop-types';
import './Reservation.css';

function Reservation({ name, date, time, number }) {
  return (
    <section>
      <h3>${name}</h3>
      <p>${date}</p>
      <p>${time} pm</p>
      <p>Number of guests: ${number}</p>
      <button>Cancel</button>
    </section>
  );
}

// add Proptypes

export default Reservation;