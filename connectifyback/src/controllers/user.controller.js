import { userModel } from "../models/Users.js"
import mongoose from "mongoose"


const objectID = mongoose.Types.ObjectId

export const getAllUsers = async (req, res) => {
    const users = await userModel.find({}).select('-password')
    res.status(200).json(users)
}

export const userInfo = async (req, res) => {
    if (!objectID.isValid(req.params.id)) {
        return res.status(400).json({
            message: `cet utilisateur n'existe pas ${req.params.id}`
        })
    }
    try {
        const docs = await userModel.findById(req.params.id).select('-password');

        if (docs) {
            res.status(200).json({
                data: docs
            });
        } else {
            res.status(404).json({
                error: `ID inconnu ${req.params.id}`
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Erreur lors de la recherche dans la base de données'
        });
    }



}
export const updateUser = async (req, res) => {
    if (!objectID.isValid(req.params.id)) {
        return res.status(400).json({
            message: `cet utilisateur n'existe pas ${req.params.id}`
        })
    }
    try {
        const updateDoc = await userModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    bio: req.body.bio
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true, },

        );
        if (updateDoc) {
            return res.status(200).json({
                data: updateDoc
            });
        } else {
            return res.status(500).json({
                message: "la mise à jour n'a pas marché"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}
export const deleteUser = async (req,res)=>{
    if (!objectID.isValid(req.params.id)) {
        return res.status(400).json({
            message: `cet utilisateur n'existe pas ${req.params.id}`
        })
    }

    try {
        const userdeletd = await userModel.deleteOne({ _id: req.params.id }).exec();
        if(userdeletd.deletedCount>0){
            return res.status(200).json({
                data: userdeletd,
                message :'utilisateur supprimé avec succès'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "la suppression n'a pas marché"
        })
    }
}

