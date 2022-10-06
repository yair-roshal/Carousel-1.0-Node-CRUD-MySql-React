import React from 'react';
import { AllWriters } from 'components';
import { Header } from 'components';
import { writers } from 'data';

export const PageOneComponent = () => {
	return (
		<>
			<h1 className='titleTask'>Task №1</h1>
			<div className='wrapperCarousel'>
				<Header />
				<AllWriters writers={writers} isButtons={false} />
			</div>
		</>
	);
};
