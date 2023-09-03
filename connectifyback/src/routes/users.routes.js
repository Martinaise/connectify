import express from "express";
import {signUp,logout,signIn} from "../controllers/auth.controller.js";
import {deleteUser, getAllUsers,updateUser,userInfo} from "../controllers/user.controller.js"


const router = express.Router();

//authentification
router.post("/register",signUp)
router.post('/login',signIn)
router.get('/logout',logout)

//afficher tous les utilisateurs
router.get("/",getAllUsers);
router.get("/:id",userInfo)

//modifier un utilisateur
router.put("/:id",updateUser)
//supprimer 
router.delete("/:id",deleteUser)

export {router as userRoutes}