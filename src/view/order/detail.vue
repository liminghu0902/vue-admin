<template>
    <div class="customer-detail">
        <content-header :title="'订单详情'"></content-header>
        <section class="content">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">订单详情</h3>
                </div>
                <div class="box-body">

                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import { Order } from '@/module';
    export default {
        data() {
            return {
                user: {},
                userOrder: {}
            }
        },
        computed: {
            rid() {
                return this.$route.query.name;
            }
        },
        methods: {
            getOrderDetail() {
                Order.getOrderDetailByRid(this.rid)
                .then(res => {
                    console.log(res);
                })
            }
        },
        mounted() {
            this.getOrderDetail();
        }
    }
</script>

