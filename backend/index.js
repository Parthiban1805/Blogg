import express from 'express'
import dotenv from 'dotenv'
import DBcon from './utils/db.js'
import AuthRoutes from './routes/Auth.js'
dotenv.config()

const app = express()
const PORT=process.env.PORT || 3000


DBcon()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello backend")
})



app.use('/auth',AuthRoutes)

app.listen(PORT,()=>{
    console.log(`App is running on the port ${PORT}`)
})
