import * as roleTypes from './role_types';
import { staticRoutes, asyncRoutes } from 'router/routes';
import router from 'router';

export default {
    getRoutes (rid) {
        rid = parseInt(rid);
        return asyncRoutes.filter(route => {
            const roles = route.meta.roles;
            if (rid === roleTypes.SUPER_ADMIN) {
                return true;
            } else {
                if (roles && roles.length) {
                    if (roles.indexOf(rid) !== -1) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return false;
            }
        });
    }
}