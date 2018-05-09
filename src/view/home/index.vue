<template>
    <div>
      home
      <Dialog ref="dialog"></Dialog>
      <Alert ref="alert"></Alert>
      <button class="btn" @click="openDialog">open-dialog</button>
      <button class="btn" @click="openAlert">open-alert</button>
      <file-select></file-select>
    </div>
</template>
<script>
    import Dialog from '@/components/dialog';
    import Alert from '@/components/alert';
    import fileSelect from '@/components/file-select';
    import XLSX from 'xlsx';
    export default {
        components: {
            Dialog,
            Alert,
            fileSelect
        },
        data () {
          return {
              obj: {
                cols: [{ name: "A", key: 0 }, { name: "B", key: 1 }, { name: "C", key: 2 }],
                data: [
                  ["id", "name", "value"],
                  [1, "sheetjs", 7262],
                  [2, "js-xlsx", 6969]
                ]
              }
          }
        },
        methods: {
            openDialog() {
              this.$refs.dialog.openDialog();
            },
            openAlert() {
              this.$refs.alert.alert('', 'hh', 'dd', true);
            }
        },
        mounted () {
            var worksheet = XLSX.utils.aoa_to_sheet(this.obj.data);
            var new_workbook = XLSX.utils.book_new();
            //  XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetJS");
            new_workbook.SheetNames.push('sheet1');
            new_workbook.Sheets['sheet1'] = worksheet;
            var wopts = { bookType:'xlsx', bookSST:false, type:'array' };
            var wbout = XLSX.write(new_workbook,wopts);
            var blob = new Blob([wbout],{type:"application/octet-stream"});
            console.log(blob)
            var url = URL.createObjectURL(blob);
            console.log(url)
            var a = document.createElement('a');
            var ev = document.createEvent('MouseEvents');
            a.href = url;
            a.download = 'test.xlsx';
            ev.initEvent('click', true, true);
            // a.dispatchEvent(ev);
           
        }
    }
</script>
