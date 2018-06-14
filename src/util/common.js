export default {
    //数组去重
    removeRepeatOfArray(arr) {
        return arr.filter((item, index, self) => {
            return self.indexOf(item) === index;
        })
    },
    //导出到excel
    exportToExcel(stream, fileName) {
      const blob = new Blob([stream], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
      const objectUrl = URL.createObjectURL(blob);
      if(this.IEVersion() == 100) {
          const a = document.createElement('a');
          const event = document.createEvent('MouseEvent');
          a.download = fileName;
          a.href = objectUrl;
          event.initEvent('click', true, true);
          a.dispatchEvent(event);
      } else {
          navigator.msSaveBlob(blob, fileName);
      }
    },
    //数字补0
    addZero(n) {
        return n < 10 ? ('0' + n) : n;
    },
    IEVersion() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        if (isIE) {
          var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
          reIE.test(userAgent);
          var fIEVersion = parseFloat(RegExp["$1"]);
          if (fIEVersion == 7) {
            return 7;
          } else if (fIEVersion == 8) {
            return 8;
          } else if (fIEVersion == 9) {
            return 9;
          } else if (fIEVersion == 10) {
            return 10;
          } else {
            return 6;//IE版本<=7
          }
        } else if (isEdge) {
          return 200;//edge
        } else if (isIE11) {
          return 11; //IE11
        } else {
          return 100;//不是ie浏览器
        }
    }
}