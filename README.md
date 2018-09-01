# Hello ▲

Access this API on http://dotenorio.now.sh/

Or consume this with NodeJS

```
const request = require('request')

request({
  uri: 'https://dotenorio.now.sh/',
  method: 'get',
  json: {}
}, (err, res, body) => {
  if (err) throw err
  if (res.statusCode !== 200) {
    throw new Error('OMG, anything are wrong :(')
  }

  // Just print pretty response
  console.log(JSON.stringify(body, null, 2))

  // or use your creativity
  console.log(`
    Hello i'm ${body.name}
    and you can talk to me on Telegram (${body.telegram})
    or see my codes on GitHub (${body.github}).
    See you!
  `)
})
```

_I really don't know why you did it, but 4 fun is 4 fun._
