import React, { Suspense, lazy } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import Container from '../Container';
import './App.scss';
import { connect } from 'react-redux';
import Header from '../Header';
import { AppStateProps } from '../../types';
import AlertsContainer from '../AlertsContainer';

const ChatPage = lazy(() => import('../../pages/ChatPage/ChatPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

const App = ({ isLoggedIn }: AppStateProps): JSX.Element => {
	return (
		<Container>
			<Router>
				<Suspense fallback={null}>
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
				</Suspense>
			</Router>
			<AlertsContainer />
		</Container>
	);
};
const mapStateToProps = ({ session: { isLoggedIn } }): AppStateProps => ({ isLoggedIn });
export default connect(mapStateToProps)(App);
