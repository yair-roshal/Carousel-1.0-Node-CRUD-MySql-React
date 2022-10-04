import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AllWriters } from './AllWriters';
import { Header } from './Header';
import { Link } from 'react-router-dom';

export const PageTwoComponent = () => {
	const URL = 'http://localhost:5000/';
	const [writers, setWriters] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get(URL)
			.then(response => {
				setWriters(response.data);
				setIsLoading(false);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	if (!isLoading)
		return (
			<>
				<h1 className='titleTask'>Task №2</h1>
				<div className='wrapperCarousel'>
					<Header />
					<AllWriters writers={writers} isButtons={true} />

					<div className='wrapperButton'>
						<Link to={'/AddWriter/'} className='button'>
							<span>Add Writer </span>
						</Link>
					</div>
				</div>
			</>
		);
	else
		return (
			<div>
				<h1>Loading!</h1>
			</div>
		);
};
