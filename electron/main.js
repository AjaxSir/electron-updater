/*
 * @Date: 2026-01-05 15:34:43
 * @LastEditors: xiaolong.su
 * @LastEditTime: 2026-01-06 14:33:28
 * @Description:
 */
const path = require("path");
const url = require("url");
const { app, BrowserWindow, ipcMain } = require("electron");
const { autoUpdater } = require("electron-updater");
const { dialog } = require("electron");
let mainWindow = null;
function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: false,
      sandbox: true
    }
  });
  if (!app.isPackaged) {
    mainWindow.loadURL(
      "http://localhost:5173/#/home?openId=oJdn-7JzXLnCP1cNP7Yjj-ofXt9k"
    );
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}
const lock = app.requestSingleInstanceLock();
if (!lock) {
  app.quit();
} else {
  app.on("second-instance", (_event, _commandLine, _workingDirectory) => {
    // 当运行第二个实例时,将会聚焦到mainWindow这个窗口
    if (mainWindow) {
      if (mainWindow.isMinimized()) {
        mainWindow.restore();
      }
      mainWindow.focus();
    }
  });
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("ready", () => {
  console.log("是否打包：", app.isPackaged);
  console.log("当前版本：", app.getVersion());
  console.log("更新源：", autoUpdater.getFeedURL?.());
  createWindow();
  initAutoUpdate(mainWindow);
  autoUpdater.checkForUpdates();
});
const initAutoUpdate = win => {
  autoUpdater.on("checking-for-update", () => {
    console.log("检查更新中");
  });

  autoUpdater.on("update-available", info => {
    console.log("发现新版本", info);
  });

  autoUpdater.on("update-not-available", () => {
    console.log("当前是最新版本");
  });

  autoUpdater.on("download-progress", progress => {
    win.webContents.send("update-progress", progress);
  });

  autoUpdater.on("update-downloaded", () => {
    dialog
      .showMessageBox(win, {
        type: "info",
        buttons: ["立即更新", "稍后"],
        message: "新版本已下载，是否立即安装？"
      })
      .then(res => {
        if (res.response === 0) {
          autoUpdater.quitAndInstall();
        }
      });
  });

  autoUpdater.on("error", err => {
    console.error("更新失败", err);
  });
};
