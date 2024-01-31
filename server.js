require('dotenv').config()
const express = require('express')
const { upload } = require('./config/storages')

const app = express()
app.set('view engine', 'ejs')

app.get('/', (_, res) => {
  res.render('index', {
    message: ''
  })
})

app.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end('Something went wrong:(')
    }
    const quantity = req.files?.length || 0
    res.render('index', {
      message: `Archivos subidos: ${quantity}`
    })    
  })
})

app.listen(process.env.PORT || 3000)
