const env = process.env.NODE_ENV;
let MAIN_PATH;

if(env === 'production') {
    MAIN_PATH = '';
} else if (env === 'development') {
    MAIN_PATH = '';
}

export const Api = {
    user: {
        login: MAIN_PATH.concat(''),
        logout: MAIN_PATH.concat('')
    }
}