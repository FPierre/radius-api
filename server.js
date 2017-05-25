const express = require('express')
const app = express()

app.post('/endpoint', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.json({ foo: 'bar' })
})

app.listen(3003)
