import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { StartPageComponent } from './components/StartPageComponent';
import { PageOneComponent } from './components/PageOneComponent';
import { PageTwoComponent } from './components/PageTwoComponent';
import { AddWriter } from './components/changeComponents/AddWriter';
import { UpdateWriter } from './components/changeComponents/UpdateWriter';
import { Navbar } from './components/Navbar';

export const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path={['/', '/defaultPath']} component={StartPageComponent} />

					<Route exact path={['/PageOneComponent']} component={PageOneComponent} />
					<Route exact path={['/PageTwoComponent']} component={PageTwoComponent} />

					<Route exact path={['/AddWriter']} component={AddWriter} />
					<Route exact path={['/UpdateWriter/:id']} component={UpdateWriter} />
				</Switch>
			</Router>
		</>
	);
};
