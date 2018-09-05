const {
  UserMod,
  CommentMod,
  PostMod,
} = require('./models')

async function createUser() {
  const user = await UserMod.create({ name: 'Val' })
  return user._id
}

async function createComments(userId) {
  const commentIds = []
  for(let i = 0; i < 2; i++) {
    let comment = await CommentMod.create({ text: `Comment ${i}`, author: userId })
    commentIds.push(comment._id)
  }
  return commentIds
}

async function createPost(commentIds) {
  await PostMod.create({ title: 'my super post', comments: commentIds })
}

async function createData() {
  const userId = await createUser()
  const commentIds = await createComments(userId)
  await createPost(commentIds)
}

module.exports = {
  createData
}