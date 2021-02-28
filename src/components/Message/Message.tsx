import React from 'react';

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

export default Message;
