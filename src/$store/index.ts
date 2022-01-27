import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import { State } from '../types/interface'
import $api from './modules/$api'
import demo from './modules/demo'

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
	state: {
		key: '650d17aba9d94a08875aa35d25093a37'
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		$api,
		demo
	}
})
