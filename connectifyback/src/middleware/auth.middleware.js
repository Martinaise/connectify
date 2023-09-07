
// ici on verifie si l'utilisateur a le bon token qu'on lui a donner

import jwt from "jsonwebtoken";
import { userModel } from "../models/Users.js";
// on extrait de token des cookie
export const checkUserifConnected = async (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
// on verifie si token est valide
        const isverify = jwt.verify(token, process.env.TOKEN_SECRET)

        if (!isverify) {
            res.locals.user = null
            res.cookie('jwt', '', { maxAge: 1 })
            next();
        } else {
            let user = await userModel.findById(isverify.id);
            res.locals.user = user;
            next();
        }


    }
    else {
        res.locals.user = null;
        next();
    }

}

export const requireAuthentication = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        const isverify = jwt.verify(token, process.env.TOKEN_SECRET)
        if (!isverify) {
            console.log('err')
        } else {
            console.log(isverify.id)
            next();
        }
    } else {
        console.log('No token');
    }


}