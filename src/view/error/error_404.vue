<template>
  <div class="content-wrapper-demo">
    <section class="content">
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">提醒</h3>
        </div>
        <div class="box-body">
          页面不存在！
        </div>
      </div>
    </section>
  </div>
</template>
<script>
    export default {
        mounted() {
            $('body').resize();
        }
    }
</script>
