import React from 'react';
import './City.scss';
import CityWeatherDetailsDay from '../../components/cityWeatherDetailsDay/CityWeatherDetailsDay';
import CityBackground from '../../components/cityBackground/CityBackground'

class City extends React.Component {
    render() {
        return (
            <div className='weather__city city'>
                <div className='city__city-name'>City1</div>
                <CityWeatherDetailsDay />
                <CityBackground />
            </div>
        )
    }
}

export default City;