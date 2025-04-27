const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200, height: 800,
    webPreferences: { preload: path.join(__dirname, 'preload.js') }
  });
  win.loadFile(path.join(__dirname, '../public/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.handle('vm:start', () =>
  require('child_process').execSync(path.join(__dirname, '../vm/start-vm.sh')).toString()
);
ipcMain.handle('vm:stop', () =>
  require('child_process').execSync(path.join(__dirname, '../vm/stop-vm.sh')).toString()
);
