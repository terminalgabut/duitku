// root/views/dashboardView.js

export default `
<div class="dashboard-wrapper animate-in p-4 md:p-6" :class="{ 'is-loading': isLoading }">
    
    <header class="mb-8 flex justify-between items-end">
        <div>
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Selamat Pagi 👋</p>
            <h1 class="text-3xl font-black text-slate-900 tracking-tighter italic uppercase">April 2026</h1>
        </div>
        <div class="filter-group flex gap-2">
            <select v-model="selectedType" class="bg-white border border-slate-200 text-[10px] font-black uppercase p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                <option value="Personal">Personal</option>
                <option value="Bisnis">Bisnis</option>
            </select>
        </div>
    </header>

    <div class="relative overflow-hidden bg-gradient-to-br from-[#8DA382] to-[#7A8F70] rounded-[32px] p-8 text-white shadow-xl shadow-[#8DA382]/20 mb-8 transition-transform active:scale-[0.98]">
        <div class="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        
        <div class="relative z-10">
            <div class="flex justify-between items-center mb-2">
                <p class="text-[10px] font-bold opacity-80 uppercase tracking-widest">Total Saldo</p>
                <button class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                    <i data-lucide="eye" class="w-4 h-4"></i>
                </button>
            </div>
            <h2 class="text-4xl font-black tabular-nums leading-none mb-8">
                Rp{{ (stats.totalBalance || 280070).toLocaleString('id-ID') }}
            </h2>
            
            <div class="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div>
                    <div class="flex items-center gap-1 opacity-80 mb-1">
                        <i data-lucide="arrow-down-left" class="w-3 h-3"></i>
                        <span class="text-[9px] font-black uppercase tracking-tighter">Pemasukan</span>
                    </div>
                    <p class="text-lg font-bold">Rp{{ (stats.income || 721234).toLocaleString('id-ID') }}</p>
                </div>
                <div>
                    <div class="flex items-center gap-1 opacity-80 mb-1">
                        <i data-lucide="arrow-up-right" class="w-3 h-3"></i>
                        <span class="text-[9px] font-black uppercase tracking-tighter">Pengeluaran</span>
                    </div>
                    <p class="text-lg font-bold">Rp{{ (stats.expense || 441164).toLocaleString('id-ID') }}</p>
                </div>
            </div>
            
            <div class="mt-4 h-1.5 w-full bg-black/10 rounded-full overflow-hidden flex">
                <div class="h-full bg-emerald-400" style="width: 62%"></div>
                <div class="h-full bg-rose-400" style="width: 38%"></div>
            </div>
        </div>
    </div>

    <div class="mb-8">
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Menu</h3>
            <i data-lucide="sliders-horizontal" class="w-4 h-4 text-slate-400"></i>
        </div>
        <div class="grid grid-cols-4 md:grid-cols-5 gap-3">
            <div v-for="menu in quickMenus" :key="menu.label" class="flex flex-col items-center gap-2 group cursor-pointer">
                <div class="w-14 h-14 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center group-hover:bg-indigo-50 transition-all group-active:scale-90">
                    <i :data-lucide="menu.icon" :class="menu.color" class="w-6 h-6"></i>
                </div>
                <span class="text-[9px] font-black text-slate-500 uppercase tracking-tighter text-center leading-tight">
                    {{ menu.label }}
                </span>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 space-y-6">
            <div class="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Tren Pengeluaran</h3>
                    <span class="text-[9px] font-bold text-slate-400 uppercase">7 Hari Terakhir</span>
                </div>
                <div class="h-48 flex items-end gap-2 px-2">
                    <div v-for="bar in [40, 10, 25, 100, 60, 45, 10]" :key="bar" 
                         :class="bar === 100 ? 'bg-rose-400' : 'bg-[#8DA382]/40'"
                         class="flex-1 rounded-t-lg transition-all hover:opacity-80" 
                         :style="{ height: bar + '%' }">
                    </div>
                </div>
                <div class="flex justify-between mt-4 px-2">
                    <span v-for="day in ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']" :key="day" class="text-[9px] font-bold text-slate-400 uppercase">{{ day }}</span>
                </div>
            </div>

            <div class="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Riwayat Transaksi</h3>
                    <button class="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Lihat Semua</button>
                </div>
                <div class="space-y-4">
                    <div v-for="trx in recentTransactions" :key="trx.id" class="flex items-center justify-between group">
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                                <i :data-lucide="trx.icon" class="w-5 h-5 text-slate-400 group-hover:text-indigo-600"></i>
                            </div>
                            <div>
                                <p class="text-xs font-black text-slate-900 uppercase tracking-tight">{{ trx.note }}</p>
                                <p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5">{{ trx.category }} • {{ trx.date }}</p>
                            </div>
                        </div>
                        <p :class="trx.type === 'In' ? 'text-emerald-600' : 'text-rose-600'" class="text-sm font-black tabular-nums">
                            {{ trx.type === 'In' ? '+' : '-' }}Rp{{ trx.amount.toLocaleString('id-ID') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="space-y-6">
            <div class="bg-indigo-900 p-6 rounded-[32px] text-white relative overflow-hidden shadow-xl shadow-indigo-200">
                <div class="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                <h3 class="text-[10px] font-black opacity-60 uppercase tracking-[0.2em] mb-4 text-center">Wawasan Keuangan</h3>
                <div class="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/5">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center shadow-lg shadow-amber-400/20">
                            <i data-lucide="star" class="w-4 h-4 text-white fill-current"></i>
                        </div>
                        <p class="text-[10px] font-black uppercase tracking-tight leading-tight">Pengeluaran Terbesar</p>
                    </div>
                    <p class="text-xs font-bold opacity-80 leading-relaxed">Belanja Bahan Baku naik 15% dari rata-rata harian.</p>
                </div>
            </div>

            <div class="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm group">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Kekayaan Bersih</span>
                    <i data-lucide="shield-check" class="w-4 h-4 text-emerald-500"></i>
                </div>
                <h2 class="text-2xl font-black text-slate-900 tabular-nums mb-1">-Rp20.000</h2>
                <div class="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                    <div class="bg-rose-500 h-full" style="width: 100%"></div>
                </div>
                <p class="text-[9px] font-bold text-rose-500 uppercase mt-2 tracking-tighter">Hutang Terdeteksi Rp20.000</p>
            </div>
        </div>
    </div>
</div>
\`;
