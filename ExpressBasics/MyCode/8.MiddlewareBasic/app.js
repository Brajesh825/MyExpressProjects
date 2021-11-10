const express = require('express')
const app = express()

const logger = function (req, res, next) {
  const method  = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method,url,time);
  next()
}

app.get('/', logger,(req, res) => {
    res.send('Hello World!')
})

app.get('/About', logger,(req, res) => {
  res.send('About Page')
})

app.listen(3000, () => {
    console.log(`Server is listening on port 3000!`)
})