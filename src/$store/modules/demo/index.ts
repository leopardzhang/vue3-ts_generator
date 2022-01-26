import $apiConf from '@/$api'
import { state } from './types'

const state: state = {
	cityInfo: {
		name: '',
		id: ''
	},

	weatherInfo: null,

	show: false
}

const mutations = {
	SET_CITY_ID(state, mutation) {
		state.cityInfo = mutation.payload
	},

	SET_WEATHER_INFO(state, mutation) {
		state.weatherInfo = mutation.payload
	},

	SET_SHOW_STATE(state, mutation) {
		state.show = mutation.payload
	}
}

const actions = {
	/**
	 * 获取城市信息
	 * @param param0 context
	 * @param location <城市名 | 城市编码>
	 */
	async getCityInfo({
		rootState,
		commit,
		dispatch
	}, location: string) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.WEATHER_REOPRT__GET_CITY_INFO,
			params: {
				key: rootState.key,
				location
			}
		}, { root: true })

		const info = res.location[0]
		commit({
			type: 'SET_CITY_ID',
			payload: {
				id: info.id,
				name: info.name
			}
		})
	},

	/**
	 * 获取天气情况
	 * @param param0 context
	 * @param id 城市编码
	 */
	async getWeatherReport({
		rootState,
		state,
		commit,
		dispatch
	}) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.WEATHER_REOPRT__GET_CITY_WEATHER_BY_ID,
			params: {
				key: rootState.key,
				location: state.cityInfo.id
			}
		}, { root: true })

		commit({
			type: 'SET_WEATHER_INFO',
			payload: res.now
		})

		commit({
			type: 'SET_SHOW_STATE',
			payload: true
		})
	}
}

const getters = {
	cityInfo(state) {
		return state.cityInfo
	}
}

export default {
	state,
	mutations,
	actions,
	getters,
	namespaced: true
}
