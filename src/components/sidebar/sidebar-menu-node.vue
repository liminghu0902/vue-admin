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
    import { Store } from '@/util';
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
                return Store.getItem('currentMenu') || 'home';
            }
        },
        methods: {
            menuClick(menu) {
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
        beforeCreate() {
            this.$options.components.sidebarMenuNode = () => import('./sidebar-menu-node');
        },
        mounted() {
            
        }
    }
</script>

