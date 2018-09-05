# mongoose-populate-5213-issue

Issue related to mongoose 5.2.13 and populate field in array of populated objects.

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

Version 5.2.10 is ok
Version 5.2.11, 5.2.12, 5.2.13 failed
