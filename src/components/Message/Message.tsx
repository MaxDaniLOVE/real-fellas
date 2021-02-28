import React from 'react';
import { MessageProps, MessageStateProps } from '../../types';
import { connect } from "react-redux";
import './message.scss';

const Message = ({ message, id }: MessageProps ) => {
  const isSendByLoggedUser = id === message.sendBy?.id;
  return (
    <div className={`message__wrapper ${isSendByLoggedUser ? 'logged-user-message' : ''}`}>
      {
        !isSendByLoggedUser && (
          <span className='message__author'>{message.sendBy && message.sendBy?.userName}</span>
        )
      }
      <span>{message.message}</span>
    </div>
  );
};

const mapStateToProps = ({ session: { id } }): MessageStateProps => ({ id });

export default connect(mapStateToProps)(Message);
