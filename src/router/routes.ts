/*
 * @Date: 2026-01-04 09:17:50
 * @LastEditors: xiaolong.su
 * @LastEditTime: 2026-01-05 14:34:01
 * @Description:
 */
import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Home" },
    children: [
      {
        path: "Home",
        name: "Home",
        component: Home,
        meta: {
          title: "主页"
        }
      },
      {
        path: "prepay",
        name: "Prepay",
        component: () => import("@/views/prepay/index.vue"),
        meta: {
          title: "预支付"
        }
      },
      {
        path: "device",
        name: "Device",
        component: () => import("@/views/device/index.vue"),
        meta: {
          title: "设备信息",
          noCache: true
        }
      },
      {
        path: "order",
        name: "Order",
        component: () => import("@/views/order/index.vue"),
        meta: {
          title: "订单信息",
          noCache: true
        }
      },
      {
        path: "upload",
        name: "Upload",
        component: () => import("@/views/upload/index.vue"),
        meta: {
          title: "设备上传",
          noCache: true
        }
      }
    ]
  }
];

export default routes;
