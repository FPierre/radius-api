import express from 'express'
import bodyParser from 'body-parser'
import { graphql } from 'graphql'
import schema from './schema'

const app = express()
app.use(bodyParser.text({ type: 'application/graphql' }))

app.post('/endpoint', (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', '*')
  // res.setHeader('Access-Control-Allow-Methods', 'POST')
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  graphql(schema, req.body).then(result => {
    res.send(JSON.stringify(result, null, 2))
  })
})

const server = app.listen(3003, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('GraphQL listening at http://%s:%s', host, port)
})
