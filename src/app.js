const app = require('express')()
const lib = require('./lib')

app.get('/:year/:month/:day', (req, res) => {
  const { year, month, day } = req.params
  res.write(`<html>
      ${lib.generateHTMLHead(year, month, day)}
      ${lib.generateHTMLBody(year, month, day)}
    </html>`)
  res.end()
})

app.listen(3000, () => {
  console.log('app is listening..')
})
