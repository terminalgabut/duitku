export default {
  name: 'NavView',
  template: `
    <nav class="fixed bottom-0 left-0 right-0 z-[1000] px-6 pb-8 pointer-events-none">
        <div class="max-w-[420px] mx-auto h-[70px] bg-slate-900/95 backdrop-blur-xl rounded-[28px] flex items-center justify-around px-2 pointer-events-auto shadow-2xl shadow-slate-900/40 border border-slate-800">
            
            <router-link to="/" class="flex flex-col items-center justify-center flex-1 gap-1 text-slate-500 active:scale-90 transition-all" active-class="text-white">
                <i data-lucide="home" class="w-5 h-5"></i>
                <span class="text-[10px] font-bold uppercase tracking-tighter">Beranda</span>
            </router-link>

            <div class="flex-1 flex justify-center">
                <router-link to="/input" class="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/40 active:scale-90 transition-all border-4 border-slate-900">
                    <i data-lucide="plus" class="w-6 h-6 text-white"></i>
                </router-link>
            </div>

            <router-link to="/statistics" class="flex flex-col items-center justify-center flex-1 gap-1 text-slate-500 active:scale-90 transition-all" active-class="text-white">
                <i data-lucide="bar-chart-3" class="w-5 h-5"></i>
                <span class="text-[10px] font-bold uppercase tracking-tighter">Laporan</span>
            </router-link>
            
        </div>
    </nav>
  `
};
