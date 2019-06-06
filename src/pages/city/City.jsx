import React from 'react';
import './City.scss';
import CityWeatherDetails from '../../components/cityWeatherDetails/CityWeatherDetails';
import PropTypes from 'prop-types';

const City = ({}) => {
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

City.propTypes = {

}

export default City;