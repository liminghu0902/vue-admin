export default {
    alert(type, title, content) {
        if(!toastr) {
            return;
        };
        switch(type) {
            case 'info':
                toastr.info(content, title);
                break;
            case 'success':
                toastr.success(content, title);
                break;
            case 'error':
                toastr.error(content, title);
                break;
            case 'warning':
                toastr.warning(content, title);
                break;
            default:
                toastr.info(content, title);
                break;
        }
    }
}