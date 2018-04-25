
import * as roleTypes from '@/constant/roles';
import Layout from '../layout';
import Login from '@/view/login';
import Error_404 from '@/view/error/error_404';
import Home from '@/view/home';
import Order from '@/view/order';
import Customer from '@/view/customer';

export const constantRoutes = [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    { path: '/error_404', name: 'error_404', component: Error_404 }
];
  
export const asyncRoutes = [
    { path: '/layout', name: 'layout', component: Layout, meta: { roles: '*', isMenu: false },
        children: [
            { path: '/home', name: 'home', component: Home, meta: { name: '首页', roles: [roleTypes.EDIT_ADMIN], icon: '' } },
            { path: '/order', name: 'order', component: Order, meta: { name: '订单管理', roles: [], icon: '' },
                children: [
                    { path: 'detail', name: 'orderDetail', meta: { name: '订单详情', roles: [], icon: '' },
                        children: [
                            { path: 'detail1', name: 'orderDetail1', meta: { name: '订单详情1', roles: [], icon: '' } }
                        ]
                    }
                ]
            },
            { path: '/customer', name: 'customer', component: Customer, meta: { name: '客户管理', roles: [roleTypes.EDIT_ADMIN], icon: '' },
                children: [
                    { path: 'detail', name: 'customerDetail', meta: { name: '客户详情', roles: [], icon: '' } }
                ]
            },
            { path: '*', redirect: '/error_404', meta: { roles: '*', isMenu: false } }
        ]
    }
    
];