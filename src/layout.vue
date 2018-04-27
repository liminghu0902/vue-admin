<template>
    <div id="layout" class="wrapper">
        <head-nav></head-nav>
        <sidebar></sidebar>
        <div class="content-wrapper">
            <router-view/>
        </div>
        
    </div>
</template>
<script>
    import headNav from '@/components/header';
    import sidebar from '@/components/sidebar';
    export default {
        components: {
            headNav,
            sidebar
        }
    }
</script>