<template>
    <transition name="fade" 
        enter-active-class="animated fadeIn" 
        leave-active-class="animated fadeOut">
        <div class="dialog-wrapper" v-show="showDialog">
            <div class="dialog-mask" v-show="dialogCfg.showDialogMask"></div>
            <div class="dialog-container row">
                <div class="dialog-container-col col-md-6 col-md-offset-3 col-xs-8 col-xs-offset-2">
                    <transition name="slideIn" 
                        enter-active-class="animated slideInDown"
                        leave-active-class="animated slideOutUp">
                        <div class="dialog-content" v-show="showDialog">
                            <div class="dialog-title">
                                <span class="dialog-title-text" v-text="dialogCfg.title.text"></span>
                                <span class="dialog-title-close" @click="closeDialog"><i class="fa fa-close"></i></span>
                            </div>
                            <div class="dialog-body">
                                <slot></slot>
                            </div>
                            <div class="dialog-footer">
                                <button type="button" @click="handleCancel" class="btn btn-default">取消</button>
                                <button type="button" @click="handleSure" class="btn btn-info">确定</button>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        props: {
            cfg: Object
        },
        data() {
            return {
                showDialog: false
            }
        },
        computed: {
            dialogCfg() {
                return Object.assign({
                    showDialogMask: true,
                    title: {
                        text: '编辑'
                    }
                }, this.cfg)
            }
        },
        methods: {
            handleCancel() {
                this.showDialog = false;
                this.$emit('handleCancel');
            },
            handleSure() {
                this.$emit('handleSure');
            },
            closeDialog() {
                this.showDialog = false;
                this.$emit('closeDialog');
            },
            openDialog() {
                this.showDialog = true;
            }
        }
    }
</script>
<style lang='less' scoped>
    .dialog-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        .dialog-mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
            z-index: 9999;
        }
        .dialog-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            z-index: 10000;
            .dialog-content {
                position: absolute;
                top: 0;
                width: 100%;
                margin-top: 10%;
                background-color: #fff;
                border-radius: 3px;
                .dialog-title {
                    padding: 20px 20px 10px;
                    line-height: 24px;
                    font-size: 18px;
                    color: #303133;
                    .dialog-title-close {
                        float: right;
                        cursor: pointer;
                    }
                }
                .dialog-body {
                    padding: 30px 20px;
                    color: #606266;
                    line-height: 24px;
                    font-size: 14px;
                }
                .dialog-footer {
                    padding: 10px 20px 20px;
                    text-align: right;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>

