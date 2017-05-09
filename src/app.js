const app = require('express')()
const lib = require('./lib')
const Moment = require('moment')
const PATH_TO_CACHED_IMAGE = __dirname + './cache/today.jpg'
const CACHED_AT = ''

app.get('/:year/:month/:date', async (req, res) => {

  const date = lib.validateParams(req.params)
  if (!date) {
    res.write('Bad request')
    res.end()
    return
  }

  if (!await cacheExists()) {
    const URL =lib.generateImageURL(date)
    await cacheImage(URL)
  }

    res.write(`<html>
        ${lib.generateHTMLHead(date)}
        ${lib.generateHTMLBody(date)}
      </html>`)
    res.end()
  }
})w

app.listen(process.env.PORT || 3000, () => {
  console.log('app is listening..')
})
