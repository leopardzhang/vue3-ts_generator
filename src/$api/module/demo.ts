export default {
	WEATHER_REOPRT__GET_CITY_INFO: {
		name: 'WEATHER_REOPRT__GET_CITY_INFO',

		proxy: {
			url: 'api/v2/city/lookup',		// 这个接口被转发了地址在vue.config devserver
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
