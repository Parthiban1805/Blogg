import express from 'express'
import dotenv from 'dotenv'
import DBcon from './utils/db.js'
import AuthRoutes from './routes/Auth.js'
import cookieParser from 'cookie-parser'
import BlogRoutes from './routes/Blog.js'
import DashboardRoutes from './routes/Dashboard.js'
import CommentRoutes from './routes/Comments.js'
import PublicRoutes from './routes/Public.js'

dotenv.config()

const app = express()
const PORT=process.env.PORT || 3000


DBcon()
app.use(express.static('public'))
app.use(cookieParser())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello from backend ")
})

app.use('/auth',AuthRoutes)
app.use('/blog',BlogRoutes)
app.use('/dashboard',DashboardRoutes)
app.use('/comment',CommentRoutes)
app.use('/public',PublicRoutes)



app.listen(PORT,()=>{
    console.log(`App is running on the port ${PORT}`)
})



