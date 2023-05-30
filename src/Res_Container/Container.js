import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';
import Reservation from '../Reservation/Reservation';

function Container({ reservations }) {
  const resyCards = reservations.map(resy => {
    return (
      <Reservation 
        key={resy.id}
        id={resy.id}
        name={resy.name}
        date={resy.date}
        time={resy.time}
        number={resy.number}
      />
    )
  });

  return (
    <section className='resy-container'>
      { resyCards }
    </section>
  );
}

Container.propTypes = {
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired
    })
  ).isRequired
}

export default Container;