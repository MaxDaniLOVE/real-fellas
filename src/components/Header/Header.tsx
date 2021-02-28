import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOut } from "../../store/ac/authActions";
import './header.scss';
import { HeaderDispatchProps, HeaderStateProps, HeaderTypes } from '../../types';
import { Button } from 'reactstrap';

const Header = ({ signOut, userName }: HeaderTypes) => {
  const [ isHeaderExpanded, setIsHeaderExpanded ] = useState(false);
  const onToggleHeader = useCallback(() => setIsHeaderExpanded(!isHeaderExpanded), [isHeaderExpanded]);
  const onSignOut = useCallback(() => {
    onToggleHeader();
    setTimeout(signOut, 250);
  }, [ onToggleHeader, signOut ]);
  return (
    <div className={`header ${isHeaderExpanded ? 'expanded-header' : ''}`}>
      <div className='header-info'>
        <Button className='header-user-name' onClick={onToggleHeader}>{userName}</Button>
        {
          isHeaderExpanded && (
            <Button
              className='close-header-btn'
              color='danger'
              onClick={onSignOut}
            >
              X
            </Button>
          )
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ session: { userName } }): HeaderStateProps => ({ userName });
const mapDispatchToProps = (dispatch): HeaderDispatchProps => bindActionCreators({ signOut }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
