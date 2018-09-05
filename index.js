const assert = require('assert')
const { openDb, closeDb } = require('./connection')
const { createData } = require('./create_data')
const {
  PostMod,
} = require('./models')

async function run() {
  await openDb()
  await createData()
  await findPopulatedComments()
  closeDb()
}

async function findPopulatedComments() {
  const posts = await PostMod.find()
  await PostMod.populate(posts, { path: 'comments', model: 'Comment' })
  await PostMod.populate(posts, { path: 'comments.author', model: 'User' })

  console.log(posts[0].comments[0])

  assert(Array.isArray(posts[0].comments[0].author) === false)
}


run().catch(error => console.error(error.stack))