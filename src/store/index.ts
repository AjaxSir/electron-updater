/*
 * @Date: 2026-01-04 09:17:50
 * @LastEditors: xiaolong.su
 * @LastEditTime: 2026-01-04 10:16:01
 * @Description: 全局状态管理
 */
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const store = createPinia();
store.use(piniaPluginPersistedstate);
export { store };
