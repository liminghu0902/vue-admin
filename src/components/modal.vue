<template>
    <div class="modal-wrapper">
        <div class="modal fade" :class="['modal-'+modalType]" :id="'modal-'+modalType">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                    ref='closeModalBtn'>
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" v-text="title"></h4>
              </div>
              <div class="modal-body">
                  <slot></slot>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal" 
                    v-text="cancelBtnText"
                    @click="handleCancel">
                </button>
                <button type="button" class="btn btn-primary" 
                    v-text="sureBtnText"
                    @click="handleSure">
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            modalType: {default: 'info'},
            title: {default: '标题'},
            cancelBtnText: {default: '取消'},
            sureBtnText: {default: '确认'}
        },
        methods: {
            closeModal() {
                this.$refs['closeModalBtn'].click();
            },
            openModal() {
                $('.modal-wrapper .modal').modal();
            },
            handleSure() {
                this.$emit('handelSure');
            },
            handleCancel() {
                this.$emit('handelCancel')
            }
        },
        mounted() {
            $('.modal-wrapper .modal').modal({show: false});
        }
    }
</script>
<style>
    .in {
        display: block;
        opacity: 1;
    }
</style>


