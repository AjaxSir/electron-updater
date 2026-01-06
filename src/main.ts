/*
 * @Date: 2026-01-04 09:17:50
 * @LastEditors: xiaolong.su
 * @LastEditTime: 2026-01-05 14:31:42
 * @Description:
 */
import { createApp } from "vue";
import { store } from "./store";
// normalize.css
import "normalize.css/normalize.css";
// 全局样式
import "./styles/index.less";
// tailwindcss
import "./styles/tailwind.css";
// @ts-ignore
import "virtual:svg-icons-register";
import { initializeDarkMode } from "@/utils/dark-mode";
import App from "./App.vue";
import router from "./router";

initializeDarkMode();

const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
