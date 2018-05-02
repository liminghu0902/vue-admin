export default {
    //数组去重
    removeRepeatOfArray(arr) {
        return arr.filter((item, index, self) => {
            return self.indexOf(item) === index;
        })
    }
}