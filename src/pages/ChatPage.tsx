import React, { Component } from 'react';
import MessageContainer from "../components/MessagesContainer/MessagesContainer";
import MessageInput from "../components/MessageInput/MessageInput";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import initSocket from "../store/ac/initSocket";

interface StateProps {
    isOpenedConnection: boolean,
    message: string,
    senderId: string,
}
interface DispatchProps {
    initSocket(ws): void,
}

type ChatPageProps = StateProps & DispatchProps;

class ChatPage extends Component<ChatPageProps> {
    private ws: WebSocket = new WebSocket(process.env.REACT_APP_WS_BASE as string);
    private sendMessage = (message: string) => {
        const { senderId } = this.props;
        this.ws.send(JSON.stringify({ message, senderId }))
    };
    componentDidMount() {
        this.props.initSocket(this.ws);
    }

    render() {
        const { isOpenedConnection } = this.props;

        return (
            <div className="container">
                {
                    isOpenedConnection ? (
                        <div className='messages'>
                            <MessageContainer />
                            <MessageInput sendMessage={this.sendMessage} />
                        </div>
                    ) : <div>wait</div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({
    data: {
        isOpenedConnection, message,
    },
    session: {
        id: senderId,
    }
}): StateProps => ({ isOpenedConnection, message, senderId });

const mapDispatchToProps = (dispatch): DispatchProps => bindActionCreators({ initSocket }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);