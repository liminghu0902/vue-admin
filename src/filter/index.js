export default {
    formatDate(value) {
        return value;
    },
    //金额格式化
    formatMoney(value) {
        
    },
    //首字母大写
    capitalize(value) {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}