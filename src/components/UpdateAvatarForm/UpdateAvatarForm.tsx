import React, { useCallback, useRef } from 'react';
import './updateAvatarForm.scss';
import { UpdateAvatarFormProps } from '../../types';
import { Button } from 'reactstrap';

const UpdateAvatarForm = ({ onPostNewAvatar }: UpdateAvatarFormProps): JSX.Element => {
	const fileInput = useRef(null);
	const onSubmit = useCallback(e => {
		e.preventDefault();
		const formData = new FormData();
		// @ts-ignore
		formData.append('avatar', fileInput?.current?.files[0]!);
		onPostNewAvatar(formData);
	}, [ onPostNewAvatar ]);

	return (
		<form className='avatar-form' onSubmit={onSubmit}>
			<input ref={fileInput} name='avatar' type='file' />
			<Button
				color='danger'
				type='submit'
			>
				submit
			</Button>
		</form>
	);
};

export default UpdateAvatarForm;
