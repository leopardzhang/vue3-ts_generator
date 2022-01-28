export interface axiosResponse {
	data: any
	headers: any
	request?: any
	status: number
	statusText: string
}

export interface CityInfo {
	name: string
	id: string | number
}

export interface WeatherInfo {
	temp: string
	text: string
	windDir: string
}

export interface demoSate {
	cityInfo: CityInfo | null
	weatherInfo: WeatherInfo | null
	show: boolean
}
