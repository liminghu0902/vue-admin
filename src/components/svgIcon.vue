<template>
    <svg :class="['svg-icon', svgName]" aria-hidden="true">
        <use :xlink:href="iconHref"></use>
    </svg>
</template>
<script>
    export default {
        name: 'svgIcon',
        props: {
            iconName: {
                type: String
            },
            svgClass: {
                type: String
            }
        },
        computed: {
            iconHref() {
                return `#icon-${this.iconName}`;
            },
            svgName() {
                return this.svgClass ? `svg-icon-${this.svgClass}` : '';
            }
        }
    }
</script>
<style>
    .svg-icon {
        font-size: 14px;
        width: 1em;
        height: 1em;
        margin-right: 5px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>


