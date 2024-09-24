const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('window-all-closed', () => {
 app.quit()
})


app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,

  })
  mainWindow.loadURL('file://' + __dirname + '/Code.html')
})
