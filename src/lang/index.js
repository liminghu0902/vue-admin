import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zhLanguage from './zh';
import enLanguage from './en';
import { Cookie } from 'util';

Vue.use(VueI18n);

export default new VueI18n({
    locale: Cookie.getItem('language') || 'zh',
    messages: {
        en: {
            ...zhLanguage
        },
        zh: {
            ...enLanguage
        }
    }
});
