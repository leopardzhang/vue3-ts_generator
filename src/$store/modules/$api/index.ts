import axios from 'axios'
import { ERR_OK } from '@/common/code'
import { axiosResponse } from './types'

const state = {
	$loading: false
}

const mutations = {
	SET_LOADING_STATE(state: any, mutation: any) {
		state.$loading = mutation.payload
	}
}

const actions = {
	async $apiCall({
		commit
	}, {
		config,
		params = {},
		urlParams = {}
	}) {
		let url = config.proxy.url
		let proxy = config.proxy
		const dataType = {
			POST: 'data',
			GET: 'params',
			DELETE: 'params',
			PUT: 'data'
		}

		commit({
			type: 'SET_LOADING_STATE',
			payload: true
		})

		Object.keys(urlParams).forEach(k => {
			const reg = new RegExp(`:${k}`)

			url = url.replace(reg, urlParams[k])
		})
		proxy[dataType[proxy.method.toUpperCase()]] = params

		return await axios(Object.assign({}, proxy, {
			url
		})).then((response: axiosResponse) => {
			if (response.status !== ERR_OK) {
				throw Error('服务器异常')
			}
			commit({
				type: 'SET_LOADING_STATE',
				payload: false
			})

			return response.data
		})
	}
}

const getters = {

}

export default {
	state,
	mutations,
	actions,
	getters
};
