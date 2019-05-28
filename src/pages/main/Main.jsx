import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
import City from '../city/City';
import './Main.scss';

const Main = ({currentCityWeather}) => {
	return (
		<main className='weather__main main container'>
			<Switch>
				<Route exact path='/' render={() => <Home currentCityWeather={currentCityWeather} />} />
				<Route path='/city/:cityId' component={City}/>
			</Switch>
		</main>
	)
}

export default Main;