import React from 'react';
import './City.scss';
import CityWeatherDetails from '../../components/cityWeatherDetails/CityWeatherDetails';
import PropTypes from 'prop-types';
import RequestWeather from '../../components/requests/requestWeather';

class City extends React.Component {
    state = {
        hoursWeather: undefined,
        cityId: undefined,
	}
	
	weatherRequest = new RequestWeather();

    weatherRequestHours = () => {
		const setHoursWeatherToState = (response) => {
			const hoursWeather = response.list.map((datetime) => {
                return {
                    datetime: datetime.dt,
                    temperature: datetime.main.temp,
                    humidity: datetime.main.humidity,
                    pressure: datetime.main.pressure,
                    weatherDescription: datetime.weather[0].description,
                    weatherId: datetime.weather[0].id,
                    windSpeed: datetime.wind.speed,
                    windDeg: datetime.wind.deg,
                }
            });
            hoursWeather.forEach(element => element.cityName = response.city.name);
            this.setState(() => {
                return {
                    hoursWeather: hoursWeather,
                    cityId: this.props.match.params.cityId,
                }
            })
		}

		this.weatherRequest.getHoursCityWeather(this.props.match.params.cityId, setHoursWeatherToState);
    }
    
    parseDate = (milliseconds) => {
        let fullDate = new Date(milliseconds * 1000);
        let day = fullDate.getDay();
        switch (day) {
            case 1:
                day = 'Пн.'
                break;
            case 2:
                day = 'Вт.'
                break;
            case 3:
                day = 'Ср.'
                break;
            case 4:
                day = 'Чт.'
                break;
            case 5:
                day = 'Пт.'
                break;
            case 6:
                day = 'Сб.'
                break;
            case 0:
                day = 'Вс.'
                break;
        }
        let date = parseInt(fullDate.getDate(), 10);
        date = (date < 10 ? '0' + date.toString(): date);
        let month = parseInt(fullDate.getMonth(), 10) + 1;
        month = (month < 10 ? '0' + month.toString(): month);
        let year = fullDate.getFullYear();
        let hours = parseInt(fullDate.getHours(), 10);
        hours = (hours < 10 ? '0' + hours.toString(): hours);
        let newDate = `${day} ${date}.${month}.${year} ${hours}:00`;
        return newDate;
    }

    parseDeg = (deg) => {
        if ((deg > 337 && deg <= 360) || (deg >= 1 && deg <= 22)) {
            return 'С';
        }
        if (deg > 22 && deg <= 67) {
            return 'СВ';
        }
        if (deg > 67 && deg <= 112) {
            return 'В';
        }
        if (deg > 112 && deg <= 157) {
            return 'ЮВ';
        }
        if (deg > 157 && deg <= 202) {
            return 'Ю';
        }
        if (deg > 202 && deg <= 247) {
            return 'ЮЗ';
        }
        if (deg > 247 && deg <= 292) {
            return 'З';
        }
        if (deg > 292 && deg <= 337) {
            return 'СЗ';
        }
	}
	
	componentDidMount() {
		if (this.state.hoursWeather === undefined) {
            this.weatherRequestHours();
        }
    }
    
    componentDidUpdate() {
		if (this.state.cityId !== undefined && this.state.cityId !== this.props.match.params.cityId) {
            this.weatherRequestHours();
        }
	}

    render() {
        let cityWeatherDetailsElements = null;
        if (this.state.hoursWeather !== undefined) {
            cityWeatherDetailsElements = this.state.hoursWeather.map((datetime) => {
                return <CityWeatherDetails
                    datetime={this.parseDate(datetime.datetime)}
                    temperature={Math.round(datetime.temperature)}
                    humidity={datetime.humidity}
                    pressure={Math.round(datetime.pressure)}
                    weatherDescription={datetime.weatherDescription}
                    weatherId={datetime.weatherId}
                    windSpeed={datetime.windSpeed}
                    windDeg={this.parseDeg(datetime.windDeg)}
                    key={datetime.datetime}
                />
            })
        }
        
        return (
            <div className='weather__city city'>
                <div className='city__city-name'>{this.state.hoursWeather === undefined? null: this.state.hoursWeather[0].cityName}</div>
                {cityWeatherDetailsElements}
            </div>
        )
    }
}

City.propTypes = {

}

export default City;