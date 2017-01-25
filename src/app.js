const app = require('express')()
const lib = require('./lib')

const PORT = process.env.PORT || 3000
app.get('/:year/:month/:day', (req, res) => {

  if (!lib.validateParams(req.params)) {
    res.write('Bad request')
    res.end()
  } else {
    const { year, month, day } = req.params

    res.write(`<html>
        ${lib.generateHTMLHead(year, month, day)}
        ${lib.generateHTMLBody(year, month, day)}
      </html>`)
    res.end()
  }
})

app.listen(PORT, () => {
  console.log('app is listening..')
})
