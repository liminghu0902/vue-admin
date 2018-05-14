<template>
    <div class="modal-wrapper">
        <div class="modal fade" :class="['modal-'+modalType]" :id="id">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                    ref='closeModalBtn'>
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" v-text="title"></h4>
              </div>
              <div class="modal-body">
                  {{message}}
                  <slot></slot>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal" 
                    v-text="cancelBtnText"
                    @click="cancel">
                </button>
                <button type="button" class="btn btn-primary" 
                    v-text="sureBtnText"
                    @click="sure">
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
            cancelBtnText: {default: '取消'},
            sureBtnText: {default: '确认'}
        },
        data() {
            return {
                title: '',
                message: '',
                modalType: 'info'
            }
        },
        computed: {
            id() {
                return `modal-${this.modalType}-${parseInt(Math.random()*1000)}`;
            }
        },
        methods: {
            closeModal() {
                this.$refs['closeModalBtn'].click();
            },
            openModal(cfg) {
                cfg = cfg || {};
                this.title = cfg.title || '';
                this.message = cfg.message || '';
                this.modalType = cfg.type || 'info';
                $(`#${this.id}`).modal();
            },
            sure() {
                this.$emit('sure');
            },
            cancel() {
                this.$emit('cancel')
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


