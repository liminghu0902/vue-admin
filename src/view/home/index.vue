<template>
    <div class="home-wrapper">
        <content-header></content-header>
        <Alert ref="alert"></Alert>
        <button class="btn" @click="openAlert">open-alert</button>
        <button class="btn" @click="openModal">open-modal</button>
        <file-select @onSelectFile="onSelectFile"></file-select>
        <Calendar></Calendar>
        <Progress :value="progressValue"></Progress>
        <Modal ref="modal">
            <p>One fine body&hellip;</p>
        </Modal>
        <widget-box-simple>
            <div>widget-box-simple</div>
        </widget-box-simple>
        <Progress></Progress>
        <Test></Test>
    </div>
</template>
<script>
    import Test from '@/components/test';
    import fileSelect from '@/components/file-select';
    import Calendar from '@/components/calendar';
    import widgetBoxSimple from '@/components/widget/widget-box-simple';
    import contentHeader from '@/components/content-header';
    import { XLSX } from '@/module';
    export default {
        components: {
            fileSelect,
            Calendar,
            widgetBoxSimple,
            contentHeader,
            Test
        },
        data () {
          return {
              value: 10,
              progressValue: '10%'
          }
        },
        methods: {
            openAlert() {
              this.$refs.alert.alert('info', 'hh', 'dd', true);
            },
            openModal() {
                this.$refs.modal.openModal();
            },
            onSelectFile(files) {
                XLSX.importExcel(files, data => {
                    console.log(data);
                });
            }
        },
        mounted() {
           
        }
    }
</script>
