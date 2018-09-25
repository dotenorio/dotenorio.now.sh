# Hello ▲

Access this API on https://dotenorio.com/api

Or access a key directly

```
GET https://dotenorio.com/:key

GET https://dotenorio.com/name // returns 'Fernando M Tenório'
GET https://dotenorio.com/picture // redirect 302 to my awesome face :)
GET https://dotenorio.com/github // redirect 302 to 'https://github.com/dotenorio'
[...]
```

and so on..

Or yet consume this with NodeJS

```
const request = require('request')

request({
  uri: 'https://dotenorio.com/api',
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
