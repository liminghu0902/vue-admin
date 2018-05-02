<template>
    <ul class="sidebar-menu" data-widget="tree">
        <li 
            :class="['menu-item',{'treeview': menu.children && menu.children.length}]" 
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
                this.$router.push({name: menu.name})
            }
        },
        mounted() {
            $('.menu-item').on('click', function() {
                $(this).addClass('active menu-open').siblings('li').removeClass('active menu-open');
            })
            // $('.treeview').on('click', function() {
            //     $(this).addClass('menu-open').siblings('.treeview').removeClass('menu-open');
            // })
        }
    }

    
</script>

