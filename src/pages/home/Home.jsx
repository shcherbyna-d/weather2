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
                {/* <BackgroundImage url={'https://images.unsplash.com/photo-1553969196-73b12db1c2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}/> */}
            </div>
        )
    }
}

export default Home;