import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { LoginPage, ChatPage } from '../../pages';
import Container from '../Container';
import './App.scss';
import {connect} from 'react-redux';
import Header from '../Header';
import { AppStateProps } from '../../types';
import AlertsContainer from "../AlertsContainer";

const App = ({ isLoggedIn }: AppStateProps) => {
    return (
      <Container>
        <Router>
          <Switch>
            {
              isLoggedIn ? (
                <>
                  <Header />
                  <Route exact path='/'>
                    <ChatPage />
                  </Route>
                  <Redirect to='/' />
                </>
              ) : (
                <>
                  <Route exact path='/login'>
                    <LoginPage />
                  </Route>
                  <Redirect to='/login' />
                </>
              )
            }
          </Switch>
        </Router>
      <AlertsContainer />
      </Container>
    );
  }
const mapStateToProps = ({ session: { isLoggedIn } }):AppStateProps => ({ isLoggedIn });
export default connect(mapStateToProps)(App);
