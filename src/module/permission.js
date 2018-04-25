import * as roleTypes from 'constant/roles';
import { constantRoutes, asyncRoutes } from 'router/routes';
import router from 'router';

//判读是否有权限
const hasPermission = (rid, route) => {
    if (rid === roleTypes.SUPER_ADMIN) {
        return true;
    } else {
        if (route.meta && route.meta.roles && route.meta.roles.length) {
            if (route.meta.roles.indexOf(rid) !== -1 || route.meta.roles === '*') {
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

//获取有角色权限的路由
const getPermissionRoutes = rid => {
    return asyncRoutes.filter(route => {
        filterRoute(rid, route);
        return hasPermission(rid, route);
    });
};

//构建路由, 将获取的角色权限路由添加到router中
export const buildRouter = rid => {
    rid = parseInt(rid);
    router.addRoutes(getPermissionRoutes(rid));
};

//过滤子路由菜单
const filterMenu = menu => {
    if (menu.children && menu.children.length) {
        menu.children = menu.children.filter(m => {
            filterMenu(m)
            return !menu.meta.hasOwnProperty('isMenu');
        })
    }
};

//获取菜单数组
export const buildSidebarMenus = rid => {
    rid = parseInt(rid);
    const sidebarMenus = getPermissionRoutes(rid)[0].children.filter(menu => {
        filterMenu(menu);
        return !menu.meta.hasOwnProperty('isMenu');
    });
    sessionStorage.setItem('sidebarMenus', JSON.stringify(sidebarMenus));
    return sidebarMenus;
};