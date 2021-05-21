import React from 'react';

function Flights(props) {
    return (
      <ul className="list-group">
        {props.flights.map(flights => (
          <li className="list-group-item" key={flights}>
          </li>
        ))}
      </ul>
    );
  }
  
  export default Flights;