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
		console.log(response);
		
			const currentCityWeather = {
				cityName: response.name,
				cityId: response.id,
				temperature: response.main.temp,
				weatherMain: response.weather[0].main,
				weatherId: response.weather[0].id,
			}
		this.setState({currentCityWeather: currentCityWeather});
	}

    render() {
		if (this.state.isCurrentLocationWeatherShow === true) {
			if (this.state.currentCityWeather === undefined) {
				this.getCurrentLocation();
				return null;
			}	
		}

		console.log(this.state.currentCityWeather);
		
        return (
            <div className="weather">
                <Header url={'https://images.unsplash.com/photo-1553969196-73b12db1c2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}/>
                <Main currentCityWeather={this.state.currentCityWeather} getCurrentLocation={this.getCurrentLocation} />
                <Menu isMenuShow={this.state.isMenuShow} toggleMenu={this.toggleMenu} />
            </div>
        );
    }
}
