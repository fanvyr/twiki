import { ipcMain as ipc } from 'electron'
import db from '../model/Database'

ipc.on('snippet:getAll', async (e) => {
  console.log('backend got snippet:getAll request')
  const result = await db.snippets.find({})
  console.log('db query results: ', result)
})

ipc.on('snippet:insertSingle', async(e, item) => {
  const newItem = await db.snippets.insert({
    title: 'my first element',
    description: 'description of my first snippet',
    body: 'asdf asdf asdf asdf asdf body',
    tags: ['tag1', 'tag2', 'tag3']
  })

  // db.snippets.insert({title: 'test'}, (err, newItem) => {
    // })
    
  console.log(newItem)

})