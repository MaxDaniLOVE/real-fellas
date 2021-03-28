import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOut } from '../../store/ac/authActions';
import './header.scss';
import { HeaderDispatchProps, HeaderStateProps, HeaderTypes } from '../../types';
import { Button } from 'reactstrap';

const Header = ({ signOut, userName, avatar }: HeaderTypes): JSX.Element => {
	const [ isHeaderExpanded, setIsHeaderExpanded ] = useState(false);
	const onToggleHeader = useCallback(() => setIsHeaderExpanded(!isHeaderExpanded), [isHeaderExpanded]);
	const onSignOut = useCallback(() => {
		onToggleHeader();
		setTimeout(signOut, 250);
	}, [ onToggleHeader, signOut ]);
	return (
		<div className={`header ${isHeaderExpanded ? 'expanded-header' : ''}`}>
			<div className='header-info'>
				<div className='header-user-info__wrapper' onClick={onToggleHeader}>
					{ avatar && <img className='header-user-avatar' alt='avatar' src={avatar}/> }
					<div className='header-user-name'>{userName}</div>
				</div>
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

const mapStateToProps = ({ session: { userName, avatar } }): HeaderStateProps => ({ userName, avatar });
const mapDispatchToProps = (dispatch): HeaderDispatchProps => bindActionCreators({ signOut }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
