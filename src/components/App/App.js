import React, { Component } from 'react';
import MessageContainer from '../MessagesContainer';
import { Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import initSocket from '../../store/ac/initSocket';
import onChangeMessageInput from '../../store/ac/onChangeMessageInput';
import ws from '../../utils/ws';
import './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.initSocket();
  }

  sendMessage = () => {
    const { message } = this.props;
    ws.send(message);
  }

  render() {
    const { isOpenedConnection, onChangeMessageInput, message } = this.props;

    return (
      <div className="container">
        {
          isOpenedConnection ? (
            <>
              <MessageContainer />
              <Input onChange={onChangeMessageInput} value={message} />
              <Button onClick={this.sendMessage}>send</Button>
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
  return bindActionCreators({ initSocket, onChangeMessageInput }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
