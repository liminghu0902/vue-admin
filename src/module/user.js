import { Api } from '@/api';
import { Request, Cookie } from '@/util';

export const User = {

    login (data) {
        return new Promise((resolve, reject) => {
            Request.post(Api.user.login, data)
            .then(res => {
                Cookie.setItem('token', res.data.token);
                resolve(res);
            })
        })
    },

    logout () {
        return new Promise((resolve, reject) => {
            Request.get(Api.user.logout)
            .then(res => {
                resolve(res);
            })
        })
    }

}