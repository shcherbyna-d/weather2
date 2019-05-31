import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
import City from '../city/City';
import './Main.scss';

// const Main = ({currentCityWeather, favoritesCitiesWeather}) => {
// 	return (
// 		<main className='weather__main main container'>
// 			<Switch>
// 				<Route exact path='/' render={() => <Home currentCityWeather={currentCityWeather} favoritesCitiesWeather={favoritesCitiesWeather} />} />
// 				<Route path='/city/:cityId' component={City}/>
// 			</Switch>
// 		</main>
// 	)
// }

class Main extends React.Component {
	render() {
		return (
			<main className='weather__main main container'>
				<Switch>
					<Route exact path='/' render={() => <Home currentCityWeather={this.props.currentCityWeather} favoritesCitiesWeather={this.props.favoritesCitiesWeather} />} />
					<Route path='/city/:cityId' component={City}/>
				</Switch>
			</main>
		)	
	}
}

export default Main;