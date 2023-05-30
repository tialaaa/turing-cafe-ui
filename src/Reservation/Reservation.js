import React from 'react';
// import PropTypes from 'prop-types';
import './Reservation.css';

function Reservation({ name, date, time, number }) {
  return (
    <section className='card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className='button-cancel'>Cancel</button>
    </section>
  );
}

// add Proptypes

export default Reservation;