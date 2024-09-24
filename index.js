const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('window-all-closed', () => {
 app.quit()
})


app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 1600,
    height: 1000,

  })
  mainWindow.loadURL('file://' + __dirname + '/Code.html')
})
