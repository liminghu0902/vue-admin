<template>
    <div class="loading-box">
        <SvgIcon :iconName="iconName" :svgClass="iconName"></SvgIcon>
    </div>
</template>
<script>
    export default {
        name: 'Loading',
        data() {
            return {
                iconName: 'loading'
            }
        }
    }
</script>
<style scoped>
    .svg-icon-loading {
        font-size: 50px;
        animation: rotate 1s linear infinite;
    }
    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }
</style>