import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { authFormChange } from '../../store/ac/authFormChange';
import { registerUser, signIn } from '../../store/ac/authActions';
import { switchRegisterMode } from '../../store/ac/switchRegisterMode';
import { Redirect } from 'react-router-dom';
import { LoginPageDispatchProps, LoginPageProps, LoginPageStateProps } from '../../types';
import './LoginPage.scss';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const LoginPage = ({
	authFormChange,
	isRegisterMode,
	registerUser,
	signIn,
	switchRegisterMode,
	isLoggedIn,
}: LoginPageProps): JSX.Element => {
	const onSubmit = (event: { preventDefault: () => void }): void => {
		event.preventDefault();
		return isRegisterMode ? registerUser() : signIn();
	};
	if (isLoggedIn) return <Redirect to='/' />;
	return (
		<div className='login-form__wrapper'>
			<form className='login-form' onChange={authFormChange} onSubmit={onSubmit}>
				{
					isRegisterMode && (
						<FormControl className='input-wrapper'>
							<InputLabel htmlFor='userName'>User name:</InputLabel>
							<Input id='userName' />
						</FormControl>
					)
				}
				<FormControl className='input-wrapper'>
					<InputLabel htmlFor='email'>Email:</InputLabel>
					<Input id='email' />
				</FormControl>
				<FormControl className='input-wrapper'>
					<InputLabel htmlFor='password'>Password:</InputLabel>
					<Input id='password' />
				</FormControl>
				<Button type='submit'>{isRegisterMode ? 'Register' :'Sign In'}</Button>
			</form>
			<FormControlLabel
				value='end'
				control={<Switch  color='default' id='toggleRegisterMode' onChange={switchRegisterMode} />}
				label={isRegisterMode ? 'switch to sign-in mode' : 'switch to register mode'}
				labelPlacement='end'
			/>
		</div>
	);
};

const mapStateToProps = ({ auth: { isRegisterMode }, session: { isLoggedIn } }): LoginPageStateProps => ({
	isRegisterMode,
	isLoggedIn,
});

const mapDispatchToProps = (dispatch: Dispatch): LoginPageDispatchProps => bindActionCreators({
	authFormChange,
	registerUser,
	signIn,
	switchRegisterMode,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);