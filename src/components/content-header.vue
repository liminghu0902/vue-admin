<template>
    <section class="content-header">
        <h1>
            {{title}}
            <small></small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <template v-for="(item, index) in breadCrumbs">
                <li :key="index" :class="{'active': index === breadCrumbs.length - 1}">
                    <a v-text="item.meta.name"></a>
                </li>
                <template v-if="item.children && item.children.length" v-for="(itemChild) in item.children">
                    <li :key="itemChild.id">
                        <a v-text="itemChild.meta.name"></a>
                    </li>
                </template>
            </template>
        </ol>
    </section>
</template>
<script>
    import { StoreDate } from '@/util';
    export default {
        props: {
            title: {default: '页面标题'}
        },
        computed: {
            breadCrumbs() {
                const breadCrumbs = StoreDate.getItem('breadCrumbs');
                return breadCrumbs ? breadCrumbs : [];
            }
        }
    }
</script>
