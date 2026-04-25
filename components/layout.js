// root/components/layout.js

import template from './layoutView.js';
import Header from './header.js';
import Sidebar from './sidebarView.js';
import { Logger } from '../js/utils/debug.js';

export default {
    name: 'Layout',
    template,

    components: {
        'header-component': Header,
        'sidebar-component': Sidebar
    },

    setup() {
        const { ref } = Vue;

        Logger.info('Layout: setup init', 'UI');

        const isSidebarOpen = ref(false);

        const toggleSidebar = () => {
            isSidebarOpen.value = !isSidebarOpen.value;

            document.body.style.overflow = isSidebarOpen.value ? 'hidden' : '';

            Logger.debugUI(
                'Layout',
                'Toggle Sidebar',
                isSidebarOpen.value ? 'OPEN' : 'CLOSED'
            );
        };

        return {
            isSidebarOpen,
            toggleSidebar
        };
    },

    watch: {
        '$route'(to, from) {
            this.isSidebarOpen = false;
            document.body.style.overflow = '';

            Logger.info(
                `Route changed: ${from.fullPath} → ${to.fullPath}`,
                'PATH'
            );

            Vue.nextTick(() => {
                if (window.lucide) {
                    window.lucide.createIcons();
                    Logger.info('Lucide icons refreshed', 'UI');
                } else {
                    Logger.error('Layout', 'Lucide not found');
                }
            });
        }
    },

    mounted() {
        Logger.trace('Layout', 'mounted');

        if (window.lucide) {
            window.lucide.createIcons();
            Logger.info('Lucide initialized', 'UI');
        } else {
            Logger.error('Layout', 'Lucide library not detected');
        }
    }
};
