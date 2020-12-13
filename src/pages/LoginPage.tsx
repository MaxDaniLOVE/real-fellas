import React from 'react';
import { Input, Form, Button, Label, CustomInput } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { authFormChange } from '../store/ac/authFormChange';
import { registerUser, signIn } from '../store/ac/authActions';
import { switchRegisterMode } from '../store/ac/switchRegisterMode';
import {AppStateType} from "../store/reducers";

interface StateProps {
    isRegisterMode: boolean,
}
interface DispatchProps {
    authFormChange(event: any): void,
    registerUser(): void,
    signIn(): void,
    switchRegisterMode(event: any): void,
}

type LoginPageProps = StateProps & DispatchProps;

const LoginPage = ({ authFormChange, isRegisterMode, registerUser, signIn, switchRegisterMode }: LoginPageProps) => {
    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        return isRegisterMode ? registerUser() : signIn();
    }
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



const mapStateToProps = (state: AppStateType) => ({
    isRegisterMode: state.auth.isRegisterMode,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => bindActionCreators({
    authFormChange,
    registerUser,
    signIn,
    switchRegisterMode,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);