import React from 'react';
import { connect } from 'react-redux';
import Message from '../Message';
import './messagesContainer.scss';

const MessagesContainer = ({ messages }) => {
  return (
    <div className='messages__container'>
      {
        messages.map(message => <Message message={message} key={message.id} />)
      }
    </div>
  );
}

const mapStateToProps = ({ data: { messages } }) => ({ messages });

export default connect(mapStateToProps)(MessagesContainer);
