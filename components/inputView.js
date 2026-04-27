// root/components/inputView.js

export default `
<div class="input-overlay fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] flex items-end justify-center">
    <div class="input-container bg-white w-full max-w-md rounded-t-[40px] p-8 animate-slide-up shadow-2xl">
        
        <div class="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8"></div>

        <header class="flex justify-between items-center mb-10">
            <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight">Tambah Catatan</h2>
            <button @click="closeInput" class="text-slate-400 hover:text-slate-600">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
        </header>

        <div class="text-center mb-10">
            <span class="text-sm font-black text-slate-400 uppercase tracking-widest">Nominal</span>
            <div class="flex items-center justify-center gap-2 mt-2">
                <span class="text-2xl font-bold text-slate-900">Rp</span>
                <input type="number" v-model="form.amount" placeholder="0" 
                    class="text-5xl font-black text-indigo-600 outline-none w-full max-w-[250px] placeholder:opacity-20 tabular-nums">
            </div>
        </div>

        <div class="flex gap-3 mb-8">
            <button v-for="type in ['Pengeluaran', 'Pemasukan', 'Transfer']" 
                :key="type"
                @click="form.type = type"
                :class="form.type === type ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-slate-50 text-slate-400'"
                class="flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                {{ type }}
            </button>
        </div>

        <div class="space-y-4 mb-10">
            <div class="relative group">
                <i data-lucide="type" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"></i>
                <input type="text" placeholder="Judul Transaksi" v-model="form.title"
                    class="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-indigo-500/20">
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="relative">
                    <i data-lucide="tag" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"></i>
                    <select v-model="form.category" class="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold appearance-none">
                        <option value="">Kategori</option>
                        <option>Makanan</option>
                        <option>Transportasi</option>
                    </select>
                </div>
                <div class="relative">
                    <i data-lucide="wallet" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"></i>
                    <select v-model="form.wallet" class="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold appearance-none">
                        <option value="">Dompet</option>
                        <option>Kas</option>
                        <option>Bank BCA</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <input type="date" v-model="form.date" class="w-full bg-slate-50 border-none rounded-2xl py-4 px-4 text-sm font-bold">
                <input type="time" v-model="form.time" class="w-full bg-slate-50 border-none rounded-2xl py-4 px-4 text-sm font-bold">
            </div>

            <textarea placeholder="Deskripsi (Opsional)" v-model="form.note"
                class="w-full bg-slate-50 border-none rounded-2xl py-4 px-4 text-sm font-bold h-24 resize-none"></textarea>
        </div>

        <button @click="saveTransaction" 
            class="w-full bg-slate-900 text-white py-5 rounded-[24px] font-black uppercase tracking-[0.2em] text-xs shadow-xl active:scale-95 transition-transform">
            Simpan Transaksi
        </button>
    </div>
</div>
`;
