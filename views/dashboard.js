import dashboardTemplate from './dashboardView.js';
import { Logger } from '../js/services/debug.js';

export default {
    name: 'DashboardView',
    template: dashboardTemplate,
    // components: { CashflowChart }, // Jika nanti ada komponen Chart
    setup() {
        const { ref, onMounted, watch, nextTick, computed } = Vue;
        
        // State Filter
        const selectedRole = ref('Bisnis'); 
        const selectedPeriodKey = ref('this-month'); 
        const isLoading = ref(true);
        
        // State Statistik Keuangan (Duitku)
        const stats = ref({
            totalBalance: 0,
            income: 0,
            expense: 0,
            profit: 0,
            rawMaterial: 0,
            overhead: 0,
            taxEstimate: 0,
            debt: 0
        });

        // State untuk Riwayat Transaksi (Mock data sesuai Screenshot)
        const recentTransactions = ref([
            { id: 1, note: 'Penjualan Kopi', amount: 45000, type: 'In', category: 'Produk', date: 'Hari ini', icon: 'shopping-bag' },
            { id: 2, note: 'Beli Susu UHT', amount: 125000, type: 'Out', category: 'Bahan Baku', date: 'Hari ini', icon: 'package' },
            { id: 3, note: 'Listrik & WiFi', amount: 350000, type: 'Out', category: 'Overhead', date: 'Kemarin', icon: 'zap' }
        ]);

        // State untuk Menu Cepat (Quick Action)
        const quickMenus = ref([
            { label: 'Transaksi', icon: 'plus-circle', color: 'text-indigo-600' },
            { label: 'Hutang', icon: 'book-open', color: 'text-rose-500' },
            { label: 'Kategori', icon: 'layers', color: 'text-amber-500' },
            { label: 'Laporan', icon: 'file-text', color: 'text-emerald-500' },
            { label: 'Ekspor', icon: 'download', color: 'text-blue-500' }
        ]);

        const trendData = ref({ 
            labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'], 
            datasets: [40, 10, 25, 100, 60, 45, 10] 
        });

        // --- HELPERS ---
        const refreshIcons = () => {
            nextTick(() => { 
                if (window.lucide) window.lucide.createIcons(); 
            });
        };

        // --- CORE LOGIC ---
        const loadDashboardData = async () => {
            isLoading.value = true;
            try {
                // Simulasi Fetching Data API Keuangan
                // const data = await financeService.getDashboardSummary(selectedType.value, selectedPeriodKey.value);
                
                // Dummy data untuk visualisasi sesuai screenshot
                stats.value = {
                    totalBalance: 280070,
                    income: 721234,
                    expense: 441164,
                    profit: 280070,
                    rawMaterial: 150000,
                    overhead: 55000,
                    taxEstimate: 12500,
                    debt: 20000
                };

                Logger.info("Dashboard", "Data loaded successfully");
            } catch (err) {
                Logger.error("Dashboard_Load_Error", err);
            } finally {
                isLoading.value = false;
                refreshIcons();
            }
        };

        // --- COMPUTED ---
        const periodOptions = computed(() => {
            return [
                { value: 'this-month', label: 'Bulan Ini' },
                { value: 'last-month', label: 'Bulan Lalu' },
                { value: 'this-year', label: 'Tahun Ini' }
            ];
        });

        // --- WATCHERS ---
        watch([selectedType, selectedPeriodKey], loadDashboardData);
        
        onMounted(() => {
            loadDashboardData();
        });

        return { 
            stats, 
            isLoading, 
            selectedType, 
            selectedPeriodKey, 
            periodOptions, 
            trendData,
            quickMenus,
            recentTransactions
        };
    }
};
