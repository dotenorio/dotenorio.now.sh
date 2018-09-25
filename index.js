const { send } = require('micro')
const { router, get } = require('microrouter')
const { readFileSync } = require('fs')
const redirect = require('micro-redirect')
const dotenorio = require('dotenorio')()
const isUrl = require('is-url')

const main = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  send(res, 200, readFileSync('index.html'))
}
const api = (req, res) => send(res, 200, dotenorio)
const data = (req, res) => {
  let key = req.params.key
  let value = dotenorio[key]

  if (!value) {
    return send(res, 400, `Sorry, '${key}' it is a invalid param.`)
  }

  if (isUrl(value)) {
    return redirect(res, 302, value)
  }

  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  send(res, 200, value)
}
const notfound = (req, res) => send(res, 404, 'Sorry, this route not exists.')

module.exports = router(
  get('/', main),
  get('/api', api),
  get('/:key', data),
  get('/*', notfound)
)
