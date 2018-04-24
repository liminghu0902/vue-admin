import * as roleTypes from './role_types';
import { constantRoutes, asyncRoutes } from 'router/routes';
import router from 'router';

//判读是否有权限
const hasPermission = (rid, route) => {
    if (rid === roleTypes.SUPER_ADMIN) {
        return true;
    } else {
        if (route.meta && route.meta.roles && route.meta.roles.length) {
            if (route.meta.roles.indexOf(rid) !== -1) {
                return true;
            }
        }
        return false;
    }
};

//过滤子路由
const filterRoute = (rid, route) => {
    if (route.children && route.children.length) {
        route.children = route.children.filter(r => {
            if (r.children && r.children.length) {
                filterRoute(rid, r);
            }
            return hasPermission(rid, r);
        })    
    }
};

//获取需要添加的路由
const getAsyncRoutes = rid => {
    rid = parseInt(rid);
    return asyncRoutes.filter(route => {
        filterRoute(rid, route);
        return hasPermission(rid, route);
    })
};


export default {
    
}