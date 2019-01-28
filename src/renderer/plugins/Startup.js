import { ipcRenderer as ipc } from 'electron'

function startup() { 
  ipc.send('snippet:getAll')
}

export default startup