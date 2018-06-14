export default {
    name: 'test',
    render(createElement) {
        return createElement('div',
            Array.apply(null, { length: 20 }).map(function () {
                return createElement('p', 'hi')
            })
        );
    },
    data() {
        return {
            text: 'jsx'
        }
    },
    mounted() {
        console.log(this);
    }
}