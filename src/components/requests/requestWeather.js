export default class RequestWeather {
	constructor() {
		this.baseUrl = 'https://api.openweathermap.org/data/2.5/';
		this.appId = 'e5a8a2a8b07305119916d5ccc53716f0';
		this.units = 'metric';
	}

	getWeatherCityByCoords (lat, lon, setLocationWeatherToState) {
		const url = `${this.baseUrl}weather?lat=${lat}&lon=${lon}&APPID=${this.appId}&units=${this.units}`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
			setLocationWeatherToState(response);
        })
        .catch((e) => console.log(e));
    }
    
	getSearchCityWeather (cityName, setCityWeatherToState, cityNotFound) {
		const url = `${this.baseUrl}weather?q=${cityName}&APPID=${this.appId}&units=${this.units}`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
            if (response.cod == 200) {
                setCityWeatherToState(response);
            }
            if (response.cod == 404) {
                cityNotFound();
            }   
        })
        .catch((e) => console.log(e));
	}

	getCitiesWeather (cityIds, setWeatherToState) {
		const url = `${this.baseUrl}group?id=${[...cityIds]}&APPID=${this.appId}&units=${this.units}`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
			setWeatherToState(response);
        })
        .catch((e) => console.log(e));
    }
    
    

	getHoursCityWeather (cityId, setHoursWeatherToState) {
		const url = `${this.baseUrl}forecast?id=${cityId}&APPID=${this.appId}&units=${this.units}`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
            setHoursWeatherToState(response);
        })
        .catch((e) => console.log(e));

	}
}