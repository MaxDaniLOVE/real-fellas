import React, { Component } from 'react';
import MessageContainer from "../components/MessagesContainer/MessagesContainer";
import MessageInput from "../components/MessageInput/MessageInput";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import initSocket from "../store/ac/initSocket";

type ChatPageProps = {
    initSocket(): void,
    isOpenedConnection: boolean,
    message: string,
}

class ChatPage extends Component<ChatPageProps> {
    componentDidMount() {
        this.props.initSocket();
    }

    render() {
        const { isOpenedConnection } = this.props;

        return (
            <div className="container">
                {
                    isOpenedConnection ? (
                        <>
                            <MessageContainer />
                            <MessageInput />
                        </>
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
    initSocket(): void,
}
const mapStateToProps = ({ data: { isOpenedConnection, message } }): StateProps => ({ isOpenedConnection, message });

const mapDispatchToProps = (dispatch): DispatchProps => bindActionCreators({ initSocket }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);