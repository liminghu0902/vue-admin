import Api from '@/api';
import { Http, UtilCom } from '@/util';

export class Customer {
    
    constructor(data = {}) {
        this.rid = data.rid;
        this.wmId = data.wmId;
        //客户名字
        this.name = data.name;
        //客户类型
        this.type = data.type;
        //客户性别
        this.sex = data.gender;
        //客户手机号码
        this.mobilePhone = data.mobile;
        //推荐人手机号码
        this.refereeMobile = data.refereeMobile;
        //注册时间
        this.registTime = data.createTime;
        //省份代码
        this.province = data.province;
        //省份名称
        this.provinceName = data.provinceName;
        //城市代码
        this.city = data.city;
        //城市名称
        this.cityName = data.cityName;
        //经销商门店
        this.dealerShop = data.dealerShop;
    }

    //查询客户
    static searchCustomer(cfg = {}) {
        const data = {
            page: parseInt(cfg.page) || 1,
            size: parseInt(cfg.size) || 10,
            type: cfg.customerType || -1,
            traceId: cfg.traceId || '',
            wmId: cfg.wmId || '',
            mobile: cfg.mobilePhone || '',
            name: cfg.customerName || '',
            province: cfg.province || '',
            city: cfg.city || '',
            startTime: cfg.startRegistTime || 0,
            endTime: cfg.endRegistTime || 0
        };
        return new Promise((resolve, reject) => {
            Http.get(Api.customer.search, data)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }

    //通过rid获取客户详情
    static getCustomerDetailByRid(rid) {
        return new Promise((resolve, reject) => {
            Http.get(Api.customer.getDetail + rid)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }

    //获取所有客户类型
    static getCustomerTypes() {
        return new Promise((resolve, reject) => {
            Http.get(Api.customer.getTypes)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }

    //导出客户数据
    static exportCustomerToExcel(cfg = {}) {
        const data = {
            page: parseInt(cfg.page) || 1,
            size: parseInt(cfg.size) || 10,
            type: cfg.customerType || -1,
            traceId: cfg.traceId || '',
            wmId: cfg.wmId || '',
            mobile: cfg.mobilePhone || '',
            name: cfg.customerName || '',
            province: cfg.province || '',
            city: cfg.city || '',
            startTime: cfg.startRegistTime || 0,
            endTime: cfg.endRegistTime || 0
        };
        return new Promise((resolve, reject) => {
            Http.get(Api.customer.exportExcel, data, {
                responseType:"arraybuffer"
            }).then(res => {
                if(res) {
                    const d = new Date();
                    const fileName = '电商客户列表' 
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
                console.log('————EXPORT_CUSTOMER_ERROR')
                reject(err);
            })
        }) 
    }

}