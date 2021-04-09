import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { SendIcon } from '../../assets/icons';
import onChangeMessageInput from '../../store/ac/onChangeMessageInput';
import './messageInput.scss';
import { MessageInputProps, MessageInputDispatchProps, MessageInputStateProps } from '../../types';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import SvgIcon from '@material-ui/core/SvgIcon';
import Input from '@material-ui/core/Input';

const MessageInput = ({ message, onChangeMessageInput, sendMessage }: MessageInputProps): JSX.Element => {
	const onClick = (): void => {
		const trimmed = message.trim();
		if (!trimmed) return;
		sendMessage(message.trim());
	};
	return (
		<Box p='.5rem' boxShadow={5} className='send-message__wrapper'>
			<Input
				className='message__input'
				placeholder='message'
				onChange={onChangeMessageInput}
				value={message}
			/>
			<IconButton onClick={onClick}>
				<SvgIcon>
					<SendIcon />
				</SvgIcon>
			</IconButton>
		</Box>
	);
};

const mapStateToProps = ({ data: { message } }): MessageInputStateProps => ({ message });

const mapDispatchToProps = (dispatch: Dispatch): MessageInputDispatchProps => bindActionCreators({
	onChangeMessageInput
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
