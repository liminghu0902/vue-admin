<template>
    <ul class="treeview-menu">
        <li 
            :class="[{'treeview': menu.children && menu.children.length, 'active': menu.name === currentMenu}]" 
            v-for="(menu, i) in menuChildren" :key="i" 
            @click="menuClick(menu)"
            :ref="menu.name">
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
    import { StoreDate } from '@/util';
    import { buildBreadCrumbs } from '@/module';
    export default {
        data() {
            return {
                
            }
        },
        props: {
            menuChildren: null
        },
        computed: {
            currentMenu() {
                return StoreDate.getItem('currentMenu') || 'home';
            }
        },
        methods: {
            menuClick(menu) {
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
                $(this.$refs[menuName]).parents('li').siblings('li').removeClass('active');
                $(this.$refs[menuName]).siblings('li').each(function() {
                    if($(this).is('.menu-open')) {
                        $(this).removeClass('menu-open').find('.treeview-menu').slideUp();
                    }
                })
            },
            initCurrentMenu(menuName) {
                $(this.$refs[menuName])
                .parents('li.treeview')
                .addClass('menu-open') 
                .children('.treeview-menu')
                .slideDown();
            }
        },
        watch: {
            $route(to, from) {
                this.handleMenuLight(to.name);
                this.initCurrentMenu(to.name);
                buildBreadCrumbs(to.name);
            }
        },
        beforeCreate() {
            this.$options.components.sidebarMenuNode = () => import('./sidebar-menu-node');
        },
        mounted() {
            this.initCurrentMenu(this.currentMenu);
        }
    }
</script>

