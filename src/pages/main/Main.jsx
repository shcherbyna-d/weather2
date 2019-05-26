import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
import City from '../city/City';
import './Main.scss';

// class Main extends React.Component {
//     render() {
//         return (
//             <main className='weather__main main container'>
//                 <Switch>
//                     <Route exact path='/' component={Home}/>
//                     <Route path='/city/' component={City}/>
//                 </Switch>
//             </main>
//         )
//     }
// }

const Main = ({currentCityWeather, getCurrentLocation}) => {
	return (
		<main className='weather__main main container'>
			<Switch>
				{/* <Route exact path='/' component={Home}/> */}
				<Route exact path='/' render={() => <Home currentCityWeather={currentCityWeather} getCurrentLocation={getCurrentLocation} />} />
				<Route path='/city/:cityId' component={City}/>
			</Switch>
		</main>
	)
}

export default Main;