import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOut } from "../../store/ac/authActions";
import './header.scss';
import { HeaderDispatchProps, HeaderStateProps, HeaderTypes } from '../../types';

const Header = ({ signOut, userName }: HeaderTypes) => {
  return (
    <div className='header' onClick={signOut}>
      {userName}
    </div>
  );
};

const mapStateToProps = ({ session: { userName } }): HeaderStateProps => ({ userName });
const mapDispatchToProps = (dispatch): HeaderDispatchProps => bindActionCreators({ signOut }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
