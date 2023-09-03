import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_USER = process.env.DB_USER
const DB_URL = process.env.DB_URL
// `mongodb+srv://${DB_USER}:${DB_PASSWORD}@connectify.vomswjn.mongodb.net/connectify?retryWrites=true&w=majority`
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connecté à mogodb'))
    .catch((err) => console.log('erreur de connexion à MongoDb', err))