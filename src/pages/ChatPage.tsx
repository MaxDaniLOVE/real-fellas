import React, { Component } from 'react';
import MessageContainer from "../components/MessagesContainer/MessagesContainer";
import MessageInput from "../components/MessageInput/MessageInput";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import initSocket from "../store/ac/initSocket";

type ChatPageProps = {
    initSocket(ws): void,
    isOpenedConnection: boolean,
    message: string,
}

class ChatPage extends Component<ChatPageProps> {
    private ws: WebSocket = new WebSocket(process.env.REACT_APP_WS_BASE as string);
    private sendMessage = (message: string) => this.ws.send(JSON.stringify({ message }));
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

interface StateProps {
    isOpenedConnection: boolean,
    message: string,
}
interface DispatchProps {
    initSocket(ws): void,
}
const mapStateToProps = ({ data: { isOpenedConnection, message } }): StateProps => ({ isOpenedConnection, message });

const mapDispatchToProps = (dispatch): DispatchProps => bindActionCreators({ initSocket }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);