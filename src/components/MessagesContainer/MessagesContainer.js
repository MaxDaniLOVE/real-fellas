import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from '../Message';

const MessagesContainer = ({ messages }) => {
  return (
    <div>
      {
        messages.map((message) => <Message key={message}>{message}</Message>)
      }
    </div>
  );
}


const mapStateToProps = ({ data: { messages } }) => {
  return { messages };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
