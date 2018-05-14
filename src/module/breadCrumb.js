import { Store } from '@/util';

const filterSidebarMenus = (menu, name) => {
    if(menu.name === name) {
        return true;
    } else {
        if(menu.children && menu.children.length) {
            for(let i=0; i<menu.children.length; i++) {
                if(filterSidebarMenus(menu.children[i], name)) {
                    return true;
                    break;
                }
            }
        } else {
            return false;
        }
    }
}

/**
 * @param {String} name [当前点击的路由的名字]
 */
export const buildBreadCrumbs = name => {
    const sidebarMenus = Store.getItem('sidebarMenus') || [];
    const menus = sidebarMenus.filter(menu => {
        return filterSidebarMenus(menu, name);
    });
    Store.setItem('breadCrumbs', JSON.stringify(menus));
    return menus;
}
 