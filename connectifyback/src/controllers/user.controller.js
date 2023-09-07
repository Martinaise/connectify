import { userModel } from "../models/Users.js"
import mongoose from "mongoose"


const objectID = mongoose.Types.ObjectId
/*GET Pour obtenirla liste de tous les utilisateurs de la base de données.*/
export const getAllUsers = async (req, res) => {
    const users = await userModel.find({}).select('-password')
    res.status(200).json(users)
}
/*GET pour obtenir toutes les informations d'un utilisateurpécifique en fonction de son ID.*/

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
/* PUT pour mettre à jour les informations d'un utilisateur spécifique en fonction de son ID.valide en utilisant */
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
// DELETE pour supprimer un utilisateur spécifique en fonction de son ID.
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

