<template>
    <aside class="main-sidebar">
        <section class="sidebar">
            <user-panel></user-panel>
            <sidebar-menu></sidebar-menu>
        </section>
    </aside>
</template>
<script>
    import userPanel from './user-panel';
    import sidebarMenu from './sidebar-menu';
    export default {
        components: {
            userPanel,
            sidebarMenu
        }
    }
</script>

