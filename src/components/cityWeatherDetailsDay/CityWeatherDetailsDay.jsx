import React from 'react';
import './CityWeatherDetailsDay.scss';
import cloud from '../../utilities/assets/cloudy.png';
import fog from '../../utilities/assets/foggy.png';
import rain from '../../utilities/assets/rainfall.png';
import snow from '../../utilities/assets/snow.png';
import storm from '../../utilities/assets/storm.png';
import sun from '../../utilities/assets/sun.png';

const CityWeatherDetailsDay = () => {

    return (
        <div className='city__weather-data weather-data list-group-item list-group-item-action'>
            <p className='weather-data__datetime'>Четверг 08.05.2019 15:00</p>
            <div className='weather-data__icon-block'>
                <img className='weather-data__icon' src={sun}/>
            </div>
            <div className='weather-data__temperature temperature'>
                <p className='temperature__name text-secondary'>Темп.</p>
                <p className='temperature__value'>15 °C</p>
            </div>
            <div className='weather-data__wind-speed wind-speed'>
                <p className='wind-speed__name text-secondary'>Скор. вет.</p>
                <p className='wind-speed__value'>2 м/с</p>
            </div>
            <div className='weather-data__wind-deg wind-deg'>
                <p className='wind-deg__name text-secondary'>Напр. вет.</p>
                <p className='wind-deg__value'>C</p>
            </div>
            <div className='weather-data__humidity humidity'>
                <p className='humidity__name text-secondary'>Влажн.</p>
                <p className='humidity__value'>70%</p>
            </div>
            <div className='weather-data__pressure pressure'>
                <p className='pressure__name text-secondary'>Давл.</p>
                <p className='pressure__value'>999гПа</p>
            </div>
            <div className='weather-data__description description'>
                <p className='description__name text-secondary'>Погода</p>
                <p className='description__value'>Rain</p>
            </div>
        </div>
    )
}

export default CityWeatherDetailsDay;