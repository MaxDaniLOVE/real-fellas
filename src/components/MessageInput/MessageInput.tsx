import React from 'react';
import { Input, Button, InputGroupAddon, InputGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { SendIcon } from '../../assets/icons';
import onChangeMessageInput from '../../store/ac/onChangeMessageInput';
import './messageInput.scss';
import { MessageInputProps, MessageInputDispatchProps, MessageInputStateProps } from '../../types';

const MessageInput = ({ message, onChangeMessageInput, sendMessage }: MessageInputProps) => {
	const onClick = () => sendMessage(message);
	return (
		<InputGroup className='send-message__wrapper'>
			<Input onChange={onChangeMessageInput} value={message} />
			<InputGroupAddon addonType="append">
				<Button onClick={onClick}>
					<SendIcon />
				</Button>
			</InputGroupAddon>
		</InputGroup>
	);
};

const mapStateToProps = ({ data: { message } }): MessageInputStateProps => ({ message });

const mapDispatchToProps = (dispatch: Dispatch): MessageInputDispatchProps => bindActionCreators({
	onChangeMessageInput
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
