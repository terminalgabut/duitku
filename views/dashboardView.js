// root/views/dashboardView.js

export default `
<div class="dashboard-wrapper animate-in p-4 md:p-6" :class="{ 'is-loading': isLoading }">
    
    <header class="mb-8 flex justify-between items-end">
        <div>
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Overview Finansial</p>
            <h1 class="text-3xl font-black text-slate-900 tracking-tighter italic uppercase">April 2026</h1>
        </div>
        <div class="filter-group flex gap-2">
            <select v-model="selectedType" class="bg-white border border-slate-200 text-[10px] font-black uppercase p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                <option value="Personal">Personal</option>
                <option value="Bisnis">Bisnis</option>
            </select>
        </div>
    </header>

    <div class="relative overflow-hidden bg-slate-900 rounded-[40px] p-8 text-white shadow-2xl shadow-slate-900/20 mb-10 transition-transform active:scale-[0.99]">
        <div class="absolute -right-10 -top-10 w-64 h-64 bg-[#8DA382] rounded-full blur-[100px] opacity-20"></div>
        <div class="absolute -left-10 -bottom-10 w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-20"></div>
        
        <div class="absolute right-6 bottom-6 opacity-10 transform rotate-12 pointer-events-none">
            <i data-lucide="wallet" class="w-48 h-48 text-white"></i>
        </div>

        <div class="relative z-10">
            <div class="flex justify-between items-start mb-10">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="w-2 h-2 bg-[#8DA382] rounded-full animate-pulse"></span>
                        <p class="text-[10px] font-bold opacity-60 uppercase tracking-[0.3em]">Total Saldo Tersedia</p>
                    </div>
                    <h2 class="text-5xl font-black tabular-nums tracking-[-0.05em] italic text-amber-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.4)]">
                      <span class="text-xl font-bold not-italic mr-1 text-amber-400">Rp</span>
                      {{ (stats.totalBalance || 280070).toLocaleString('id-ID') }}
                    </h2>
                </div>
                <button class="p-3 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-xl border border-white/10 transition-colors">
                    <i data-lucide="eye" class="w-5 h-5 text-white"></i>
                </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div class="space-y-1">
                    <div class="flex items-center gap-2 opacity-50">
                        <i data-lucide="arrow-down-left" class="w-3.5 h-3.5 text-emerald-400"></i>
                        <span class="text-[10px] font-black uppercase tracking-widest">Pemasukan</span>
                    </div>
                    <p class="text-xl font-bold tabular-nums text-emerald-400">+Rp{{ (stats.income || 721234).toLocaleString('id-ID') }}</p>
                </div>
                
                <div class="space-y-1 border-white/5 md:border-x md:px-6">
                    <div class="flex items-center gap-2 opacity-50">
                        <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-rose-400"></i>
                        <span class="text-[10px] font-black uppercase tracking-widest">Pengeluaran</span>
                    </div>
                    <p class="text-xl font-bold tabular-nums text-rose-400">-Rp{{ (stats.expense || 441164).toLocaleString('id-ID') }}</p>
                </div>

                <div class="space-y-2">
                    <div class="flex justify-between items-center">
                        <span class="text-[10px] font-black opacity-50 uppercase tracking-widest text-white">Efisiensi Kas</span>
                        <span class="text-[10px] font-bold text-[#8DA382]">62%</span>
                    </div>
                    <div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
                        <div class="h-full bg-[#8DA382] shadow-[0_0_12px_rgba(141,163,130,0.5)]" style="width: 62%"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div class="lg:col-span-2 space-y-8">
            
            <div class="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden group">
                <i data-lucide="bar-chart-3" class="absolute -right-4 -bottom-4 w-32 h-32 text-slate-50 opacity-50 transform -rotate-12 pointer-events-none transition-transform group-hover:rotate-0"></i>
                
                <div class="relative z-10">
                    <div class="flex justify-between items-center mb-8">
                        <div>
                            <h3 class="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">Analisis Pengeluaran</h3>
                            <p class="text-[10px] font-bold text-slate-400 uppercase mt-1">Statistik 7 hari terakhir</p>
                        </div>
                        <div class="flex gap-1">
                            <div v-for="i in 3" :key="i" class="w-1 h-1 bg-slate-200 rounded-full"></div>
                        </div>
                    </div>
                    
                    <div class="h-52 flex items-end gap-3 px-2">
                        <div v-for="bar in [40, 10, 25, 100, 60, 45, 10]" :key="bar" 
                             :class="bar === 100 ? 'bg-indigo-600' : 'bg-slate-100 group-hover:bg-slate-200'"
                             class="flex-1 rounded-2xl transition-all duration-500 hover:scale-x-110 cursor-pointer" 
                             :style="{ height: bar + '%' }">
                        </div>
                    </div>
                    <div class="flex justify-between mt-6 px-2">
                        <span v-for="day in ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']" :key="day" class="text-[10px] font-bold text-slate-400 uppercase">{{ day }}</span>
                    </div>
                </div>
            </div>

            <div class="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
                <div class="flex justify-between items-center mb-8">
                    <h3 class="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">Transaksi Terbaru</h3>
                    <button class="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-[10px] font-black text-slate-900 uppercase tracking-widest rounded-xl transition-colors">Lihat Semua</button>
                </div>
                <div class="space-y-5">
                    <div v-for="trx in recentTransactions" :key="trx.id" class="flex items-center justify-between group cursor-pointer p-2 -m-2 rounded-2xl hover:bg-slate-50 transition-all">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all text-slate-500 group-hover:text-indigo-600">
                                <i :data-lucide="trx.icon" class="w-5 h-5"></i>
                            </div>
                            <div>
                                <p class="text-sm font-black text-slate-900 uppercase tracking-tight">{{ trx.note }}</p>
                                <p class="text-[10px] font-bold text-slate-400 uppercase mt-0.5 tracking-tighter">{{ trx.category }} • {{ trx.date }}</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p :class="trx.type === 'In' ? 'text-emerald-600' : 'text-rose-600'" class="text-base font-black tabular-nums">
                                {{ trx.type === 'In' ? '+' : '-' }}Rp{{ trx.amount.toLocaleString('id-ID') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="space-y-8">
            
            <div class="bg-indigo-600 p-8 rounded-[40px] text-white relative overflow-hidden shadow-xl shadow-indigo-100">
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <i data-lucide="sparkles" class="absolute left-6 top-6 w-12 h-12 text-white opacity-10"></i>
                
                <div class="relative z-10 pt-8">
                    <h3 class="text-[10px] font-black opacity-60 uppercase tracking-[0.3em] mb-4">Wawasan AI</h3>
                    <div class="bg-white/10 p-5 rounded-[28px] backdrop-blur-md border border-white/10">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center shadow-lg shadow-amber-400/30 transform -rotate-6">
                                <i data-lucide="trending-up" class="w-5 h-5 text-indigo-900"></i>
                            </div>
                            <p class="text-[11px] font-black uppercase tracking-tight leading-tight">Pengeluaran Meningkat</p>
                        </div>
                        <p class="text-xs font-medium opacity-90 leading-relaxed italic">"Belanja bahan baku Anda naik 15% dari rata-rata. Pertimbangkan mencari supplier baru bulan depan."</p>
                    </div>
                </div>
            </div>

            <div class="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden group">
                <div class="absolute -right-4 -bottom-4 opacity-[0.03] text-slate-900">
                    <i data-lucide="shield-check" class="w-32 h-32"></i>
                </div>
                
                <div class="relative z-10">
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Kekayaan Bersih</span>
                        <div class="p-2 bg-rose-50 rounded-lg">
                            <i data-lucide="alert-circle" class="w-4 h-4 text-rose-500"></i>
                        </div>
                    </div>
                    <h2 class="text-3xl font-black text-slate-900 tabular-nums mb-4 tracking-tighter">-Rp20.000</h2>
                    <div class="space-y-3">
                        <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div class="bg-rose-500 h-full w-full shadow-[0_0_8px_rgba(244,63,94,0.4)]"></div>
                        </div>
                        <p class="text-[10px] font-bold text-rose-500 uppercase tracking-widest flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                            Hutang Terdeteksi
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
`;
