
import { EDIT_ADMIN } from '@/constant/roles';
import Layout from '../layout';
import Login from '@/view/login';
import Error_404 from '@/view/error/error_404';
import Home from '@/view/home';
import Order from '@/view/order';
import OrderDetail from '@/view/order/detail';
import Customer from '@/view/customer';
import CustomerDetail from '@/view/customer/detail';

export const constantRoutes = [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: Login }
];
  
export const asyncRoutes = [
    { path: '/layout', name: 'layout', component: Layout, meta: { roles: '*', isMenu: false },
        children: [
            { path: '/home', name: 'home', component: Home, meta: { name: '首页', roles: [EDIT_ADMIN], icon: 'tachometer' } },
            { path: '/order', name: 'order', component: Order, meta: { name: '订单管理', roles: [], icon: 'file' }},
            { path: '/order-detail', name: 'orderDetail', component: OrderDetail, meta: { name: '订单详情', roles: [], isMenu: false } },
            { path: '/customer', name: 'customer', component: Customer, meta: { name: '客户管理', roles: [EDIT_ADMIN], icon: 'users' } },
            { path: '/customer-detail', name: 'customerDetail', component: CustomerDetail, meta: { name: '客户详情', roles: [], icon: '', isMenu: false} },
            { path: '/error_404', name: 'error_404', component: Error_404, meta: {roles: '*', isMenu: false} },
            { path: '/permission', name: 'permission', meta: {name: '权限管理', icon: 'user'}, 
                children: [
                    { path: 'roles', name: 'roles', meta: {name: '角色管理'} }
                ]
            }
        ]
    },
    { path: '*', redirect: '/error_404', meta: { roles: '*', isMenu: false } }
];