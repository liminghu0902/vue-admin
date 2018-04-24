<template>
    <div class="login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="javascript:;"><b>Admin</b></a>
            </div>
            <div class="login-box-body">
                <p class="login-box-msg">Sign in to start your session</p>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="请输入平台账号">
                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="请输入平台密码">
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .login-page {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #000;
    }
</style>

