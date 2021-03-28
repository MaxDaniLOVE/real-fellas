import React from 'react';
import './container.scss';
import { ContainerStateProps } from '../../types';

const Container = ({ children }: ContainerStateProps): JSX.Element =>
	<div className='main-container'>{children}</div>;

export default Container;