<template>
    <ul class="sidebar-menu" data-widget="tree">
        <li class="treeview" v-for="(menu, index) in sidebarMenus" :key="index" @click="menuClick(menu, $event)">
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
    import { buildSidebarMenus } from '@/module';
    import sidebarMenuNode from './sidebar-menu-node';
    export default {
        components: {
            sidebarMenuNode
        },
        computed: {
            rid() {
                return sessionStorage.getItem('rid');
            },
            sidebarMenus() {
                return buildSidebarMenus(this.rid);
            }
        },
        methods: {
            menuClick(menu, $event) {
               
            }
        },
        mounted() {
            
        }
    }
</script>

