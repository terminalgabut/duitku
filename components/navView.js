export default {
  name: 'NavView',
  template: `
    <nav class="app-navigation">
        <div class="nav-menu-wrapper">
            <router-link to="/" class="nav-item">
                <i data-lucide="layout-grid"></i>
                <span class="nav-label">Home</span>
            </router-link>

            <router-link to="/input" class="nav-item">
                <i data-lucide="plus-circle"></i>
                <span class="nav-label">Input</span>
            </router-link>

            <router-link to="/analysis" class="nav-item">
                <i data-lucide="trending-up"></i>
                <span class="nav-label">Laporan</span>
            </router-link>
        </div>
    </nav>
  `
};
