import React, { Ref, useCallback, useRef, useState } from 'react';
import './updateAvatarForm.scss';
import { UpdateAvatarFormProps } from '../../../types';
import { Button } from 'reactstrap';

const UpdateAvatarForm = ({
	onPostNewAvatar,
	onDeleteAvatar,
	hasAvatar,
}: UpdateAvatarFormProps): JSX.Element => {
	const fileInput: Ref<any> = useRef(null);
	const [ fileName, setFileName ] = useState('Add image');
	const onSubmit = useCallback(async e => {
		e.preventDefault();
		const formData = new FormData();
		const file = fileInput?.current?.files[0];
		if (!file) return;
		formData.append('avatar', file);
		await onPostNewAvatar(formData);
		e.target.reset();
		setFileName('Add image');
	}, [ onPostNewAvatar ]);
	const onChangeFileInput = (e): void => {
		setFileName(e.target.files[0]?.name || 'Add image');
	};
	return (
		<form className='avatar-form' onSubmit={onSubmit}>
			<div className='file-input__wrapper'>
				<label htmlFor='avatar' className='m-0 w-100'>
					<input
						accept='image/*'
						onChange={onChangeFileInput}
						ref={fileInput}
						name='avatar'
						id='avatar'
						type='file'
					/>
					<span className='btn btn-outline-light w-100'>{fileName}</span>
				</label>
				{
					fileInput?.current?.files[0] && (
						<Button
							className='ml-2'
							color='success'
							type='submit'
						>
							{hasAvatar ? 'Update' : 'Upload'}
						</Button>
					)
				}
				{
					hasAvatar && (
						<Button
							className='ml-2'
							color='danger'
							onClick={onDeleteAvatar}
						>
							Delete
						</Button>
					)
				}
			</div>
		</form>
	);
};

export default UpdateAvatarForm;
