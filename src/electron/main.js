import {app, BrowserWindow} from 'electron'
import path from 'path'
import { isDev } from './util.js'

//constants
let mainWindow 

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "#1e1e1e",
    webPreferences: {
      nodeIntegration: true
    },
  })
  if (isDev()) {
    mainWindow.loadURL('http://localhost:5001')
  } else {
    mainWindow.loadFile(path.join(app.getAppPath() + '/dist-react/index.html'))
  }
})