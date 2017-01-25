const app       = require('express')()
const request   = require('request')
const fs        = require('fs')
const lib       = require('./lib')
const cashe_dir = __dirname + '/../cache'

// define router
app.get('/:year/:month/:day', (req, res) => {

  if (!lib.validateParams(req.params)) {
    res.write('Bad request')
    res.end()
  } else {
    const { year, month, day } = req.params

    fs.createReadStream(`${cashe_dir}/${year}${month}${day}.jpg`)
      .on('error', () => {
        // image not found
        // make request and cache
      })
      .on('end', () => {
        res.write(`<html>
            ${lib.generateHTMLHead(year, month, day)}
            ${lib.generateHTMLBody(year, month, day)}
          </html>`)
        res.end()
      })
  }
})

// create folder and start listen
fs.mkdir(cashe_dir, () => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('app is listening..')
  })
})
