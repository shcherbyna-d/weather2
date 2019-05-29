import React, { Component } from 'react';
import './Weather.scss';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Menu from './components/menu/Menu';
import RequestWeather from './components/requests/requestWeather';

export default class Weather extends Component {
	state = {
		isMenuShow: false,
		currentCityWeather: undefined,
		isCurrentLocationWeatherShow: true,
		favoritesCities: {},
	}

	weatherRequest = new RequestWeather();

	toggleMenu = () => {
		this.setState((state) => {
			return {
				isMenuShow: !state.isMenuShow,
			}
		})
	}

	getCurrentLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			this.weatherRequest.getWeatherCity(position.coords.latitude, position.coords.longitude, this.setLocationWeatherToState);
		},
		() => {
			this.setState({isCurrentLocationWeatherShow: false})
		}
		)
	}
	setLocationWeatherToState = (response) => {
			const currentCityWeather = {
				cityName: response.name,
				cityId: response.id,
				temperature: response.main.temp,
				weatherMain: response.weather[0].main,
				weatherId: response.weather[0].id,
			}
		this.setState({currentCityWeather: currentCityWeather});
	}

	getFavoritesCitiesFromLocalStorage = () => {
		if (localStorage.getItem('favoriteCities') === null) {
			return;
		} else {
			const favoriteCities = {};
			const favoriteCitiesStorage = JSON.parse(localStorage.getItem('favoriteCities'));
			for (const key in favoriteCitiesStorage) {
				if (favoriteCitiesStorage.hasOwnProperty(key)) {
					const element = favoriteCitiesStorage[key];
					favoriteCities[key] = element;
				}
			}
			this.setState({
				favoritesCities: favoriteCities,
			});
			return null;
		}
	}	

	removeFavoriteCity = (cityId) => {
		const favoriteCities = {};
		let favoriteCitiesStorage;

		favoriteCitiesStorage = JSON.parse(localStorage.getItem('favoriteCities'));
		delete favoriteCitiesStorage[cityId];
		for (const key in favoriteCitiesStorage) {
			if (favoriteCitiesStorage.hasOwnProperty(key)) {
				const element = favoriteCitiesStorage[key];
				favoriteCities[key] = element;
			}
		}
		localStorage.setItem('favoriteCities', JSON.stringify(favoriteCitiesStorage));

		this.setState({
			favoritesCities: favoriteCities,
		});
	}

    render() {
		if (this.state.isCurrentLocationWeatherShow === true) {
			if (this.state.currentCityWeather === undefined) {
				this.getCurrentLocation();
				return null;
			}	
		}

		this.getFavoritesCitiesFromLocalStorage();
		
        return (
            <div className="weather">
                <Header url={'https://images.unsplash.com/photo-1553969196-73b12db1c2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}/>
                <Main currentCityWeather={this.state.currentCityWeather} />
				<Menu isMenuShow={this.state.isMenuShow} 
					toggleMenu={this.toggleMenu} 
					favoritesCities={this.state.favoritesCities}
					removeFavoriteCity={this.removeFavoriteCity}
				/>
            </div>
        );
    }
}
