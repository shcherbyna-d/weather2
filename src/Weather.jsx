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
		favoritesCities: undefined,
		favoritesCitiesWeather: undefined,
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
		const setLocationWeatherToState = (response) => {
			this.setState({currentCityWeather: response});
		}

		navigator.geolocation.getCurrentPosition((position) => {
			this.weatherRequest.getWeatherCity(position.coords.latitude, position.coords.longitude, setLocationWeatherToState);
		}, () => {
			this.setState({isCurrentLocationWeatherShow: false})
		})
	}

	parseCurrentCityWeather() {
		const outputCurrentCityWeather = {
			cityName: this.state.currentCityWeather.name,
			cityId: this.state.currentCityWeather.id,
			temperature: this.state.currentCityWeather.main.temp,
			weatherMain: this.state.currentCityWeather.weather[0].main,
			weatherId: this.state.currentCityWeather.weather[0].id,
		}
		return outputCurrentCityWeather;
	}

	getFavoritesCitiesFromLocalStorage() {
		const favoritesCities = Object.assign({}, JSON.parse(localStorage.getItem('favoriteCities')));
		this.setState({
			favoritesCities: favoritesCities,
		});
}	

	removeFavoriteCity = (cityId) => {
		let favoriteCitiesStorage = JSON.parse(localStorage.getItem('favoriteCities'));
		delete favoriteCitiesStorage[cityId];
		const favoriteCities = Object.assign({}, favoriteCitiesStorage)
		localStorage.setItem('favoriteCities', JSON.stringify(favoriteCitiesStorage));

		this.setState({
			favoritesCities: favoriteCities,
		});
	}

	getFavoritesCityWeather() {
		const setWeatherToState = (response) => {
			this.setState({
				favoritesCitiesWeather: response.list,
			})
		}

		let cityIds = Object.keys(this.state.favoritesCities);
		this.weatherRequest.getCitiesWeather(cityIds, setWeatherToState);
	}

	parseFavoritesCitiesWeather() {
		let favoritesCitiesWeather;
		if (this.state.favoritesCitiesWeather !== undefined) {
			favoritesCitiesWeather = this.state.favoritesCitiesWeather.map((cityWeather) => {
				return {
					cityName: cityWeather.name,
					cityId: cityWeather.id,
					temperature: cityWeather.main.temp,
					weatherMain: cityWeather.weather[0].main,
					weatherId: cityWeather.weather[0].id,	
				}
			})
		}
		return favoritesCitiesWeather;
	}


    render() {
		if (this.state.isCurrentLocationWeatherShow === true) {
			if (this.state.currentCityWeather === undefined) {
				this.getCurrentLocation();
				return null;
			}	
		}

		if (localStorage.getItem('favoriteCities') !== null && this.state.favoritesCities === undefined) {
			this.getFavoritesCitiesFromLocalStorage();
			return null;
		}

		if (this.state.favoritesCitiesWeather === undefined && this.state.favoritesCities !== undefined) {
			this.getFavoritesCityWeather();
			return null;
		}
		
        return (
            <div className="weather">
                <Header url={'https://images.unsplash.com/photo-1553969196-73b12db1c2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}/>
				<Main currentCityWeather={this.parseCurrentCityWeather()} 
					favoritesCitiesWeather={this.parseFavoritesCitiesWeather()} 
				/>
				<Menu isMenuShow={this.state.isMenuShow} 
					toggleMenu={this.toggleMenu} 
					favoritesCities={this.state.favoritesCities}
					removeFavoriteCity={this.removeFavoriteCity}
				/>
            </div>
        );
    }
}
