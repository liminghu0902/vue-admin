<template>
    <div class="customer-wrapper">
        <content-header :title="'客户管理'"></content-header>
        <section class="content animated fadeIn">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <h3 class="box-title">客户管理</h3>
                        </div>
                        <form class="form-horizontal customerForm" @reset.prevent="reset">
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="Storage" class="col-sm-3 control-label">经销商门店:</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="Storage" v-model="searchOptions.dealerShop" placeholder="经销商门店">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="wm_id" class="col-sm-3 control-label">WM-ID:</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="wm_id" v-model="searchOptions.wmId" placeholder="WM-ID">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="" class="col-sm-3 control-label">注册时间:</label>
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
                                            <label for="customerType" class="col-sm-3 control-label">客户类型:</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" v-model="searchOptions.customerType">
                                                    <option v-for="(value, key, index) in customerTypes" v-text="value" :value="key" :key="index"></option>
                                                </select>
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
                                                @click="exportCustomerToExcel"><i class="fa fa-fw fa-download"></i>导出
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
                                        <th>姓名</th>
                                        <th>WM-ID</th>
                                        <th>客户类型</th>
                                        <th>手机号</th>
                                        <th>注册时间</th>
                                        <th>经销商门店</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(customer, index) in customers" :key="index">
                                        <td v-text="customer.name"></td>
                                        <td v-text="customer.wmId"></td>
                                        <td v-text="customerTypes[customer.type]"></td>
                                        <td v-text="customer.mobilePhone"></td>
                                        <td>{{customer.registTime | formatDate}}</td>
                                        <td v-text="customer.dealerShop"></td>
                                        <td>
                                            <a href="javascript:;"
                                                @click="$router.push({path: '/customer-detail', query: {name: customer.rid}})">
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
                                        <Paginate v-show="customers.length" :paginate="paginate" :linkedPageCount="4" v-on:gotoPage="gotoPage" class="pages"></Paginate>
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
    import { Customer } from '@/module';
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
                    dealerShop: '',
                    wmId: '',
                    startRegistTime: '',
                    endRegistTime: '',
                    customerType: '-1',
                    mobilePhone: '',
                    customerName: ''
                },
                customers: [],
                customerTypes: {}
            }
        },
        methods: {
            search() {
                this.searchCustomer();
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
            searchCustomer(page) {
                const opts = this.getSearchOptions(page);
                Customer.searchCustomer(opts)
                .then(res => {
                    this.paginate.totalPage = res.data.totalPage;
                    this.paginate.total = res.data.total;
                    this.customers = [];
                    res.data.dataList.forEach(item => {
                        this.customers.push(new Customer(item));
                    })
                    this.isNoResult = this.customers.length ? false : true;
                }).catch(err => {
                    this.$ui.alert('warning', '查询客户信息失败!');
                    throw err;
                })
            },
            resetSearch() {
                this.searchOptions = {
                    dealerShop: '',
                    wmId: '',
                    startRegistTime: '',
                    endRegistTime: '',
                    customerType: '-1',
                    mobilePhone: '',
                    customerName: ''
                };
                this.$refs['startTime'].$el.value = '';
                this.$refs['endTime'].$el.value = '';
                this.searchCustomer();
            },
            exportCustomerToExcel() {
                const opts = this.getSearchOptions();
                Customer.exportCustomerToExcel(opts)
                .then(res => {
                    this.$ui.alert('success', '导出客户信息完成!');
                }).catch(err => {
                    this.$ui.alert('warning', '导出客户信息失败!');
                    throw err;
                })
            },
            gotoPage(n) {
                this.searchCustomer(n);
            },
            getCustomerTypes() {
                Customer.getCustomerTypes()
                .then(res => {
                    this.customerTypes = res.data;
                }).catch(err => {
                    this.$ui.alert('warning', '获取客户类型失败', '请刷新重试 !');
                    throw err;
                })
            },
            handleStartTimeChange(timer) {
                this.searchOptions.startRegistTime = timer;
                this.$refs['endTime'].setStartDate(new Date(timer));
            },
            handleEndTimeChange(timer) {
                this.searchOptions.endRegistTime = timer;
            }
        },
        mounted() {
            this.getCustomerTypes();
            this.searchCustomer();
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



