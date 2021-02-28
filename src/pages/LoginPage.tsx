import React from 'react';
import { Input, Form, Button, Label, CustomInput } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { authFormChange } from '../store/ac/authFormChange';
import { registerUser, signIn } from '../store/ac/authActions';
import { switchRegisterMode } from '../store/ac/switchRegisterMode';
import { Redirect } from 'react-router-dom';
import { LoginPageDispatchProps, LoginPageProps, LoginPageStateProps } from '../types';

const LoginPage = ({
    authFormChange,
    isRegisterMode,
    registerUser,
    signIn,
    switchRegisterMode,
    isLoggedIn,
}: LoginPageProps) => {
    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        return isRegisterMode ? registerUser() : signIn();
    }
    if (isLoggedIn) return <Redirect to='/' />;
    return (
        <div className='login-form__wrapper'>
            <Form className='login-form' onChange={authFormChange} onSubmit={onSubmit}>
                <Label htmlFor='email'>
                    Email:
                    <Input id='email' type='email' />
                </Label>
                <Label htmlFor='password'>
                    Password:
                    <Input id='password' type='password' />
                </Label>
                <Button type='submit'>{isRegisterMode ? 'Register' :'Sign In'}</Button>
            </Form>
            <Label htmlFor='toggleRegisterMode'>
                <CustomInput id='toggleRegisterMode' type='switch' onChange={switchRegisterMode}/>
                {isRegisterMode ? 'switch to sign-in mode' : 'switch to register mode'}
            </Label>
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