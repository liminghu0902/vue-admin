<template>
  <div><svg-icon :iconName="iconName"></svg-icon>home</div>
  
</template>
<script>
    export default {
        data () {
          return {
            iconName: '404'
          }
        },
        mounted () {
          console.log(this.$i18n.locale)
        }
    }
</script>
