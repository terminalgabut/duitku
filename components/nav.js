import navView from './navView.js';

export default {
    ...navView,
    mounted() {
        if (window.lucide) window.lucide.createIcons();
    }
};
