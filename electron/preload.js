/*
 * @Date: 2026-01-05 15:36:19
 * @LastEditors: xiaolong.su
 * @LastEditTime: 2026-01-05 15:36:54
 * @Description: 预加载脚本，用于在渲染进程中与主进程通信
 */
const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("electronAPI", {
  send: (channel, data) => ipcRenderer.send(channel, data),
  receive: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args))
});
