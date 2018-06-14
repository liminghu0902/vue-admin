<template>
    <div class="order-wrapper">
        <content-header :title="'客户订单管理'"></content-header>
        <section class="content animated fadeIn">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <h3 class="box-title">客户订单管理</h3>
                        </div>
                        <form class="form-horizontal customerForm" @reset.prevent="reset">
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="paymentMode" class="col-sm-3 control-label">订单支付方式:</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" v-model="searchOptions.paymentMode" id="paymentMode">
                                                    <option v-for="(value, key, index) in paymentModes" v-text="value" :value="key" :key="index"></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="orderNumber" class="col-sm-3 control-label">初始提车顺序号:</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="orderNumber" v-model="searchOptions.orderNumber" placeholder="初始提车顺序号">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="province" class="col-sm-3 control-label">上牌省份:</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="product" v-model="searchOptions.province" placeholder="上牌省份">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="city" class="col-sm-3 control-label">上牌城市:</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="city" v-model="searchOptions.city" placeholder="上牌城市">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="" class="col-sm-3 control-label">订单创建时间:</label>
                                            <div class="col-sm-9">
                                                <div class="input-group">
                                                    <div class="input-group-addon">
                                                        <i class="fa fa-calendar"></i>
                                                    </div>
                                                    <Calendar ref="startTime" @handleDateChange="handleStartTimeChange"></Calendar>
                                                    <!-- <input type="text" class="form-control pull-right" id="start_registTime" v-model="searchOptions.startRegistTime"> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="" class="col-sm-3 control-label">至</label>
                                            <div class="col-sm-9">
                                                <div class="input-group">
                                                    <div class="input-group-addon">
                                                        <i class="fa fa-calendar"></i>
                                                    </div>
                                                    <Calendar ref="endTime" @handleDateChange="handleEndTimeChange"></Calendar>
                                                    <!-- <input type="text" class="form-control pull-right" id="end_registTime" v-model="searchOptions.endRegistTime"> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="customerType" class="col-sm-3 control-label">订单状态:</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" v-model="searchOptions.orderStatu">
                                                    <option v-for="(value, key, index) in orderStatus" v-text="value" :value="key" :key="index"></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="orderNo" class="col-sm-3 control-label">订单编号:</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="orderNo" v-model="searchOptions.orderNo" placeholder="订单编号">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="mobilePhone" class="col-sm-3 control-label">手机号码:</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="mobilePhone" v-model="searchOptions.mobilePhone" placeholder="手机号码">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="customerName" class="col-sm-3 control-label">客户姓名:</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="customerName" v-model="searchOptions.customerName" placeholder="客户姓名">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box-footer">
                                <div class="row">
                                    <div class="col-sm-6 col-sm-offset-3">
                                        <div class="col-sm-4 text-center">
                                            <button type="button" class="btn btn-primary" 
                                                @click="search">
                                                <i class="fa fa-fw fa-search"></i>搜索
                                            </button>
                                        </div>
                                        <div class="col-sm-4 text-center">
                                            <button type="button" class="btn btn-warning" 
                                                @click="resetSearch">
                                                <i class="fa fa-fw fa-refresh"></i>重置
                                            </button>
                                        </div>
                                        <div class="col-sm-4 text-center">
                                            <button type="button" class="btn btn-info" 
                                                @click="exportOrderToExcel"><i class="fa fa-fw fa-download"></i>导出
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="box-body" style="overflow: auto;">
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>订单编号</th>
                                        <th>姓名</th>
                                        <th>上牌省份</th>
                                        <th>上牌城市</th>
                                        <th>手机号</th>
                                        <th>商品名称</th>
                                        <th>订单创建时间</th>
                                        <th>订单支付方式</th>
                                        <th>初始提车顺序号</th>
                                        <th>订单状态</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(order, index) in orders" :key="index">
                                        <td v-text="order.orderNo"></td>
                                        <td v-text="order.userName"></td>
                                        <td v-text="order.provinceName"></td>
                                        <td v-text="order.cityName"></td>
                                        <td v-text="order.mobilePhone"></td>
                                        <td v-text="order.product.name"></td>
                                        <td>{{order.createTime | formatDate}}</td>
                                        <td v-text="paymentModes[order.paymentMode]"></td>
                                        <td v-text="order.orderNumber"></td>
                                        <td v-text="orderStatus[order.orderStatu]"></td>
                                        <td>
                                            <a href="javascript:;"
                                                @click="$router.push({path: '/order-detail', query: {name: order.rid}})">
                                                <i class="fa fa-fw fa-search"></i>查看
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="box-footer clearfix">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <p v-show="isNoResult" class="result_info">无搜索结果!</p>
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="dataTables_info">
                                            第{{paginate.page}}页&nbsp;共计{{paginate.totalPage}}页，&nbsp;{{paginate.total}}条记录
                                        </div>
                                    </div>
                                    <div class="col-sm-7">
                                        <Paginate v-show="orders.length" :paginate="paginate" :linkedPageCount="4" v-on:gotoPage="gotoPage" class="pages"></Paginate>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import { Customer, Order } from '@/module';
    export default {
        data() {
            return {
                isNoResult: false,
                paginate: {
                    id: 'paginate_for',
                    page: 1,
                    size: 10,
                    total: 0,
                    totalPage: 0
                },
                searchOptions: {
                    paymentMode: '-1',
                    orderNumber: '',
                    province: '',
                    city: '',
                    startTime: '',
                    endTime: '',
                    orderStatu: '-1',
                    orderNo: '',
                    customerName: ''
                },
                orders: [],
                paymentModes: {},
                orderStatus: {},
                products: [],
                citys: []
            }
        },
        methods: {
            search() {
                this.searchOrder();
            },
            getSearchOptions(page) {
                const self = this;
                this.paginate.page = (page || 1);
                const opts = Object.assign(this.searchOptions, {
                    page: self.paginate.page,
                    size: self.paginate.size
                });
                return opts;
            },
            searchOrder(page) {
                const opts = this.getSearchOptions(page);
                Order.searchOrder(opts)
                .then(res => {
                    this.paginate.totalPage = res.data.totalPage;
                    this.paginate.total = res.data.total;
                    this.orders = [];
                    res.data.dataList.forEach(item => {
                        this.orders.push(new Order(item));
                    })
                    this.isNoResult = this.orders.length ? false : true;
                }).catch(err => {
                    this.$ui.alert('warning', '查询订单失败!');
                    throw err;
                })
            },
            resetSearch() {
                this.searchOptions = {
                    paymentMode: '-1',
                    orderNumber: '',
                    product: '',
                    city: '',
                    startTime: '',
                    endTime: '',
                    orderStatu: '-1',
                    orderNo: ''
                };
                this.$refs['startTime'].$el.value = '';
                this.$refs['endTime'].$el.value = '';
                this.searchOrder();
            },
            exportOrderToExcel() {
                const opts = this.getSearchOptions();
                Order.exportOrderToExcel(opts)
                .then(res => {
                    this.$ui.alert('success', '导出客户订单完成!');
                }).catch(err => {
                    this.$ui.alert('warning', '导出客户订单失败!');
                })
            },
            gotoPage(n) {
                this.searchOrder(n);
            },
            handleStartTimeChange(timer) {
                this.searchOptions.startTime = timer;
                this.$refs['endTime'].setStartDate(new Date(timer));
            },
            handleEndTimeChange(timer) {
                this.searchOptions.endTime = timer;
            },
            getPaymentModes() {
                Order.getPaymentModes()
                .then(res => {
                    this.paymentModes = res.data;
                }).catch(err => {
                    this.$ui.alert('warning', '获取支付方式失败', '请刷新重试 !');
                    throw err;
                })
            },
            getOrderStatus() {
                Order.getOrderStatus()
                .then(res => {
                    this.orderStatus = res.data;
                }).catch(err => {
                    this.$ui.alert('warning', '获取订单状态失败', '请刷新重试 !');
                    throw err;
                })
            }
        },
        mounted() {
            this.getPaymentModes();
            this.getOrderStatus();
            this.searchOrder();
        }
    }
</script>
<style scoped>
    @media screen and (min-width: 992px) {
        .orderForm .col-md-6 {
            height: 50px;
        }
    }
    .btn {
        width: 100px;
        min-width: 80px;
        margin-bottom: 10px;
    }
    .result_info {
        font-size: 16px;
        color: #000;
        text-align: center;
    }
    .no-wrap {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    label {
        font-weight: 400;
    }
</style>



