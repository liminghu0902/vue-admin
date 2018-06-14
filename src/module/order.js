import Api from '@/api';
import { Http, UtilCom } from '@/util';
import { Product } from '@/module';

export class Order {

    constructor(data = {}) {
        //订单号
        this.orderNo = data.orderNo;
        //rid
        this.rid = data.rid;
        //用户id
        this.customerId = data.userId;
        //用户名
        this.customerName = data.userName;
        //省份代码
        this.province = data.province;
        //省份名称
        this.provinceName = data.provinceName;
        //城市代码
        this.city = data.city;
        //城市名称
        this.cityName = data.cityName;
        //手机号码
        this.mobilePhone = data.userMobile;
        //产品
        this.product = new Product(data.productName, data.batteryPack, data.bodyColor, data.innerColor);
        //订单创建时间
        this.createTime = data.createTime;
        //订单退订时间
        this.refundTime = data.refundTime;
        //订单修改时间
        this.updateTime = data.updateTime;
        //订单支付时间
        this.paymentTime = data.paymentTime;
        //订单支付金额
        this.paymentMoney = data.paymentMoney;
        //提车顺序号
        this.orderNumber = data.orderNumber;
        //订单类型
        this.orderType = data.orderType;
        //订单支付方式
        this.paymentMode = data.paymentChannel;
        //订单状态
        this.orderStatu = data.status;
        //经销商门店
        this.dealerShop = data.dealerShop;
    }

    //查询订单
    static searchOrder(cfg = {}) {
        const data = {
            page: parseInt(cfg.page) || 1,
            size: parseInt(cfg.size) || 10,
            status: cfg.status || -1,
            traceId: cfg.traceId || '',
            orderNo: cfg.orderNo || '',
            mobile: cfg.mobilePhone || '',
            name: cfg.customerName || '',
            province: cfg.province || '',
            city: cfg.city || '',
            startTime: cfg.startTime || 0,
            endTime: cfg.endTime || 0,
            paymentChannel: cfg.paymentMode || -1,
            orderNumber: cfg.orderNumber || ''
        };
        return new Promise((resolve, reject) => {
            Http.get(Api.order.search, data)
            .then(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
        })
    }

    //修改订单信息
    static modifyOrderDetail() {

    }

    //通过rid获取订单详情
    static getOrderDetailByRid(rid) {
        return new Promise((resolve, reject) => {
            Http.get(Api.order.getDetail + rid)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }

    //获取所有支付方式
    static getPaymentModes() {
        return new Promise((resolve, reject) => {
            Http.get(Api.order.getPaymentMode)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }

    //获取所有支付状态
    static getOrderStatus() {
        return new Promise((resolve, reject) => {
            Http.get(Api.order.getStatus)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }

    //导出订单数据
    static exportOrderToExcel(cfg) {
        const data = {
            page: parseInt(cfg.page) || 1,
            size: parseInt(cfg.size) || 10,
            status: cfg.status || -1,
            traceId: cfg.traceId || '',
            orderNo: cfg.orderNo || '',
            mobile: cfg.mobilePhone || '',
            name: cfg.customerName || '',
            province: cfg.province || '',
            city: cfg.city || '',
            startTime: cfg.startTime || 0,
            endTime: cfg.endTime || 0,
            paymentChannel: cfg.paymentMode || -1,
            orderNumber: cfg.orderNumber || ''
        };
        return new Promise((resolve, reject) => {
            Http.get(Api.order.exportExcel, data, {
                responseType:"arraybuffer"
            }).then(res => {
                if(res) {
                    const d = new Date();
                    const fileName = '电商预售订单列表' 
                                    + d.getFullYear()
                                    + UtilCom.addZero(d.getMonth() + 1)
                                    + UtilCom.addZero(d.getDate())
                                    + '.xlsx';
                    UtilCom.exportToExcel(res, fileName)
                    resolve(res);
                } else {
                    reject(res);
                }
            }).catch(err => {
                console.log('———EXPORT_ORDER_ERROR')
                reject(err);
            })
        })
    }
}