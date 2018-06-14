import axios from 'axios'
import qs from 'qs'
import { StoreDate } from '@/util';

axios.interceptors.request.use(config => {
	return config
}, error => {
	return Promise.reject(error)
})

axios.interceptors.response.use(response => {
	return response
}, error => {
	return Promise.reject(error)
})

export default {
	post (url, data) {
		return axios({
			method: 'post',
			baseURL: '',
			url: url,
			data: qs.stringify(data),
			timeout: 10000,
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				"Authorization": StoreDate.getItem('token')
			}
		}).then(response => {
			return response.data;
		})
	},
	get (url, params, data) {
		return axios({
			method: 'get',
			baseURL: '',
			url: url,
			params: params || {},
			responseType: data && data.responseType || 'json',
			timeout: 10000,
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				"Authorization": StoreDate.getItem('token')
			}
		}).then(response => {
			return response.data;
		})
	}
}