<template>
    <input class="form-control pull-right" type="text" :id="calendarId">
</template>
<script>
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();

    export default {
        name: 'Calendar',
        props: {
            id: {default: ''},
            minDate: {default(){return new Date()}},
            maxDate: {default: null},
            format: {default: 'yyyy/mm/dd'},
            range: {default: false}
        },
        computed: {
            calendarId() {
                const id = this.id ? this.id : parseInt(Math.random()*10000);
                return 'calender-component-' + id;
            }
        },
        data() {
            return {
               date: null
            }
        },
        methods: {
            initDate() {
                const self = this;
                if(this.range) {
                    this.date = $(`#${this.calendarId}`).daterangepicker({
                        autoApply: true,
                        locale: {
                            format: self.format.toUpperCase(),
                            applyLabel: '确认',
                            cancelLabel: '取消',
                            daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
                            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                        }
                    })
                } else {
                    this.date = $(`#${this.calendarId}`).datepicker({
                        format: self.format,
                        autoclose: true,
                        language: 'zh-CN'
                    })
                }
            },
            handleDateChange() {
                const self = this;
                this.date.on('change', function() {
                    self.$emit('handleDateChange', (new Date(self.date.val()).getTime()));
                })
            },
            setDate(d) {
                if(!this.range) {
                    this.date.datepicker('setDate', d);
                }
            },
            setStartDate(d) {
                if(!this.range) {
                    this.date.datepicker('setStartDate', d);
                }
            }
        },
        mounted() {
            this.initDate();
            this.handleDateChange();
        }
    }
</script>

