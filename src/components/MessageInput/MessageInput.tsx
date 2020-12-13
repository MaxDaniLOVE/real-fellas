import React from 'react';
import { Input, Button, InputGroupAddon, InputGroup } from 'reactstrap';
import { connect } from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import { SendIcon } from '../../assets/icons';
import onChangeMessageInput from '../../store/ac/onChangeMessageInput';
import ws from '../../utils/ws';
import './messageInput.scss';

interface StateProps {
    message: string,
}
interface DispatchProps {
    onChangeMessageInput(e: any): void,
}

type MessageInputProps = StateProps & DispatchProps;

const MessageInput = ({ message, onChangeMessageInput }: MessageInputProps) => {
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

const mapStateToProps = ({ data: { message } }):StateProps => ({ message });

const mapDispatchToProps = (dispatch: Dispatch):DispatchProps => bindActionCreators({ onChangeMessageInput }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
