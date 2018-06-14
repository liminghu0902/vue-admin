<template>
    <div id="layout" class="wrapper">
        <head-nav></head-nav>
        <sidebar></sidebar>
        <div class="content-wrapper">
            <router-view/>
            <!-- <foot></foot> -->
        </div>
    </div>
</template>
<script>
    import { StoraData } from '@/util';
    import headNav from '@/components/header';
    import sidebar from '@/components/sidebar';
    import foot from '@/components/footer';
    export default {
        components: {
            headNav,
            sidebar,
            foot
        },
        mounted() {
            $('body').resize();
        }
    }
</script>
<style lang='less'>
    .animated {
        animation-duration: .8s;
    }
    table th, table tr {
        font-size: 12px;
        white-space: nowrap;
    }

</style>
