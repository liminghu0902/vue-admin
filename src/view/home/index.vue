<template>
  <div><svg-icon :svgClass="iconClass" :iconClass="iconClass"></svg-icon>home</div>
  
</template>
<script>
    export default {
        data () {
          return {
            iconClass: '404'
          }
        },
        mounted () {
          console.log(this.$i18n.locale)
        }
    }
</script>
