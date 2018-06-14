<template>
    <div class="customer-detail">
        <content-header :title="'客户详情'"></content-header>
        <section class="content">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">客户详情</h3>
                </div>
                <div class="box-body">

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
            getCustomerDetail() {
                Customer.getCustomerDetailByRid(this.rid)
                .then(res => {
                    console.log(res);
                })
            }
        },
        mounted() {
            this.getCustomerDetail();
        }
    }
</script>

