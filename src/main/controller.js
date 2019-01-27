import { ipcMain as ipc } from 'electron'
import './controller/snippetController'
import './controller/taskController'
// import './controller/searchController'

ipc.on('item:add', (e, item) => {
  console.log('got item from frontend: ', item)
  e.sender.send('item:added', item)
})


export default { ipc }