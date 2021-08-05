import React from 'react';
import PropTypes from "prop-types"; // upper camel case 

function Ticket(props) {
  return (
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Ticket.propTypes = { // lower camel case because its a property here
  names: PropTypes.string.isRequired, // upper camel case because its reffering to the library
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket; 