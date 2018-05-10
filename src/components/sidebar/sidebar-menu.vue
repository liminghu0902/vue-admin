<template>
    <ul class="sidebar-menu" data-widget="tree">
        <li 
            :class="[{'treeview': menu.children && menu.children.length}]" 
            v-for="(menu, index) in sidebarMenus" :key="index" 
            @click="menuClick(menu, $event)">
            <a href="javascript:;">
                <i :class="['fa', 'fa-'+menu.meta.icon]"></i> 
                <span>{{menu.meta.name}}</span>
                <span class="pull-right-container" v-if="menu.children && menu.children.length">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <sidebar-menu-node :menuChildren="menu.children" v-show="menu.children && menu.children.length"></sidebar-menu-node>
        </li>
    </ul>
</template>
<script>
    import { buildSidebarMenus } from '@/module';
    import sidebarMenuNode from './sidebar-menu-node';
    export default {
        components: {
            sidebarMenuNode,
        },
        data() {
            return {
                breadCrumbs: []
            }
        },
        computed: {
            rid() {
                return JSON.parse(sessionStorage.getItem('user')).rid;
            },
            sidebarMenus() {
                return buildSidebarMenus(this.rid);
            }
        },
        methods: {
            menuClick(menu, $event) {
                if(!menu.children || (menu.children && !menu.children.length)) {
                    this.$router.push({name: menu.name});
                }
            }
        },
        mounted() {
            $('.sidebar-menu').tree();
        }
    }

</script>

