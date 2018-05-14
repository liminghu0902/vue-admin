import { Api } from '@/api';
import { Http } from '@/util';

export const User = {
    login (data) {
        return new Promise((resolve, reject) => {
            Http.post(Api.user.login, data)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
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