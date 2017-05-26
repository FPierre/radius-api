import moongose from 'mongoose'
import secrets from './secrets'

mongoose.connect(`mongodb://${secrets.mongodb.user}:${secrets.mongodb.password}@${secrets.mongodb.db}`)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => { console.log('successful connection') })

const locationSchema = mongoose.Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  created_at: Date,
  updated_at: Date
})

const Location = mongoose.model('Location', locationSchema)
