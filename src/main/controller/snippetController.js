import { ipcMain as ipc } from 'electron'
import db from '../model/Database'

ipc.on('snippet:getAll', async (e) => {
  console.log('backend got snippet:getAll request')

  const result = await db.snippets.find({}, {
    _id: 1, 
    title: 1, 
    description: 1, 
    tags: 1,
    createdAt: 1,
    updatedAt: 1 
  })
  
  console.log('db query results: ', result)
  e.sender.send('snippet:receiveAll', result)
  
})


ipc.on('snippet:getSingle', async(e, id) => {
  const result = await db.snippets.findOne({_id: id})

  // #TODO: return single document
  console.log('found a single document: ', result)
})


ipc.on('snippet:insertSingle', async(e, item) => {
  // const newItem = await db.snippets.insert({
  //   title: 'my first xxxxxyz',
  //   description: 'description of my first snippet',
  //   body: 'asdf asdf asdf asdf asdf body',
  //   tags: ['tag1', 'tag2', 'tag3', 'tag4']
  // })

  const newItem = await db.snippets.insert(item)

  console.log(newItem)

  // #TODO: return inserted item

})

ipc.on('snippet:updateSingle', async(e, item) => {
  delete item.createdAt
  delete item.updatedAt

  const updatedItem = await db.snippets.update({_id: item._id}, item, {returnUpdatedDocs: true})
  console.log('updated document: ', updatedItem)

  // #TODO: return updated item
})
