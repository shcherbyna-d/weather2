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
        <div className='city__weather-data weather-data'>
            <div className='weather-data__datetime'>08.05.2019</div>
            <div className='weather-data__icon-block'>
                <img className='weather-data__icon' src={sun}/>
            </div>
            <div className='weather-data__temperature temperature'>
                <div className='temperature__name'>Темп.</div>
                <div className='temperature__value'>15 °C</div>
            </div>
            <div className='weather-data__wind-speed wind-speed'>
                <div className='wind-speed__name'>Скор. вет.</div>
                <div className='wind-speed__value'>2 м/с</div>
            </div>
            <div className='weather-data__wind-deg wind-deg'>
                <div className='wind-deg__name'>Напр. вет.</div>
                <div className='wind-deg__value'>C</div>
            </div>
            <div className='weather-data__humidity humidity'>
                <div className='humidity__name'>Влажн.</div>
                <div className='humidity__value'>70%</div>
            </div>
            <div className='weather-data__pressure pressure'>
                <div className='pressure__name'>Давл.</div>
                <div className='pressure__value'>999гПа</div>
            </div>
            <div className='weather-data__description description'>
                <div className='description__name'>Погода</div>
                <div className='description__value'>Rain</div>
            </div>
        </div>
    )
}

export default CityWeatherDetailsDay;