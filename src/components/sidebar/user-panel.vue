<template>
    <div class="user-panel">
        <div class="pull-left image">
            <img src="../../assets/images/user.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
            <p>{{user.username}}</p>
            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            user() {
                const user = JSON.parse(sessionStorage.user);
                return user ? user : '';
            }
        }
    }
</script>

