import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Đảm bảo bạn đã cấu hình router
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm Bootstrap vào dự án

createApp(App)
  .use(router)
  .mount('#app');
