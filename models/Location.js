import moongose from 'mongoose'
import secrets from './secrets'

mongoose.connect(`mongodb://${secrets.mongodb.user}:${secrets.mongodb.password}@${secrets.mongodb.db}`)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => { console.log('successful connection') })

const locationSchema = mongoose.Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  createdAt: { type: Date default: Date.now },
  updatedAt: { type: Date default: Date.now }
})

const Location = mongoose.model('Location', locationSchema)
