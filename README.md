# Electron TODO

Simple todo app for practice.

## Notes

You can interact with this web content from the main process using the window's webContents object.
```js
const win = new BrowserWindow({ width: 800, height: 600 })
win.loadURL("https://github.com")

const contents = win.webContents
```

The bare minimum to understand is:

> An HTML file is your entry point for the renderer process.
> UI styling is added through Cascading Style Sheets (CSS).
> Executable JavaScript code can be added through <script> elements.
