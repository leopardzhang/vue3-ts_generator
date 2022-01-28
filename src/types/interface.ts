// 为 store state 声明类型
export interface State {
	key: string
}

export interface apiResponse {
	code: string | number
	data: any
}
