import { UserPostModel } from "../models/UserPost.js"
import { userModel } from "../models/Users.js"
import mongoose from "mongoose"




// recupère tous les posts de la BDD et renvois une réponse. Si post reponse200 si non reponse erreur
const ObjectId = mongoose.Types.ObjectId

export const readPost = async (req, res) => {
    const post = await UserPostModel.find({})
    if (post) res.status(200).json({ data: post })
    else {
        console.log('erreur')
    }
}

//Cette fonction crée une nouvelle publication en utilisant les données de la requête reçue, puis la sauvegarde dans la base de données. reponse crée 201 pas cré erreur400
export const createPost = async (req, res) => {
    const newPost = new UserPostModel({
        posterId: req.body.posterId,
        message: req.body.message,
        video: req.body.video,
        likers: [],
        comments: []
    });
    try {
        const post = await newPost.save()
        return res.status(201).json(post)
    } catch (error) {
        return res.status(401).send(error)
    }
}
//  Cette fonction met à jour une publication existante en utilisant l'ID passé dans les paramètres de la requête
// 1 Vérifie la validité de l'ID: réponse 400 si id valide si nom message ID inconnu
// 2 mise à jour de message 
export const updatePost = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            message: `ID inconnu ${req.params.id}`
        })
    }
    const updatedpost = {
        message: req.body.message
    }
    const updateRecord = await UserPostModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatedpost },
        { new: true }
    )
    if (updateRecord) {
        res.status(200).json({
            data: updateRecord
        })
    }
    else {
        console.log(`erreur ${updateRecord}`)
    }

}
//Cette fonction supprime une publication existante en utilisant l'ID passé dans les paramètres de la requête
export const deletePost = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            message: `ID inconnu ${req.params.id}`
        })
    }
    const postDeleted = UserPostModel.deleteOne({ _id: req.params.id }).exec();
    if (postDeleted.deletedCount > 0) {
        return res.status(200).json({
            data: postDeleted,
            message: 'le post a été supprimé avec succès'
        })
    }
}
// Cette fonction permet d'ajouter un commentaire à une publication existante. Elle vérifie d'abord la validité de l'ID de la publication cible
export const commentPost = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            message: `ID inconnu ${req.params.id}`
        })
    }
    try {
        const commentCreated = await UserPostModel.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    comments: {
                        commenterId: req.body.commenterId,
                        commenterLastname: req.body.commenterLastname,
                        commenterFirstname: req.body.commenterFirstname,
                        text: req.body.text,
                        timestamp: new Date().getTime()
                    }
                }
            },
            { new: true }
        )
        if(commentCreated){
            
        }
    } catch (error) {

    }
}

export const editCommentPost = async (req, res) => {

}

export const deletecommentPost = async (req, res) => {

}