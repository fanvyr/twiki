import { ipcRenderer as ipc } from 'electron'
import store from '../store'

ipc.on('snippet:receiveAll', (e, items) => {
  console.log('okay, i\'ve got some items! ', items)
  store.dispatch('snippets/setAllSnippets', items)
})


export default ipc