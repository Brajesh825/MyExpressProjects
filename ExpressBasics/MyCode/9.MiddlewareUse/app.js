const express = require('express')
const app = express()

const logger = function (req, res, next) {
    const method  = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time);
    next()
  }

app.use([logger])

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})
app.get('/About', (req, res) => {
    res.send('GET request to the Aboutpage')
  })

app.listen(3000, () =>{
    console.log(`Example app listening on port port!`)
})