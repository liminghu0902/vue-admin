<template>
    <div class="widget-box-simple-wrapper">
        <div class="box" :class="['box-'+widgetType]" :id="widgetId">
            <div class="box-header with-border">
                <h3 class="box-title" v-text="title"></h3>
                <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                </div>
            </div>
            <div class="box-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            id: {default: parseInt(Math.random()*1000)},
            title: {default: ''},
            widgetType: {default: 'info'}
        },
        computed: {
            widgetId() {
                return `widget-box-simple-${this.id}`;
            }
        },
        mounted() {
            $(`#${this.widgetId}`).boxWidget();
        }
    }
</script>

