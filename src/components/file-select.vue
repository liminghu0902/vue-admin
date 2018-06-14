<template>
    <div class="file-select-wrapper">
        <div class="select-file-box">
            <div 
                :class="['drag-file-box', {'file-dragover': isDragOver}]" 
                @drop="ondrop($event)"
                @dragover="ondragover($event)"
                @dragleave="ondragleave($event)"
                v-text="dragBoxCfg.value">
            </div>
            <input type="file" 
                v-show="false" 
                :multiple="fileSelectCfg.isMultiple" 
                @change="doSelectFile($event)"
                ref="input-file">
            <div class="input-file-box">
                <div class="input-group input-group-sm" @click="selectFile">
                    <input type="text" class="form-control" disabled 
                        :placeholder="fileInputCfg.placeholder"
                        :value="fileInputCfg.value">
                    <span class="input-group-btn">
                        <button type="button" class="btn btn-info btn-flat">选择文件</button>
                    </span>
                </div>
                <div class="selected-files-box">
                    <p 
                        v-if="fileSelectCfg.isMultiple && files.length > 1"
                        v-for="(file, index) in files" :key="index" 
                        v-text="(index+1) + '. ' + file.name">
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'file-select',
        props: {
            fileSelectCfg: {
                type: Object,
                default() {
                    return {isMultiple: true}
                }
            }
        },
        data() {
            return {
                isDragOver: false,
                files: [],
                fileInputCfg: {
                    placeholder: `单机此处选择${this.fileSelectCfg.isMultiple ? '' : '单个'}文件~~~`,
                    value: ''
                },
                dragBoxCfg: {
                    value: `拖动${this.fileSelectCfg.isMultiple ? '' : '单个'}文件到这里~~~`
                }
            }
        },
        methods: {
            selectFile() {
                this.$refs['input-file'].value = '';
                this.$refs['input-file'].click();
            },
            doSelectFile(event) {
                const files = event.target.files;
                this.handleSelectFiles(files);
            },
            ondrop(event) {
                event.preventDefault();
                this.isDragOver = false;
                const files = event.dataTransfer.files;
                this.handleSelectFiles(files);
            },
            ondragover(event) {
                event.preventDefault();
                this.isDragOver = true;
            },
            ondragleave(event) {
                event.preventDefault();
                this.isDragOver = false;
            },
            resetFileSelect() {
              this.fileInputCfg.value = '';
              this.dragBoxCfg.value = `拖动${this.fileSelectCfg.isMultiple ? '' : '单个'}文件到这里~~~`;  
              this.$refs['input-file'].value = '';
            },
            handleSelectFiles(files) {
                this.files = [];
                const fileReader = new FileReader();
                Array.prototype.forEach.call(files ,file => {
                    this.files.push(file);
                });
                if(!this.fileSelectCfg.isMultiple && this.files.length > 1) {
                    this.fileInputCfg.value = '您只能选择单个文件，请重新选择~~~';
                    this.dragBoxCfg.value = this.fileInputCfg.value;
                    return;
                }
                if(this.files.length === 1) {
                    this.fileInputCfg.value = `您选择了文件: ${this.files[0].name}`;
                    this.dragBoxCfg.value = `您已经选择了【${this.files.length}】个文件`
                } else {
                    this.fileInputCfg.value = `您选择了${this.files.length}个文件, 如下`;
                    this.dragBoxCfg.value = this.fileInputCfg.value;
                }

                //把选择的文件传递出去
                this.$emit('onSelectFile', this.files);
            }
        }
    }
</script>
<style lang="less" scoped>
    .file-select-wrapper {
        .select-file-box {
            .drag-file-box {
                padding: 25px;
                font-size: 28px;
                font-weight: 400;
                text-align: center;
                color: #bbb;
                background-color: #fff;
                border-radius: 6px;
                border: 2px dashed #bbb;
            }
            .file-dragover {
                color:#fff;
                background-color: #bbb;
            }
            .input-file-box {
                input {
                    cursor: pointer;
                }
            }
            .selected-files-box {
                p {
                    margin: 0;
                    padding: 2px 10px;
                }
            }
        }
    }
    
</style>

