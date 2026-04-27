import navView from './navView.js';

export default {
    ...navView,
    // Deklarasikan event agar sesuai dengan pola Header
    emits: ['open-input'], 
    
    mounted() {
        // Inisialisasi ikon saat komponen ditempel ke DOM
        if (window.lucide) window.lucide.createIcons();
    },
    
    updated() {
        // Refresh ikon jika ada perubahan state agar ikon tetap muncul
        if (window.lucide) window.lucide.createIcons();
    }
};
