export interface CityInfo {
	name: string
	id: string | number
}

export interface state {
	cityInfo: CityInfo | null
	weatherInfo: WeatherInfo | null
	show: boolean
}

export interface WeatherInfo {
	temp: string
	text: string
	windDir: string
}
