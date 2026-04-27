import inputView from './inputView.js';

export default {
    name: 'InputModal',
    template: inputView,
    emits: ['close-input'],
    data() {
        return {
            // Objek form harus ada agar v-model tidak error
            form: {
                amount: '',
                type: 'Pengeluaran',
                title: '',
                category: '',
                wallet: '',
                date: new Date().toISOString().substr(0, 10),
                time: '18:30',
                note: ''
            }
        }
    },
    methods: {
        closeInput() {
            // Memancarkan event ke layout.js untuk mengubah isInputOpen jadi false
            this.$emit('close-input');
        },
        saveTransaction() {
            console.log('Data disimpan:', this.form);
            this.closeInput();
        }
    },
    mounted() {
        // Render ikon lucide di dalam modal
        if (window.lucide) window.lucide.createIcons();
    }
};
