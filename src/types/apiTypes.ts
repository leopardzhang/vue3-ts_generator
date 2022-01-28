export type Method = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'delete' | 'DELETE'

export interface apiProxy {
	url: string
	method: Method
	headers?: any
}

export interface apis {
	name: string
	proxy: apiProxy
}
