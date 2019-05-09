import React from 'react';
import './CityWeather.scss';
import { Link } from 'react-router-dom';
import cloud from '../../utilities/assets/cloudy.png';
import fog from '../../utilities/assets/foggy.png';
import rain from '../../utilities/assets/rainfall.png';
import snow from '../../utilities/assets/snow.png';
import storm from '../../utilities/assets/storm.png';
import sun from '../../utilities/assets/sun.png';

const CityWeather = () => {

    return (
        <Link to={`/city/`} className='home__city-weather city-weather card text-white bg-primary'>
            <h4 className='city-weather__header card-header'>
                <span>City1</span>
                <span>wether today</span>
            </h4>
            <div className='city-weather__body card-body'>
                <img className='city-weather__weather-icon' src={rain}/>
                <h4 className='city-weather__temperature card-title'>22 °C</h4>
                <h4 className='city-weather__weather-main card-title'>Rain</h4>
            </div>
        </Link>
    )
}

export default CityWeather;