const env = process.env.NODE_ENV;
let MAIN_PATH;

if(env === 'development') {
    MAIN_PATH = 'https://adminapi.ect.wm-imotor.com/';
} else if(env === 'production') {
    MAIN_PATH = 'https://adminapi.ect.wm-imotor.com/';
};

export const Api = {
    user: {
        login: MAIN_PATH.concat('admin/login'),
        logout: MAIN_PATH.concat('admin/logout')
    }
};