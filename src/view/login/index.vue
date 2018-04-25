<template>
    <div class="login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="javascript:;"><img src="../../assets/images/logo.png" alt=""></a>
            </div>
            <div class="login-box-body">
                <p class="login-box-msg"></p>
                <vue-form :state="formstate" @submit.prevent="onSubmit">
                    <validate tag="label">
                        <p>登陆账号:</p>
                        <div class="form-group">
                            <input type="text" class="form-control" required name="username" v-model="user.username" placeholder="请输入平台账号">
                            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <field-messages name="username">
                            <div class="error_msg" slot="required">用户名不能为空!</div>
                        </field-messages>
                    </validate>
                    <validate tag="label">
                        <p>登陆密码:</p>
                        <div class="form-group">
                            <input type="password" class="form-control" required name="password" v-model="user.password" placeholder="请输入平台密码">
                            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <field-messages name="password">
                            <div class="error_msg" slot="required">密码不能为空!</div>
                        </field-messages>
                    </validate>
                    <div class="row">
                        <div class="col-xs-12">
                            <button type="submit" class="btn btn-primary btn-block btn-flat">登陆</button>
                        </div>
                        <div class="col-xs-12" style="margin-top: 10px">
                            如果忘记密码或者平台停用，请联系管理员。
                            请发送邮件中注明平台账号，平台责任人，以及联系人电话。管理员邮件： XX@wm.com
                        </div>
                    </div>
                </vue-form>
            </div>
        </div>
    </div>
</template>
<script>
    import { User, buildRouter, buildSidebarMenus } from '@/module';
    export default {
        data() {
            return {
                formstate: {},
                user: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit() {
                if(this.formstate.$invalid) {
                    return;
                };
                User.login(this.user)
                .then(res => {
                    const rid = res.data.roles[0].rid;
                    //保存用户信息
                    sessionStorage.setItem('rid', rid);
                    sessionStorage.setItem('roles', res.data.roles);
                    sessionStorage.setItem('user', res.data.user);
                    //构建路由
                    buildRouter(rid);
                    //获取菜单列表
                    buildSidebarMenus(rid);
                    //跳转到首页
                    this.$router.push('/home');
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    @import url('../../assets/style/custom');
    .login-page {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #000;
    }
    .form-group {
        position: relative;
        margin-bottom: 8px;
    }
    label {
        display: block;
        font-weight: 400;
    }
    button[type="submit"] {
        margin-top: 20px;
    }
</style>

