# mongoose-populate-5213-issue

Issue related to mongoose 5.2.13 and populate field in array of populated objects.

see `./models.js`

* Post has many Comments (ref)
* Comment has one Author (ref)

When I populate Post with comments and comment author, I expect populated field author on comment to be an object.

````
...
async function findPopulatedComments() {
  const posts = await PostMod.find()
  await PostMod.populate(posts, { path: 'comments', model: 'Comment' })
  await PostMod.populate(posts, { path: 'comments.author', model: 'User' })

  console.log(posts[0].comments[0])

  assert(Array.isArray(posts[0].comments[0].author) === false)
}
...
````

Mongoose version 5.2.10 is ok

Version 5.2.11, 5.2.12, 5.2.13 failed


Run
`node index.js`

If it throws
````
AssertionError [ERR_ASSERTION]: false == true
    at findPopulatedComments (~\mongoose-populate-5213-issue\index.js:20:3)
    at <anonymous>
    at process._tickCallback (internal/process/next_tick.js:188:7)
````

it means `posts[0].comments[0].author` is an array but an object is expected !

