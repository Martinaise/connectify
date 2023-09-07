// tous les appels qui seront fait par le front passe par ce fichier
import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import './src/config/db.js'
import { userRoutes } from "./src/routes/users.routes.js";
import cookieParser from 'cookie-parser'
import { checkUserifConnected, requireAuthentication } from "./src/middleware/auth.middleware.js";
import { UserPostRouter } from "./src/routes/post.routes.js";

const corsOptions = {
    origin: '*',
    credentials: true,
    allowedHeaders: ['sessionId', 'Content-Type'],
    exposedHeaders: ['sessionId'],
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
    preflightContinue: false,
    allowedHeaders: [
        'Content-Type',
    ]
}

const app = express();
app.use(cors(corsOptions));
dotenv.config()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

//middleware pour vérifier tous le token existe sur toutes les requetes exécutées
app.get('*', checkUserifConnected)
//
app.get('/jwtid', requireAuthentication, (req, res) => {
    res.status(200).send(res.locals.user._id)
})
//routes users
app.use('/api/user', userRoutes);

//les posts
app.use('/api/post', UserPostRouter)
//server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`le serveur tourne sur ${PORT}`));

// ConnectifyBack_1234