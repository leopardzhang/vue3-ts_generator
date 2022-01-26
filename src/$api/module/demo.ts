export default {
	WEATHER_REOPRT__GET_CITY_INFO: {
		name: 'GET_CITY_INFO',

		proxy: {
			url: 'https://geoapi.qweather.com/v2/city/lookup',
			method: 'GET'
		}
	},

	WEATHER_REOPRT__GET_CITY_WEATHER_BY_ID: {
		name: 'WEATHER_REOPRT__GET_CITY_WEATHER_BY_ID',

		proxy: {
			url: 'https://devapi.qweather.com/v7/weather/now',
			method: 'GET'
		}
	},
	TEST_POST: {
		name: 'TEST_POST',

		proxy: {
			url: 'demo',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	},

	/**
	 * In this way, we need to add urlParams in $apiCall.
	 * And the name of the urlParams mast have a same one in the url with ':'
	 */
	TEST_WITH_URL_PARAMS: {
		name: 'TEST_WITH_URL_PARAMS',

		proxy: {
			url: 'demo/:id/:name',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	}
}
