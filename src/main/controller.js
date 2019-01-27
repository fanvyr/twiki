import { ipcMain as ipc } from 'electron'

ipc.on('item:add', (e, item) => {
  console.log('got item from frontend: ', item)
  e.sender.send('item:added', item)
})


export default { ipc }