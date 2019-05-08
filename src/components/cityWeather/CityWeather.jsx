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
        <Link to={`/city/`} className='home__city-weather city-weather'>
            <div className='city-weather__city-name'>City1</div>
            <img className='city-weather__weather-icon' src={rain}/>
            <div className='city-weather__weather-description'>
                <div className='city-weather__city-temperature'>22 °C</div>
                <div className='city-weather__weather-main'>Rain</div>
            </div>
        </Link>
    )
}

export default CityWeather;