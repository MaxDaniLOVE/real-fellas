import React from 'react';
import { Input, Button, InputGroupAddon, InputGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SendIcon } from '../../assets/icons';
import onChangeMessageInput from '../../store/ac/onChangeMessageInput';
import ws from '../../utils/ws';
import './messageInput.scss';

const MessageInput = ({ message, onChangeMessageInput }) => {
  const sendMessage = () => {
    ws.send(message);
  }
  return (
    <InputGroup className='send-message__wrapper'>
      <Input onChange={onChangeMessageInput} value={message} />
      <InputGroupAddon addonType="append">
        <Button onClick={sendMessage}>
          <SendIcon />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}

const mapStateToProps = ({ data: { isOpenedConnection, message } }) => {
  return { isOpenedConnection, message };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ onChangeMessageInput }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
