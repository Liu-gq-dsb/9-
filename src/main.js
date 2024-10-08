import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import OneTtVue from "./views/CodeRepository/Fujijan/OneTt.Vue";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use("sidebar-component", OneTtVue);
app.mount("#app");
