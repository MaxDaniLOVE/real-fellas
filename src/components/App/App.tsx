import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route, } from 'react-router-dom';
import { LoginPage, ChatPage } from '../../pages';
import Container from '../Container';

import './App.scss';

const App = () => {
    return (
      <Container>
        <Router>
          <Switch>
            <Route exact path='/'>
              <ChatPage />
            </Route>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }

export default App;
