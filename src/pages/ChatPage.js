import React, { Component } from 'react';
import MessageContainer from "../components/MessagesContainer/MessagesContainer";
import MessageInput from "../components/MessageInput/MessageInput";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import initSocket from "../store/ac/initSocket";

class ChatPage extends Component {
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

const mapStateToProps = ({ data: { isOpenedConnection, message } }) => {
    return { isOpenedConnection, message };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ initSocket }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);