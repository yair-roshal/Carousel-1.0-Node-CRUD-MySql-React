import React from 'react';
import { AllWriters } from './AllWriters';
import { Header } from './Header';
import { writers } from '../data/writers.js';

export const PageOneComponent = () => {
	return (
		<>
			<h1 className='titleTask'>Task № 1</h1>
			<div className='wrapperCarousel'>
				<Header />
				<AllWriters writers={writers} isButtons={false} />
			</div>
		</>
	);
};
