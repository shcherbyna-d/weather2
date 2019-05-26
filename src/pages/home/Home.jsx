import React from 'react';
import CityWeather from '../../components/cityWeather/CityWeather';
import BackgroundImage from '../../components/backgroundImage/BackgroundImage';
import './Home.scss';

class Home extends React.Component {

    render() {
        return (
            <div className='weather__home home'>
                <h2 className='home__h2'><strong>Your location city:</strong></h2>
                <CityWeather />                
                <h2 className='home__h2'><strong>Your favorites cities:</strong></h2>
                <CityWeather />
                <CityWeather />
                <CityWeather />
                <CityWeather />
                <CityWeather />
                <CityWeather />
            </div>
        )
    }
}

export default Home;