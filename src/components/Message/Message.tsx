import React from 'react';
import PropTypes from 'prop-types';

interface MessageProps {
  children: string,
}

const Message = ({ children }: MessageProps ) => {
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
