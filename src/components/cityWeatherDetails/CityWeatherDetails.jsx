import React from 'react';
import './CityWeatherDetails.scss';
import cloud from '../../utilities/assets/cloudy.png';
import fog from '../../utilities/assets/foggy.png';
import rain from '../../utilities/assets/rainfall.png';
import snow from '../../utilities/assets/snow.png';
import storm from '../../utilities/assets/storm.png';
import sun from '../../utilities/assets/sun.png';
import PropTypes from 'prop-types';

const CityWeatherDetails = ({
    datetime, 
    temperature, 
    humidity, 
    pressure, 
    weatherDescription, 
    weatherId, 
    windSpeed, 
    windDeg
}) => {
    const getWeatherIcon = () => {
        if (weatherId >= 200 && weatherId < 300) {
            return storm;
        }
        if (weatherId >= 300 && weatherId < 500) {
            return rain;
        }
        if (weatherId >= 500 && weatherId < 600) {
            return rain;
        }
        if (weatherId >= 600 && weatherId < 700) {
            return snow;
        }
        if (weatherId >= 700 && weatherId < 800) {
            return fog;
        }
        if (weatherId === 800) {
            return sun;
        }
        if (weatherId >= 801 && weatherId < 900) {
            return cloud;
        }
    }

    const parseWindDeg = () => {
        let style = {
            transform: `rotate(${135 + windDeg}deg)`
        }

        return (
            <i className="fas fa-location-arrow" style={style}></i>
        ) 
    }

    return (
        <div className='city__city-weather-details city-weather-details'>
            <p className='city-weather-details__datetime'>{datetime}</p>
            <div className='city-weather-details__icon-block'>
                <img className='city-weather-details__icon' src={getWeatherIcon()}/>
            </div>
            <div className='city-weather-details__temperature temperature'>
                <p className='temperature__name'>Temp.</p>
                <p className='temperature__value'>{temperature} °C</p>
            </div>
            <div className='city-weather-details__wind-speed wind-speed'>
                <p className='wind-speed__name'>Wind speed</p>
                <p className='wind-speed__value'>{windSpeed} m/s</p>
            </div>
            <div className='city-weather-details__wind-deg wind-deg'>
                <p className='wind-deg__name'>Wind deg.</p>
                <p className='wind-deg__value'>{parseWindDeg()}</p>
            </div>
            <div className='city-weather-details__humidity humidity'>
                <p className='humidity__name'>Humidity</p>
                <p className='humidity__value'>{humidity} %</p>
            </div>
            <div className='city-weather-details__pressure pressure'>
                <p className='pressure__name'>Pressure</p>
                <p className='pressure__value'>{pressure} hPa</p>
            </div>
            <div className='city-weather-details__description description'>
                <p className='description__name'>Descrip.</p>
                <p className='description__value'>{weatherDescription}</p>
            </div>
        </div>
    )
}

CityWeatherDetails.propTypes = {
	
}

export default CityWeatherDetails;