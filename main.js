const { app, BrowserWindow } = require("electron")
const path = require("node:path")



const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600
  })

  window.loadFile("index.html")
}

app.whenReady().then(() => {
  createWindow()
  const win = new BrowserWindow({ width: 800, height: 600 })
  win.loadURL("https://github.com")
  
  const contents = win.webContents
  console.log(contents)
  // Open a window if none are open (macOS)
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit the app when all windows are closed (Windows & Linux)
app.on("window-all-closed", () => {
  // darwin, meaning macOS
  if (process.platform !== "darwin") app.quit()
})

