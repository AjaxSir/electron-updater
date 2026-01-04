<!--
 * @Date: 2026-01-04 09:17:50
 * @LastEditors: xiaolong.su
 * @LastEditTime: 2026-01-04 11:03:57
 * @Description: 
-->
<script setup lang="ts">
import { reactive, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { http } from "@/utils/http";
import useUserStore from "@/store/modules/user";
const route = useRoute();
const userStore = useUserStore();

const routeParams = route.query;
const { openId } = routeParams as { openId: string };
userStore.setOpenId(openId);
const loginInfo = ref<any>({
  menuList: []
});
defineOptions({
  name: "Home"
});

const getIcon = (menuName = "") => {
  switch (menuName) {
    case "预购单查询":
      return "balance-list-o";
    case "设备信息":
      return "logistics";
    case "订单查看":
      return "orders-o";
    case "设备上传":
      return "guide-o";
    default:
      return "";
  }
};

onMounted(() => {
  if (openId) {
    http
      .request({
        url: "/login/getLoginInfo",
        method: "GET",
        params: {
          openId
        }
      })
      .then(res => {
        loginInfo.value = res.data;
        console.log(loginInfo.value, "loginInfo.value");
      })
      .catch(err => {
        console.log(err, "err");
      });
  }
});
</script>

<template>
  <div class="p-[6px] h-[100vh] w-full bg">
    <van-grid :column-num="3" :gutter="10">
      <van-grid-item
        v-for="item in loginInfo.menuList.filter((e: any) => e.menuType === 2)"
        :key="item.menuId"
        :icon="getIcon(item.menuName)"
        :text="item.menuName"
      />
    </van-grid>
  </div>
</template>
<style lang="less" scoped>
.bg {
  background: url("@/assets/bg-1.png") no-repeat center center;
}
</style>
