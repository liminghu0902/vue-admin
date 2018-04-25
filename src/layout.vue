<template>
    <div id="layout" class="skin-blue layout-top-nav">
        <head-nav></head-nav>
        <sidebar></sidebar>
        <router-view/>
    </div>
</template>
<script>
    import headNav from 'components/header';
    import sidebar from 'components/sidebar';
    export default {
        components: {
            headNav,
            sidebar
        }
    }
</script>