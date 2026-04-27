import navView from './navView.js';

export default {
    ...navView,
    emits: ['open-input'],
    methods: {
        openInputModal() {
            this.$emit('open-input');
        }
    }
};
