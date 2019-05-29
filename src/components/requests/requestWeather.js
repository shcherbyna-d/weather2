export default class RequestWeather {
	constructor() {
		// this.baseUrl = 'https://api.openweathermap.org/data/2.5/';
		this.appId = 'e5a8a2a8b07305119916d5ccc53716f0';
		this.units = 'metric';
	}

	getWeatherCity (lat, lon, setLocationWeatherToState) {
		const url = `${this.baseUrl}weather?lat=${lat}&lon=${lon}&APPID=${this.appId}&units=${this.units}`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
			setLocationWeatherToState(response);
        })
        .catch((e) => console.log(e));
	}

	getWeatherCities (cityIds, setWeatherToState) {
		const url = `${this.baseUrl}group?id=${[...cityIds]}&APPID=${this.appId}&units=${this.units}`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
			setWeatherToState(response);
        })
        .catch((e) => console.log(e));
	}

	getHoursWeatherCity (cityId) {
		const url = `${this.baseUrl}forecast?id=${cityId}&APPID=${this.appId}&units=${this.units}`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
            const weatherHoursArray = response.list.map((datetime) => {
                return {
                    datetime: datetime.dt,
                    temperature: datetime.main.temp,
                    humidity: datetime.main.humidity,
                    pressure: datetime.main.pressure,
                    weatherDescription: datetime.weather[0].description,
                    weatherId: datetime.weather[0].id,
                    windSpeed: datetime.wind.speed,
                    windDeg: datetime.wind.deg,
                }
            });
            weatherHoursArray.forEach(element => {
                element.cityName = response.city.name;
            });
            this.setState(() => {
                return {
                    weatherHoursArray: weatherHoursArray,
                    cityKey: this.props.match.params.cityKey,
                    toRenderImg: true,
                }
            })
        })
        .catch((e) => console.log(e));

	}
}