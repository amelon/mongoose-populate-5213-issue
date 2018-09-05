const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const userSchema = new Schema({
  name: String
})


const commentSchema = new Schema({
  text: String,
  author: { type: ObjectId, ref: 'User' }
})

const postSchema = new Schema({
  title: String,
  comments: [{ type: ObjectId, ref: 'Comment' }]
})

const UserMod = mongoose.model('User', userSchema)
const CommentMod = mongoose.model('Comment', commentSchema)
const PostMod = mongoose.model('Post', postSchema)

module.exports = {
  UserMod,
  CommentMod,
  PostMod,
}