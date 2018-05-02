<template>
    <ul class="treeview-menu">
        <li v-for="(menu, i) in menuChildren" :key="i" @click="menuClick(menu)">
            <a href="javascript:void(0)">
                <i class="fa fa-share"></i> <span>{{menu.meta.name}}</span>
                <span class="pull-right-container" v-if="menu.children && menu.children.length">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <sidebar-menu-node :menuChildren="menu.children" v-show="menu.children && menu.children.length"></sidebar-menu-node>
        </li>
    </ul>
</template>
<script>
    export default {
        props: {
            menuChildren: null
        },
        methods: {
            menuClick(menu) {
                this.$router.push({name: menu.name});
            }
        },
        beforeCreate() {
            this.$options.components.sidebarMenuNode = () => import('./sidebar-menu-node');
        },
        mounted() {
            
        }
    }
</script>

