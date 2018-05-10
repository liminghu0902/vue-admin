<template>
    <div class="home-wrapper">
        <content-header></content-header>
        <Dialog ref="dialog"></Dialog>
        <Alert ref="alert"></Alert>
        <button class="btn" @click="openDialog">open-dialog</button>
        <button class="btn" @click="openAlert">open-alert</button>
        <button class="btn" @click="openModal">open-modal</button>
        <file-select></file-select>
        <Calendar></Calendar>
        <Progress :value="progressValue"></Progress>
        <Modal ref="modal">
            <p>One fine body&hellip;</p>
        </Modal>
        <widget-box-simple>
            <div>widget-box-simple</div>
        </widget-box-simple>
    </div>
</template>
<script>
    import Dialog from '@/components/dialog';
    import Alert from '@/components/alert';
    import fileSelect from '@/components/file-select';
    import Calendar from '@/components/calendar';
    import Progress from '@/components/progress';
    import Modal from '@/components/modal';
    import widgetBoxSimple from '@/components/widget/widget-box-simple';
    import contentHeader from '@/components/content-header';
    import XLSX from 'xlsx';
    export default {
        components: {
            Dialog,
            Alert,
            fileSelect,
            Calendar,
            Progress,
            Modal,
            widgetBoxSimple,
            contentHeader
        },
        data () {
          return {
              value: 10,
              progressValue: '10%'
          }
        },
        methods: {
            openDialog() {
              this.$refs.dialog.openDialog();
            },
            openAlert() {
              this.$refs.alert.alert('info', 'hh', 'dd', true);
            },
            openModal() {
                this.$refs.modal.openModal();
            }
        },
        mounted () {
                
        }
    }
</script>
