import express from 'express'
import { Getalldata, Getuser, Userdelete } from '../controllers/Dashboard.js'
import { isAdmin } from '../middleware/isAdmin.js'

const DashboardRoutes=express.Router()

DashboardRoutes.get('/',isAdmin,Getalldata)
DashboardRoutes.get('/users',isAdmin,Getuser)
DashboardRoutes.delete('/deleteuser',isAdmin,Userdelete)

export default DashboardRoutes