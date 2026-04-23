import dashboardTemplate from './dashboardView.js';

export default {
  name: 'DashboardView',
  template: dashboardTemplate,

  setup() {
    const { ref } = Vue;

    // data sederhana
    const message = ref("Dashboard berhasil dimuat 🚀");

    return {
      message
    };
  }
};
