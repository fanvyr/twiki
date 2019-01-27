import {Datastore} from 'nedb-async-await';
import os from 'os'

const db = {}

db.snippets = new Datastore({
  filename: `${os.homedir()}/.twiki/snippets.db`,
  autoload: true,
  timestampData: true,

})


db.tasks = new Datastore({
  filename: `${os.homedir()}/.twiki/tasks.db`,
  autoload: true,
  timestampData: true
})


export default db