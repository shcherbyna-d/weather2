import React from 'react';
import CityWeather from '../../components/cityWeather/CityWeather';
import CityBackground from '../../components/cityBackground/CityBackground';
import './Home.scss';

class Home extends React.Component {

    render() {
        return (
            <div className='weather__home home'>
                <h2>Your location city:</h2>
                <CityWeather />                
                <h2>Your favorites cities:</h2>
                <CityWeather />
                <CityWeather />
                <CityWeather />
                <CityBackground />
            </div>
        )
    }
}

export default Home;