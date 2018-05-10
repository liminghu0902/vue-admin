<template>
    <div class="progress-wrapper">
        <div :class="['progress', 'progress-'+size, {'active': active}]">
            <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" :aria-valuenow="parseInt(value)" aria-valuemin="0" aria-valuemax="100" :style="'width:'+value ">
                <span class="sr-only">{{value}} Complete</span>
            </div>
        </div>
    </div>
</template>
<script>
    /**
     * value: 进度条当前值
     * active: 进度条是否带动画
     * striped: 进度条是否带条纹,
     * size: 进度条大小(sm, xs), 为空时，显示最大的进度条
     */
    export default {
        props: {
            value: {default: '10%'},
            active: {default: true},
            striped: {default: true},
            size: {default: 'sm'}
        }
    }
</script>

