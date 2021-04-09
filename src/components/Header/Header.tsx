import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOut } from '../../store/ac/authActions';
import './header.scss';
import { HeaderDispatchProps, HeaderStateProps, HeaderTypes } from '../../types';
import defaultAvatar from '../../assets/images/default-avatar.png';
import UpdateAvatarForm from './UpdateAvatarForm';
import { onPostNewAvatar, onDeleteAvatar } from '../../store/ac/imagesActions';
import { Chevron } from '../../assets/icons';
import Button from '@material-ui/core/Button';

const Header = ({
	signOut,
	userName,
	avatar,
	onPostNewAvatar,
	onDeleteAvatar,
}: HeaderTypes): JSX.Element => {
	const [ isHeaderExpanded, setIsHeaderExpanded ] = useState(false);
	const onToggleHeader = useCallback(() => setIsHeaderExpanded(!isHeaderExpanded), [isHeaderExpanded]);
	const onSignOut = useCallback(() => {
		onToggleHeader();
		setTimeout(signOut, 250);
	}, [ onToggleHeader, signOut ]);
	return (
		<div className={`header ${isHeaderExpanded ? 'expanded-header' : ''}`}>
			<div className='header-info'>
				<div className='header-user-info__wrapper' onClick={isHeaderExpanded ? (): void => {} : onToggleHeader}>
					<img className='header-user-avatar' alt='avatar' src={avatar || defaultAvatar}/>
					<div className='header-user-name'>{!isHeaderExpanded && userName}</div>
				</div>
			</div>
			{
				isHeaderExpanded && (
					<div className='expanded-header__body'>
						<div className='header-user-name'>{userName}</div>
						<UpdateAvatarForm
							hasAvatar={!!avatar}
							onPostNewAvatar={onPostNewAvatar}
							onDeleteAvatar={onDeleteAvatar}
						/>
						<Button
							color='secondary'
							onClick={onSignOut}
						>
							LOGOUT
						</Button>
						<Chevron onClick={isHeaderExpanded ? onToggleHeader : (): void => {}} />
					</div>
				)
			}
		</div>
	);
};

const mapStateToProps = ({ session: { userName, avatar } }): HeaderStateProps => ({ userName, avatar });
const mapDispatchToProps = (dispatch): HeaderDispatchProps => bindActionCreators({
	signOut, onPostNewAvatar, onDeleteAvatar
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
