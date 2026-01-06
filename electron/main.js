/*
 * @Date: 2026-01-05 15:34:43
 * @LastEditors: xiaolong.su
 * @LastEditTime: 2026-01-05 17:12:52
 * @Description:
 */
const path = require("path");
const url = require("url");
const { app, BrowserWindow, ipcMain } = require("electron");
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
app.on("ready", createWindow);
