import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ children }) => {
  return (
    <p>
      {children}
    </p>
  );
};


Message.propTypes = {
  children: PropTypes.string.isRequired,
};


export default Message;
