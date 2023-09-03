import express from "express";
import { commentPost, createPost, deletePost, deletecommentPost, editCommentPost, readPost, updatePost } from "../controllers/post.controller.js";

const router = express.Router()

router.get('/',readPost)
router.post('/',createPost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)

//commentaires
router.patch('/comment-post/:id',commentPost)
router.patch('/edit-comment-post/:id',editCommentPost)
router.patch('/delete-comment-post/:id',deletecommentPost)


export {router as UserPostRouter }