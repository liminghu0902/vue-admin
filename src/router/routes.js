
import * as roles from '@/roles/role_types';
import Login from 'view/login';
import Error_404 from 'view/error/error_404';
import Home from 'view/home';
import Order from 'view/order';
import Customer from 'view/customer';

export const staticRoutes = [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    { path: '/error_404', name: 'error_404', component: Error_404 }
];
  
export const asyncRoutes = [
    { path: '/home', name: 'home', component: Home, meta: { name: '首页', roles: [roles.EDIT_ADMIN] } },
    { path: '/order', name: 'order', component: Order, meta: { name: '订单管理', roles: [] } },
    { path: '/customer', name: 'customer', component: Customer, meta: { name: '客户管理', roles: [roles.EDIT_ADMIN] } }
];