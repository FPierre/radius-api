const express = require('express')
const bodyParser = require('body-parser')
const graphql = require('graphql')
const schema = require('./schema')

const app = express()
app.use(bodyParser.text({ type: 'application/graphql' }))

app.post('/endpoint', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  graphql(schema, req.body).then(result => {
    res.send(JSON.stringify(result, null, 2))
  })
})

app.listen(3003)
