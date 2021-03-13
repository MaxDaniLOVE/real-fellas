import React from 'react';
import { connect } from 'react-redux';
import Message from '../Message';
import './messagesContainer.scss';
import { MessagesProps } from '../../types';

const MessagesContainer = ({ messages }: MessagesProps) => {
	return (
		<div className='messages__container'>
			{
				messages.map(message => <Message message={message} key={message.id} />)
			}
		</div>
	);
};

const mapStateToProps = ({ data: { messages } }): MessagesProps => ({ messages });

export default connect(mapStateToProps)(MessagesContainer);
