import React from 'react';
import { MessageProps } from '../../types';

const Message = ({ message }: MessageProps ) => {
  return (
    <p className='message'>
      {message.message}
      {message.sendBy && `Send by: ${message.sendBy?.userName}`}
    </p>
  );
};

export default Message;
