import axios from 'axios'
import qs from 'qs'
import { Store } from '@/util';

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
				"Authorization": Store.getItem('token')
			}
		}).then(response => {
			return response;
		})
	},
	get (url, params) {
		return axios({
			method: 'get',
			baseURL: '',
			url: url,
			params: params || {},
			timeout: 10000,
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				"Authorization": Store.getItem('token')
			}
		}).then(response => {
			return response;
		})
	}
}