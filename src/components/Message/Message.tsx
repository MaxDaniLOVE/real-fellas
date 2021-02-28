import React from 'react';
import { MessageProps } from '../../types';

const Message = ({ children }: MessageProps ) => {
  return (
    <p className='message'>
      {children}
    </p>
  );
};

export default Message;
