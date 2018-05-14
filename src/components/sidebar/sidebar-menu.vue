<template>
    <ul class="sidebar-menu" data-widget="tree">
        <li 
            :class="[{'treeview': menu.children && menu.children.length, 'active': menu.name === currentMenu}]" 
            v-for="(menu, index) in sidebarMenus" :key="index" 
            @click="menuClick(menu, $event)"
            :ref="menu.name">
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
    import { Store } from '@/util';
    import { buildSidebarMenus, buildBreadCrumbs } from '@/module';
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
            },
            currentMenu() {
                return Store.getItem('currentMenu') || 'home';
            }
        },
        methods: {
            menuClick(menu, $event) {
                if(!menu.children || (menu.children && !menu.children.length)) {
                    //保存当前高亮的菜单
                    Store.setItem('currentMenu', menu.name);
                    //切换菜单高亮项
                    $(this.$refs[menu.name]).addClass('active').siblings('li').removeClass('active');
                    //构建面包屑导航
                    buildBreadCrumbs(menu.name);
                    this.$router.push({name: menu.name});
                }
            }
        },
        mounted() {
            $('.sidebar-menu').tree();
        }
    }

</script>

