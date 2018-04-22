import Vue from 'vue';
import svgIcon from '../components/svgIcon/index.vue';

Vue.component('svgIcon', svgIcon);

const importAll = files => files.keys().map(files);

const svgs = require.context('./svg', false, /\.svg$/);

importAll(svgs);

