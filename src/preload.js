const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('lmu', {
  vmStart: () => ipcRenderer.invoke('vm:start'),
  vmStop: ()  => ipcRenderer.invoke('vm:stop')
});
