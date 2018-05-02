import { Api } from '@/api';
import { Http, Cookie } from '@/util';

export const User = {
    login (data) {
        return new Promise((resolve, reject) => {
            Http.post(Api.user.login, data)
            .then(res => {
                Cookie.setItem('token', res.data.token);
                resolve(res);
            })
        })
    },
    logout () {
        return new Promise((resolve, reject) => {
            Http.get(Api.user.logout)
            .then(res => {
                resolve(res);
            })
        })
    }

}