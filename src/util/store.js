export default {
    setItem(name, value) {
        sessionStorage.setItem(name, value);
    },
    getItem(name) {
        let value = sessionStorage.getItem(name);
        try {
            return JSON.parse(value);
        } catch (error) {
            return value;
        }
    }
};