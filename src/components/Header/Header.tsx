import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOut } from "../../store/ac/authActions";
import './header.scss';

interface StateProps {
  userName: string,
}

interface DispatchProps {
  signOut(): void,
}

type HeaderTypes = StateProps & DispatchProps;

const Header = ({ signOut, userName }: HeaderTypes) => {
  return (
    <div className='header' onClick={signOut}>
      {userName}
    </div>
  );
};
const mapStateToProps = ({ session: { userName } }): StateProps => ({ userName });
const mapDispatchToProps = (dispatch): DispatchProps => bindActionCreators({ signOut }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
