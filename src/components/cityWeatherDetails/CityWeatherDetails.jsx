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

    const parseWindDeg = () => {
        let style = {
            transform: `rotate(${135 + windDeg}deg)`
        }

        return (
            <i className="fas fa-location-arrow" style={style}></i>
        ) 
    }

    return (
        <div className='city__city-weather-details city-weather-details list-group-item list-group-item-action'>
            <p className='city-weather-details__datetime'>{datetime}</p>
            <div className='city-weather-details__icon-block'>
                <img className='city-weather-details__icon' src={sun}/>
            </div>
            <div className='city-weather-details__temperature temperature'>
                <p className='temperature__name text-primary'>Temp.</p>
                <p className='temperature__value'>{temperature} °C</p>
            </div>
            <div className='city-weather-details__wind-speed wind-speed'>
                <p className='wind-speed__name text-primary'>Wind speed</p>
                <p className='wind-speed__value'>{windSpeed} m/s</p>
            </div>
            <div className='city-weather-details__wind-deg wind-deg'>
                <p className='wind-deg__name text-primary'>Wind deg.</p>
                <p className='wind-deg__value'>{parseWindDeg()}</p>
            </div>
            <div className='city-weather-details__humidity humidity'>
                <p className='humidity__name text-primary'>Humidity</p>
                <p className='humidity__value'>{humidity} %</p>
            </div>
            <div className='city-weather-details__pressure pressure'>
                <p className='pressure__name text-primary'>Pressure</p>
                <p className='pressure__value'>{pressure} hPa</p>
            </div>
            <div className='city-weather-details__description description'>
                <p className='description__name text-primary'>Descrip.</p>
                <p className='description__value'>{weatherDescription}</p>
            </div>
        </div>
    )
}

CityWeatherDetails.propTypes = {
	
}

export default CityWeatherDetails;