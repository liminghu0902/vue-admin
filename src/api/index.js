const env = process.env.NODE_ENV;
let MAIN_PATH;

if(env === 'development') {
    MAIN_PATH = 'https://adminapi.ect.wm-imotor.com/';
} else if(env === 'production') {
    MAIN_PATH = 'https://adminapi.ect.wm-imotor.com/';
};

export default {
    provincesAndCitys:          MAIN_PATH.concat('admin/v1/provinceAndCity/list'),
    user: {
        login:                  MAIN_PATH.concat('admin/login'),
        logout:                 MAIN_PATH.concat('admin/logout')
    },
    customer: {
        getTypes:               MAIN_PATH.concat('admin/v1/user/types'),                    /* 获取所有客户类型 */
        getIdCardType:          MAIN_PATH.concat('admin/v1/user/card/type'),                /* 获取客户证件类型 */
        search:                 MAIN_PATH.concat('admin/v1/user/all/filter'),               /* 查询客户 */
        getDetail:              MAIN_PATH.concat('admin/v1/user/'),                         /* 获取客户详情 */
        exportExcel:            MAIN_PATH.concat('admin/v1/user/all/filter/excel')          /* 导出excel */
    },
    order: {
        getStatus:              MAIN_PATH.concat('admin/v1/order/status'),                  /* 获取所有订单状态 */
        getPaymentMode:         MAIN_PATH.concat('admin/v1/order/payments'),                /* 获取支付方式 */
        search:                 MAIN_PATH.concat('admin/v1/order/all/filter'),              /* 查询订单 */
        getDetail:              MAIN_PATH.concat('admin/v1/order/'),                        /* 获取订单详情 */
        exportExcel:            MAIN_PATH.concat('admin/v1/order/all/filter/excel'),        /* 导出excel */
        unsubscribe:            MAIN_PATH.concat('admin/v1/order/refundok/'),               /* 退订 */
        unsubscribe_666:        MAIN_PATH.concat('admin/v1/order/sperefundok/'),            /* 666用户退订 */
        modifyDetail:           MAIN_PATH.concat('admin/v1/order/detail/update')           /* 修改订单详情 */
    }
};