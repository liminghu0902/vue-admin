<template>
    <svg :class="['svg-icon', svgName]" aria-hidden="true">
        <use :xlink:href="iconHref"></use>
    </svg>
</template>
<script>
    export default {
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
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>


