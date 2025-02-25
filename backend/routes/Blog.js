import express from 'express'
import { Create, deletePost, getposts, update } from '../controllers/Blog.js'
import { isAdmin, isLogin } from '../middleware/isAdmin.js'
import upload from '../middleware/Multer.js'

const BlogRoutes=express.Router()

BlogRoutes.post('/create',isLogin,isAdmin,upload.single('postimage'), Create)
BlogRoutes.delete('/delete/:id',isLogin,isAdmin,deletePost)
BlogRoutes.get('/getposts',getposts)
BlogRoutes.patch('/update/:id',isAdmin,upload.single('postimage'),update)

export default BlogRoutes


