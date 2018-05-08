<template>
  <transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" >
    <div :class="'alert alert-'+ type + ' alert-dismissible'" v-if="isShow">
      <button type="button" class="close" @click="hide" v-if="isCloseAble">×</button>
      <h4 v-if="title"><i :class="'icon fa ' + icon"></i>{{title}}</h4>
      {{content || '提醒正文'}}
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Alert',
  props: {
    pAlert: { type: Object, default: null },
  },
  data() {
    return {
      type: 'info', // 类型：danger, info, warning, success
      title: '请填写警告标题', // 组件标题
      content: '请填写警告内容', // 警告内容
      isShow: false, // 是否显示, fasle | true
      isCloseAble: true, // 是否可以关闭, fasle | true
      timer: null,
    };
  },
  computed: {
    icon() {
      if (this.type === 'danger') {
        return 'fa-ban';
      }
      if (this.type === 'success') {
        return 'fa-check';
      }
      if (this.type === 'warning') {
        return 'fa-warning';
      }
      return 'fa-info';
    },
  },
  methods: {
    alert(type, title, content, isCloseAble, time) {
      this.type = type || this.type;
      this.title = title;
      this.content = content || this.content;
      this.isCloseAble = !!isCloseAble;
      this.isShow = true;
      if (time) {
        this.timer = setTimeout(() => {
          this.isShow = false;
          clearTimeout(this.timer);
        }, 1000 * time);
      }
    },
    hide() {
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
</style>
