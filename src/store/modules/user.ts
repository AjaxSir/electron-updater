/*
 * @Date: 2026-01-04 10:11:50
 * @LastEditors: xiaolong.su
 * @LastEditTime: 2026-01-04 10:12:08
 * @Description: 用户模块
 */
import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
    openId: ""
  }),
  actions: {
    setOpenId(openId: string) {
      this.openId = openId;
    }
  }
});
export default useUserStore;
