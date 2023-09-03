import { UserPostModel } from "../models/UserPost.js"
import { userModel } from "../models/Users.js"
import mongoose from "mongoose"


const ObjectId = mongoose.Types.ObjectId

export const readPost = async (req, res) => {
    const post = await UserPostModel.find({})
    if (post) res.status(200).json({ data: post })
    else {
        console.log('erreur')
    }
}

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