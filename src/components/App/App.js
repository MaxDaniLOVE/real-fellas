import React, { Component } from 'react';
import MessageContainer from '../MessagesContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import initSocket from '../../store/ac/initSocket';
import MessageInput from '../MessageInput';
import './App.scss';

class App extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
