import xlsx from 'xlsx';

const readFiles = (file, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = event => {
        const result = event.target.result;
        let workbook = null;
        let data = {result: [], success: false, msg: ''};
        try {
            workbook = xlsx.read(result, {type: 'binary'});
        } catch (error) {
            data.success = false;
            data.result = null;
            data.msg = '文件类型不对!';
            callback(data);
            return;
        }
        // 表格的表格范围，可用于判断表头是否数量是否正确
        let fromTo = '';
        // 遍历每张表读取
        for (let sheet in workbook.Sheets) {
            if (workbook.Sheets.hasOwnProperty(sheet)) {
                fromTo = workbook.Sheets[sheet]['!ref'];
                data.result = data.result.concat(xlsx.utils.sheet_to_json(workbook.Sheets[sheet]));
                // break; // 如果只取第一张表，就取消注释这行
            }
        }
        data.success = true;
        callback(data);
    }
    fileReader.readAsBinaryString(file);
}

export default {
    importExcel(files, callback) {
        let result = [];
        files.forEach(file => {
            readFiles(file, data => {
                callback(data);
            });
        })
    }
}
