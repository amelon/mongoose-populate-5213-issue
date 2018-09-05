const mongoose = require('mongoose')

async function openDb() {
  await mongoose.connect('mongodb://localhost:27017/test')
  await mongoose.connection.dropDatabase()
}

function closeDb() {
  mongoose.connection.close()
}

module.exports = {
  openDb,
  closeDb,
}