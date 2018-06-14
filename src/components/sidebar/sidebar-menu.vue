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
    import { StoreDate } from '@/util';
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
                return StoreDate.getItem('user').rid;
            },
            sidebarMenus() {
                return buildSidebarMenus(this.rid);
            },
            currentMenu() {
                return StoreDate.getItem('currentMenu') || 'home';
            }
        },
        methods: {
            menuClick(menu, $event) {
                if(!menu.children || (menu.children && !menu.children.length)) {
                    //保存当前高亮的菜单
                    StoreDate.setItem('currentMenu', menu.name);
                    //切换菜单高亮项
                    this.handleMenuLight(menu.name);
                    //构建面包屑导航
                    buildBreadCrumbs(menu.name);
                    this.$router.push({name: menu.name});
                }
            },
            handleMenuLight(menuName) {
                $(this.$refs[menuName]).addClass('active').siblings('li').removeClass('active');
                $(this.$refs[menuName]).siblings('li').each(function() {
                    $(this).removeClass('active');
                    if($(this).is('.menu-open')) {
                        $(this).find('li').removeClass('active');
                        $(this).removeClass('menu-open').find('.treeview-menu').slideUp();
                    }
                })
            }
        },
        watch: {
            $route(to, from) {
                this.$nextTick(() => {
                    this.handleMenuLight(to.name);
                    buildBreadCrumbs(to.name);
                })
            }
        },
        mounted() {
            $('.sidebar-menu').tree();
        }
    }

</script>

