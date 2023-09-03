import { userModel } from "../models/Users.js"
import jwt from "jsonwebtoken"
import { signInErrors, signUpErrors } from "../utils/errors.js"

const maxAge = 1 * 24 * 60 * 60 * 1000

const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
}
export const signUp = async (req, res) => {
    //récupérer les données envoyées depuis la requete
    const { lastname, firstname, email, password, gender } = req.body
    try {
        //essayer  d'enregistrer l'utilisateur dans la base en vérifiant que les données envoyées depuis la requete sont
        // conformes aux regles définies sur les champs de notre base qui se trouve dans model(UserModel)
        const user = await userModel.create({ lastname, firstname, email, password, gender })
        //repondre à l'utilisateur
        res.status(201).json({
            message: "l'utilisateur a été bien ajouté",
            user: user._id
        })
    } catch (error) {
        //en cas d'erreur repondre
        const errors = signUpErrors(error)
        res.status(200).send({
            errors
        })
    }

}

export const signIn = async (req, res) => {
    // On destructure l'email et le password saisies par l'utilisateur et  qui sont envoyés via  la requete
    const { email, password } = req.body 
    try {
        const user = await userModel.login(email, password);
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge })
        res.status(200).json({
            user: user._id
        })
    } catch (err) {
        const errors = signInErrors(err);
        console.log("mes erreurs", err)
        res.status(200).json({ errors })
    }


}
export const logout = async (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}