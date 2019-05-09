import React from 'react';
import './City.scss';
import CityWeatherDetails from '../../components/cityWeatherDetails/CityWeatherDetails';
import BackgroundImage from '../../components/backgroundImage/BackgroundImage';

class City extends React.Component {
    render() {
        return (
            <div className='weather__city city'>
                <h1 className='city__city-name'><strong>City1</strong></h1>
                <div className='city__hours-weather list-group'>
                    <CityWeatherDetails />
                    <CityWeatherDetails />
                    <CityWeatherDetails />
                    <CityWeatherDetails />
                </div>
                <BackgroundImage url={'https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}/>
            </div>
        )
    }
}

export default City;