<template>
    <header class="main-header">
    <!-- Logo -->
    <a href="javascript:;" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          
          <!-- Notifications: style can be found in dropdown.less -->
          
          <!-- Tasks: style can be found in dropdown.less -->
          <tasks></tasks>
          <!-- User Account: style can be found in dropdown.less -->
          <user-menu></user-menu>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
    import userMenu from './user-menu';
    import tasks from './tasks';
    export default {
        components: {
            userMenu,
            tasks
        },
        data() {
            return {
              
            }
        }
    }
</script>

