import React from 'react';
import './City.scss';
import CityWeatherDetails from '../../components/cityWeatherDetails/CityWeatherDetails';

class City extends React.Component {
    render() {
        return (
            <div className='weather__city city'>
                <div className='city__hours-weather list-group'>
                    <CityWeatherDetails />
                    <CityWeatherDetails />
                    <CityWeatherDetails />
                    <CityWeatherDetails />
                </div>
            </div>
        )
    }
}

export default City;